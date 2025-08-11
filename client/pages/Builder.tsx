import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Eye, FileText, Plus, Trash2, Brain, Loader2, Save, FolderOpen } from "lucide-react";
import { aiService } from "@/lib/ai-service";
import { exportToPDF } from "@/lib/pdf-export";
import { dbService } from "@/lib/database";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

export default function Builder() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
  });

  const [currentSkill, setCurrentSkill] = useState("");
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ id: string; email: string; name: string } | null>(null);
  const [currentResumeId, setCurrentResumeId] = useState<string | null>(null);
  const [resumeTitle, setResumeTitle] = useState("My Resume");
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const { toast } = useToast();

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      gpa: "",
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const addSkill = () => {
    if (currentSkill.trim()) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }));
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handlePersonalInfoChange = (field: keyof typeof resumeData.personalInfo, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleAISummaryGeneration = async () => {
    if (!resumeData.personalInfo.fullName) {
      toast({
        title: "Missing Information",
        description: "Please add your name first to generate AI suggestions.",
        variant: "destructive",
      });
      return;
    }

    setIsLoadingAI(true);
    try {
      const jobTitle = resumeData.experience[0]?.position || "Professional";
      const experienceList = resumeData.experience.map(exp => exp.company);
      const suggestions = await aiService.generateSummary(jobTitle, experienceList, resumeData.skills);

      if (suggestions.length > 0) {
        setResumeData(prev => ({ ...prev, summary: suggestions[0].content }));
        toast({
          title: "AI Suggestion Applied",
          description: "Professional summary has been generated based on your information.",
        });
      }
    } catch (error) {
      toast({
        title: "AI Service Error",
        description: "Unable to generate suggestions at this time. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingAI(false);
    }
  };

  const handleAISkillSuggestions = async () => {
    const jobTitle = resumeData.experience[0]?.position || "Professional";

    setIsLoadingAI(true);
    try {
      const suggestions = await aiService.suggestSkills(jobTitle, resumeData.skills);

      if (suggestions.length > 0) {
        const newSkills = suggestions.slice(0, 3).map(s => s.skill);
        setResumeData(prev => ({
          ...prev,
          skills: [...prev.skills, ...newSkills]
        }));
        toast({
          title: "Skills Added",
          description: `Added ${newSkills.length} relevant skills based on your role.`,
        });
      }
    } catch (error) {
      toast({
        title: "AI Service Error",
        description: "Unable to suggest skills at this time. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingAI(false);
    }
  };

  const handleAIOptimizeExperience = async (experienceId: string) => {
    const experience = resumeData.experience.find(exp => exp.id === experienceId);
    if (!experience || !experience.description) {
      toast({
        title: "Missing Information",
        description: "Please add a job description first to optimize it.",
        variant: "destructive",
      });
      return;
    }

    setIsLoadingAI(true);
    try {
      const suggestions = await aiService.optimizeJobDescription(experience.description, experience.position);

      if (suggestions.length > 0) {
        updateExperience(experienceId, "description", suggestions[0].content);
        toast({
          title: "Description Optimized",
          description: "Your job description has been enhanced with AI suggestions.",
        });
      }
    } catch (error) {
      toast({
        title: "AI Service Error",
        description: "Unable to optimize description at this time. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingAI(false);
    }
  };

  const handleAISkillsOptimization = async () => {
    if (resumeData.skills.length === 0) {
      toast({
        title: "No Skills Added",
        description: "Please add some skills first before optimizing.",
        variant: "destructive",
      });
      return;
    }

    const jobTitle = resumeData.experience[0]?.position || "Professional";

    setIsLoadingAI(true);
    try {
      // Get ATS score and suggestions
      const atsResult = await aiService.getATSScore(resumeData);
      const skillSuggestions = await aiService.suggestSkills(jobTitle, resumeData.skills);

      // Add top 2 missing skills if any
      if (skillSuggestions.length > 0) {
        const newSkills = skillSuggestions.slice(0, 2).map(s => s.skill);
        setResumeData(prev => ({
          ...prev,
          skills: [...prev.skills, ...newSkills]
        }));
      }

      toast({
        title: "Skills Optimized",
        description: `Added ${skillSuggestions.slice(0, 2).length} high-impact skills. ATS Score: ${atsResult.score}%`,
      });
    } catch (error) {
      toast({
        title: "AI Service Error",
        description: "Unable to optimize skills at this time. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingAI(false);
    }
  };

  const handleSaveResume = async () => {
    if (!resumeData.personalInfo.fullName) {
      toast({
        title: "Missing Information",
        description: "Please add your name before saving your resume.",
        variant: "destructive",
      });
      return;
    }

    if (!currentUser) {
      // For demo purposes, create a temporary user
      // In production, you'd have proper authentication
      const tempUser = await dbService.createUser({
        email: resumeData.personalInfo.email || "user@example.com",
        name: resumeData.personalInfo.fullName
      });
      setCurrentUser(tempUser);
    }

    setIsSaving(true);
    try {
      const userId = currentUser?.id || "";
      const resumeDataToSave = {
        title: resumeTitle,
        ...resumeData
      };

      if (currentResumeId) {
        // Update existing resume
        await dbService.updateResume(currentResumeId, resumeDataToSave);
        toast({
          title: "Resume Updated",
          description: "Your resume has been saved successfully.",
        });
      } else {
        // Create new resume
        const result = await dbService.saveResume(userId, resumeDataToSave);
        setCurrentResumeId(result.id);
        toast({
          title: "Resume Saved",
          description: "Your resume has been saved successfully.",
        });
      }
      setShowSaveDialog(false);
    } catch (error) {
      toast({
        title: "Save Error",
        description: "Unable to save your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleLoadResume = async (resumeId: string) => {
    try {
      const loadedResume = await dbService.getResume(resumeId);

      setResumeData({
        personalInfo: loadedResume.personalInfo,
        summary: loadedResume.summary || "",
        experience: loadedResume.experience.map(exp => ({
          ...exp,
          id: exp.id || Date.now().toString()
        })),
        education: loadedResume.education.map(edu => ({
          ...edu,
          id: edu.id || Date.now().toString()
        })),
        skills: loadedResume.skills
      });

      setResumeTitle(loadedResume.title);
      setCurrentResumeId(loadedResume.id!);

      toast({
        title: "Resume Loaded",
        description: "Your resume has been loaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Load Error",
        description: "Unable to load resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleExportPDF = async () => {
    if (!resumeData.personalInfo.fullName) {
      toast({
        title: "Missing Information",
        description: "Please add your name before exporting your resume.",
        variant: "destructive",
      });
      return;
    }

    setIsExporting(true);
    try {
      exportToPDF(resumeData);
      toast({
        title: "Resume Exported",
        description: "Your resume has been downloaded as a PDF.",
      });
    } catch (error) {
      toast({
        title: "Export Error",
        description: "Unable to export your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">ResumeAI Builder</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button size="sm" onClick={handleExportPDF} disabled={isExporting}>
                {isExporting ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Add your contact details and professional information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          value={resumeData.personalInfo.fullName}
                          onChange={(e) => handlePersonalInfoChange("fullName", e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={resumeData.personalInfo.email}
                          onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={resumeData.personalInfo.phone}
                          onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={resumeData.personalInfo.location}
                          onChange={(e) => handlePersonalInfoChange("location", e.target.value)}
                          placeholder="New York, NY"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="website">Website (Optional)</Label>
                        <Input
                          id="website"
                          value={resumeData.personalInfo.website}
                          onChange={(e) => handlePersonalInfoChange("website", e.target.value)}
                          placeholder="https://johndoe.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
                        <Input
                          id="linkedin"
                          value={resumeData.personalInfo.linkedin}
                          onChange={(e) => handlePersonalInfoChange("linkedin", e.target.value)}
                          placeholder="https://linkedin.com/in/johndoe"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="summary">Professional Summary</Label>
                      <Textarea
                        id="summary"
                        value={resumeData.summary}
                        onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))}
                        placeholder="Write a brief summary of your professional background and goals..."
                        rows={4}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={handleAISummaryGeneration}
                        disabled={isLoadingAI}
                      >
                        {isLoadingAI ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Brain className="w-4 h-4 mr-2" />
                        )}
                        AI Suggestions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Experience */}
              <TabsContent value="experience" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Work Experience</CardTitle>
                        <CardDescription>
                          Add your work history and achievements
                        </CardDescription>
                      </div>
                      <Button onClick={addExperience} size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.experience.map((exp, index) => (
                      <div key={exp.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Experience {index + 1}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeExperience(exp.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Company</Label>
                            <Input
                              value={exp.company}
                              onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                              placeholder="Company Name"
                            />
                          </div>
                          <div>
                            <Label>Position</Label>
                            <Input
                              value={exp.position}
                              onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                              placeholder="Job Title"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Start Date</Label>
                            <Input
                              type="month"
                              value={exp.startDate}
                              onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>End Date</Label>
                            <Input
                              type="month"
                              value={exp.endDate}
                              onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                              disabled={exp.current}
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                            placeholder="Describe your responsibilities and achievements..."
                            rows={3}
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => handleAIOptimizeExperience(exp.id)}
                            disabled={isLoadingAI || !exp.description.trim()}
                          >
                            {isLoadingAI ? (
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : (
                              <Brain className="w-4 h-4 mr-2" />
                            )}
                            AI Optimize
                          </Button>
                        </div>
                      </div>
                    ))}
                    {resumeData.experience.length === 0 && (
                      <div className="text-center py-8 text-slate-500">
                        <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No work experience added yet</p>
                        <p className="text-sm">Click "Add Experience" to get started</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Education</CardTitle>
                        <CardDescription>
                          Add your educational background
                        </CardDescription>
                      </div>
                      <Button onClick={addEducation} size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Education
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.education.map((edu, index) => (
                      <div key={edu.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Education {index + 1}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEducation(edu.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>School</Label>
                            <Input
                              value={edu.school}
                              onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                              placeholder="University Name"
                            />
                          </div>
                          <div>
                            <Label>Degree</Label>
                            <Input
                              value={edu.degree}
                              onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                              placeholder="Bachelor of Science"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Field of Study</Label>
                            <Input
                              value={edu.fieldOfStudy}
                              onChange={(e) => updateEducation(edu.id, "fieldOfStudy", e.target.value)}
                              placeholder="Computer Science"
                            />
                          </div>
                          <div>
                            <Label>GPA (Optional)</Label>
                            <Input
                              value={edu.gpa}
                              onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                              placeholder="3.8"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Start Date</Label>
                            <Input
                              type="month"
                              value={edu.startDate}
                              onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>End Date</Label>
                            <Input
                              type="month"
                              value={edu.endDate}
                              onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    {resumeData.education.length === 0 && (
                      <div className="text-center py-8 text-slate-500">
                        <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No education added yet</p>
                        <p className="text-sm">Click "Add Education" to get started</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>
                      Add your technical and soft skills
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        placeholder="Enter a skill"
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <Button onClick={addSkill}>Add</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {skill}
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 hover:text-red-500"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    {resumeData.skills.length === 0 && (
                      <div className="text-center py-8 text-slate-500">
                        <p>No skills added yet</p>
                        <p className="text-sm">Add skills that are relevant to your target job</p>
                      </div>
                    )}
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={handleAISkillSuggestions}
                        disabled={isLoadingAI}
                      >
                        {isLoadingAI ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Brain className="w-4 h-4 mr-2" />
                        )}
                        AI Skill Suggestions
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={handleAISkillsOptimization}
                        disabled={isLoadingAI || resumeData.skills.length === 0}
                      >
                        {isLoadingAI ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Brain className="w-4 h-4 mr-2" />
                        )}
                        AI Optimize & ATS Score
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8">
            <Card>
              <CardHeader>
                <CardTitle>Resume Preview</CardTitle>
                <CardDescription>
                  See how your resume will look
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 min-h-[800px] shadow-sm">
                  {/* Resume Preview Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center border-b pb-4">
                      <h1 className="text-2xl font-bold text-slate-900">
                        {resumeData.personalInfo.fullName || "Your Name"}
                      </h1>
                      <div className="text-slate-600 text-sm mt-2 space-y-1">
                        {resumeData.personalInfo.email && <div>{resumeData.personalInfo.email}</div>}
                        {resumeData.personalInfo.phone && <div>{resumeData.personalInfo.phone}</div>}
                        {resumeData.personalInfo.location && <div>{resumeData.personalInfo.location}</div>}
                      </div>
                    </div>

                    {/* Summary */}
                    {resumeData.summary && (
                      <div>
                        <h2 className="text-lg font-semibold text-slate-900 mb-2">Professional Summary</h2>
                        <p className="text-slate-700 text-sm leading-relaxed">{resumeData.summary}</p>
                      </div>
                    )}

                    {/* Experience */}
                    {resumeData.experience.length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold text-slate-900 mb-3">Work Experience</h2>
                        <div className="space-y-4">
                          {resumeData.experience.map((exp) => (
                            <div key={exp.id}>
                              <div className="flex justify-between items-start mb-1">
                                <h3 className="font-medium text-slate-900">{exp.position || "Position"}</h3>
                                <span className="text-sm text-slate-600">
                                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                </span>
                              </div>
                              <div className="text-slate-700 font-medium text-sm mb-2">
                                {exp.company || "Company Name"}
                              </div>
                              {exp.description && (
                                <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Education */}
                    {resumeData.education.length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold text-slate-900 mb-3">Education</h2>
                        <div className="space-y-3">
                          {resumeData.education.map((edu) => (
                            <div key={edu.id}>
                              <div className="flex justify-between items-start mb-1">
                                <h3 className="font-medium text-slate-900">
                                  {edu.degree || "Degree"} in {edu.fieldOfStudy || "Field"}
                                </h3>
                                <span className="text-sm text-slate-600">
                                  {edu.startDate} - {edu.endDate}
                                </span>
                              </div>
                              <div className="text-slate-700 text-sm">
                                {edu.school || "School Name"}
                                {edu.gpa && <span className="ml-2">• GPA: {edu.gpa}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {resumeData.skills.length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold text-slate-900 mb-3">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
