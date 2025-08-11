import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  Zap,
  Award,
  Eye,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function Tips() {
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
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Resume Tips
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
            Expert Resume Writing Tips
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your resume from ordinary to extraordinary with these
            proven strategies from hiring managers and career experts.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                6 seconds
              </div>
              <div className="text-slate-600">
                Average time recruiters spend reading a resume
              </div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">75%</div>
              <div className="text-slate-600">
                Of resumes are filtered out by ATS systems
              </div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="py-6">
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-slate-600">
                Higher interview rate with optimized resumes
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tips */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">ATS Optimization</CardTitle>
                <Badge variant="secondary">Critical</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                75% of resumes never reach human eyes due to Applicant Tracking
                Systems (ATS). Here's how to beat the bots:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Do This:
                  </h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>
                      • Use standard section headings (Experience, Education,
                      Skills)
                    </li>
                    <li>• Include keywords from the job description</li>
                    <li>• Use simple, clean formatting</li>
                    <li>• Save as .docx or .pdf as requested</li>
                    <li>
                      • Use standard fonts (Arial, Calibri, Times New Roman)
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-700 flex items-center">
                    <span className="w-4 h-4 text-red-500 mr-2">✗</span>
                    Avoid:
                  </h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Images, graphics, or complex formatting</li>
                    <li>• Tables and columns</li>
                    <li>• Creative section names</li>
                    <li>• Headers and footers with important info</li>
                    <li>• Unusual fonts or font sizes below 10pt</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">
                  Quantify Your Achievements
                </CardTitle>
                <Badge variant="secondary">High Impact</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Numbers speak louder than words. Transform weak bullet points
                into powerful statements:
              </p>
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <div className="text-red-700 font-medium">
                    ❌ Weak Example:
                  </div>
                  <div className="text-red-600 text-sm">
                    "Responsible for managing social media accounts"
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <div className="text-green-700 font-medium">
                    ✅ Strong Example:
                  </div>
                  <div className="text-green-600 text-sm">
                    "Managed 5 social media accounts, increasing follower
                    engagement by 150% and driving $50K in quarterly revenue
                    through targeted campaigns"
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Action Verbs to Use:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-600">
                  <span>• Achieved</span>
                  <span>• Optimized</span>
                  <span>• Generated</span>
                  <span>• Implemented</span>
                  <span>• Increased</span>
                  <span>• Streamlined</span>
                  <span>• Developed</span>
                  <span>• Delivered</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">
                  Format for Readability
                </CardTitle>
                <Badge variant="secondary">Essential</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Remember, you have 6 seconds to make an impression. Make every
                second count:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">
                    Structure & Length:
                  </h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Keep it to 1-2 pages maximum</li>
                    <li>• Use reverse chronological order</li>
                    <li>• Include 3-5 bullet points per role</li>
                    <li>• Use consistent formatting throughout</li>
                    <li>• Include plenty of white space</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">
                    Contact Information:
                  </h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Professional email address</li>
                    <li>• LinkedIn profile URL</li>
                    <li>• Phone number with professional voicemail</li>
                    <li>• City, State (full address not needed)</li>
                    <li>• Portfolio/website if relevant</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">
                  Industry-Specific Tips
                </CardTitle>
                <Badge variant="secondary">Specialized</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Tech & Engineering:
                    </h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Include GitHub/portfolio links</li>
                      <li>• List programming languages and tools</li>
                      <li>• Mention specific technologies used</li>
                      <li>• Include project metrics and impact</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Sales & Marketing:
                    </h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Lead with revenue numbers</li>
                      <li>• Show quota attainment percentages</li>
                      <li>• Include campaign ROI metrics</li>
                      <li>• Mention team size if you managed others</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Creative Fields:
                    </h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Include link to portfolio</li>
                      <li>• Mention software proficiency</li>
                      <li>• Show project scope and reach</li>
                      <li>• Include awards or recognition</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Management:
                    </h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Show team size and budget managed</li>
                      <li>• Include process improvements</li>
                      <li>• Mention cost savings achieved</li>
                      <li>• Highlight strategic initiatives led</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Apply These Tips?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our AI-powered resume builder automatically implements these best
              practices to create resumes that get results.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/builder">Build Your Resume Now</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
