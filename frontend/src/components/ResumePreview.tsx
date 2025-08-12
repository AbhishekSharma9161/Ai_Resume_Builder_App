"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";

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

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  startDate: string;
  endDate: string;
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
  projects: Project[];
  skills: string[];
}

interface ResumePreviewProps {
  resumeData: ResumeData;
}

export function ResumePreview({ resumeData }: ResumePreviewProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">
          {resumeData.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="text-slate-600 space-y-1">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span className="text-sm">{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span className="text-sm">{resumeData.personalInfo.phone}</span>
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span className="text-sm">{resumeData.personalInfo.location}</span>
              </div>
            )}
          </div>
          {(resumeData.personalInfo.website || resumeData.personalInfo.linkedin) && (
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {resumeData.personalInfo.website && (
                <div className="flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  <span className="text-sm">{resumeData.personalInfo.website}</span>
                </div>
              )}
              {resumeData.personalInfo.linkedin && (
                <div className="flex items-center gap-1">
                  <Linkedin className="w-3 h-3" />
                  <span className="text-sm">{resumeData.personalInfo.linkedin}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Summary */}
      {resumeData.summary && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Professional Summary
          </h2>
          <p className="text-slate-700 leading-relaxed">
            {resumeData.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {resumeData.experience.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Experience
          </h2>
          <div className="space-y-4">
            {resumeData.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-slate-900">{exp.position}</h3>
                    <p className="text-slate-600">{exp.company}</p>
                  </div>
                  <p className="text-sm text-slate-500">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                </div>
                {exp.description && (
                  <p className="text-slate-700 text-sm mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {resumeData.projects.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Projects
          </h2>
          <div className="space-y-4">
            {resumeData.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-slate-900">{project.name}</h3>
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="text-blue-600 text-sm hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.link}
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">
                    {project.startDate} - {project.endDate}
                  </p>
                </div>
                <p className="text-slate-700 text-sm">{project.description}</p>
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {resumeData.education.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Education
          </h2>
          <div className="space-y-3">
            {resumeData.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-slate-900">{edu.degree}</h3>
                    <p className="text-slate-600">{edu.school}</p>
                    <p className="text-slate-600 text-sm">{edu.fieldOfStudy}</p>
                    {edu.gpa && (
                      <p className="text-slate-500 text-sm">GPA: {edu.gpa}</p>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <Badge key={index} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
