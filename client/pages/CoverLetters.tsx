import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Mail, User, Target, Star, CheckCircle } from "lucide-react";

export default function CoverLetters() {
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
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Cover Letters
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Master the Art of Cover Letters
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A compelling cover letter can be the difference between landing an interview 
            and being overlooked. Learn how to write letters that open doors.
          </p>
        </div>

        {/* Cover Letter Structure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <FileText className="w-6 h-6 mr-3" />
              The Perfect Cover Letter Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg mb-3">
                  1
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Header</h3>
                <p className="text-sm text-slate-600">Your contact info and the employer's details</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg mb-3">
                  2
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Opening</h3>
                <p className="text-sm text-slate-600">Hook them with a strong first paragraph</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg mb-3">
                  3
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Body</h3>
                <p className="text-sm text-slate-600">Showcase your relevant experience and skills</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg mb-3">
                  4
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Closing</h3>
                <p className="text-sm text-slate-600">Professional sign-off with next steps</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">Opening Paragraph That Hooks</CardTitle>
                <Badge variant="secondary">Critical</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Your opening paragraph should grab attention immediately. Avoid generic openers 
                and lead with your value proposition.
              </p>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <div className="text-red-700 font-medium">❌ Generic Opening:</div>
                  <div className="text-red-600 text-sm">"I am writing to apply for the position advertised on your website."</div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <div className="text-green-700 font-medium">✅ Strong Opening:</div>
                  <div className="text-green-600 text-sm">"As a marketing manager who increased lead generation by 300% at my previous company, I'm excited to bring my proven track record of growth to the Marketing Director role at [Company]."</div>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Opening Formula:</h4>
                <p className="text-sm text-slate-600">
                  [Relevant Achievement/Experience] + [How it relates to their needs] + [Enthusiasm for the role]
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">Research & Personalization</CardTitle>
                <Badge variant="secondary">High Impact</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Generic cover letters are obvious and ineffective. Show you've done your homework:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Research Checklist:
                  </h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Company's recent news or achievements</li>
                    <li>• Company culture and values</li>
                    <li>• Hiring manager's name (LinkedIn search)</li>
                    <li>• Specific job requirements</li>
                    <li>• Company's products or services</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Personalization Examples:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>"I was impressed by [Company]'s recent expansion into..."</li>
                    <li>"Your commitment to [value] aligns with my..."</li>
                    <li>"I noticed [Company] is launching [product]..."</li>
                    <li>"Having used [Company's product], I understand..."</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">Show, Don't Tell</CardTitle>
                <Badge variant="secondary">Essential</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Don't just repeat your resume. Use specific examples that demonstrate your value:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">❌ Telling:</h4>
                  <div className="space-y-2 text-red-600 text-sm">
                    <p>"I am a hard worker with excellent communication skills."</p>
                    <p>"I have strong leadership abilities."</p>
                    <p>"I am detail-oriented and organized."</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">✅ Showing:</h4>
                  <div className="space-y-2 text-green-600 text-sm">
                    <p>"I consistently exceeded sales targets by 25% while maintaining a 98% customer satisfaction rate."</p>
                    <p>"I led a cross-functional team of 12 to deliver a $2M project 3 weeks ahead of schedule."</p>
                    <p>"My attention to detail caught a critical error that saved the company $50K in potential losses."</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Industry-Specific Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">Technology</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-blue-800"><strong>Opening:</strong> Lead with a technical achievement</p>
                    <p className="text-blue-700">
                      "As a full-stack developer who optimized database queries 
                      to reduce load times by 40%..."
                    </p>
                    <p className="text-blue-800"><strong>Focus:</strong> Technical skills, project impact, problem-solving</p>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-900">Marketing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-purple-800"><strong>Opening:</strong> Lead with campaign results</p>
                    <p className="text-purple-700">
                      "Having generated $2M in pipeline through a targeted 
                      ABM campaign..."
                    </p>
                    <p className="text-purple-800"><strong>Focus:</strong> ROI, growth metrics, creativity</p>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">Sales</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-green-800"><strong>Opening:</strong> Lead with revenue numbers</p>
                    <p className="text-green-700">
                      "After closing $5M in new business while maintaining 
                      120% of quota..."
                    </p>
                    <p className="text-green-800"><strong>Focus:</strong> Revenue, quota attainment, relationship building</p>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-900">Healthcare</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-orange-800"><strong>Opening:</strong> Lead with patient impact</p>
                    <p className="text-orange-700">
                      "Having improved patient satisfaction scores by 30% 
                      through process optimization..."
                    </p>
                    <p className="text-orange-800"><strong>Focus:</strong> Patient outcomes, compliance, teamwork</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-700">❌ Don't Do This:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Start with "To Whom It May Concern"</li>
                    <li>• Repeat everything from your resume</li>
                    <li>• Use a generic template for every job</li>
                    <li>• Focus on what you want from the job</li>
                    <li>• Exceed one page in length</li>
                    <li>• Include salary expectations</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700">✅ Do This Instead:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Address the hiring manager by name</li>
                    <li>• Complement your resume with new details</li>
                    <li>• Customize for each specific role</li>
                    <li>• Focus on what you can offer them</li>
                    <li>• Keep it concise and impactful</li>
                    <li>• End with a clear call to action</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Winning Cover Letter?
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Start with a professional resume that gives you the foundation 
              for compelling cover letters.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/builder">
                Build Your Resume First
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
