import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Download,
  FileText,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-indigo-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">ResumeAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/templates"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Templates
            </Link>
            <Link
              to="/examples"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Examples
            </Link>
            <Link
              to="/pricing"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </Link>
            <Button asChild size="sm">
              <Link to="/builder">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center relative overflow-hidden bg-gradient-to-br from-slate-600 via-blue-800 to-indigo-900">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-cyan-200 text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-3 h-3 mr-2 text-cyan-300" />
            AI-Powered Resume Builder
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-200">
              Build Your Perfect Resume with{" "}
            </span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              AI Magic
              {/* Static sparkle effects around the text */}
              <span className="absolute -top-2 -right-3 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
              <span className="absolute -bottom-2 -left-3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-100"></span>
              <span className="absolute top-1/2 -right-4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-200"></span>
              <span className="absolute -top-3 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-300"></span>
              <span className="absolute -bottom-3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-500"></span>
              <span className="absolute top-0 -left-2 w-1 h-1 bg-green-400 rounded-full animate-ping delay-700"></span>
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Create professional, ATS-optimized resumes in minutes with our
            AI-powered builder. Get personalized suggestions, smart formatting,
            and industry-specific content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link to="/builder">
                Start Building Free <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base" asChild>
              <Link to="/examples">View Examples</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-blue-200">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>50K+ users</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>100K+ downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Choose ResumeAI?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our AI-powered platform combines advanced technology with
            professional design to help you create resumes that get results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
            {/* AI Brain Pattern Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              {/* Neural network pattern */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-blue-600"
              >
                <defs>
                  <pattern
                    id="neural"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="2"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <line
                      x1="10"
                      y1="10"
                      x2="30"
                      y2="10"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                    <line
                      x1="10"
                      y1="10"
                      x2="10"
                      y2="30"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#neural)" />
              </svg>
            </div>
            <div className="absolute bottom-2 right-2 opacity-20">
              <div className="flex space-x-1">
                <div className="w-2 h-6 bg-blue-400 rounded animate-pulse"></div>
                <div className="w-2 h-4 bg-cyan-400 rounded animate-pulse delay-100"></div>
                <div className="w-2 h-8 bg-blue-500 rounded animate-pulse delay-200"></div>
                <div className="w-2 h-3 bg-cyan-500 rounded animate-pulse delay-300"></div>
              </div>
            </div>
            <CardHeader className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="group-hover:text-blue-600 transition-colors">
                AI-Powered Content
              </CardTitle>
              <CardDescription>
                Get intelligent suggestions for job descriptions, skills, and
                achievements tailored to your industry with advanced machine
                learning.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
            {/* ATS Scanner Pattern Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-50"></div>
            <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
              {/* Document scanner pattern */}
              <div className="space-y-1">
                <div className="h-1 bg-purple-600 rounded w-full animate-pulse"></div>
                <div className="h-1 bg-indigo-600 rounded w-3/4 animate-pulse delay-100"></div>
                <div className="h-1 bg-purple-600 rounded w-5/6 animate-pulse delay-200"></div>
                <div className="h-1 bg-indigo-600 rounded w-2/3 animate-pulse delay-300"></div>
                <div className="h-1 bg-purple-600 rounded w-4/5 animate-pulse delay-400"></div>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 opacity-20">
              <div className="w-8 h-8 border-2 border-purple-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
              </div>
            </div>
            <CardHeader className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="group-hover:text-purple-600 transition-colors">
                ATS Optimization
              </CardTitle>
              <CardDescription>
                Our AI ensures your resume passes Applicant Tracking Systems
                with optimized formatting, keywords, and structure analysis.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
            {/* Template Grid Pattern Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50"></div>
            <div className="absolute top-2 right-2 w-16 h-20 opacity-15">
              {/* Mini template previews */}
              <div className="grid grid-cols-2 gap-1 h-full">
                <div className="bg-green-400 rounded-sm flex flex-col p-0.5 space-y-0.5">
                  <div className="h-0.5 bg-white rounded w-full"></div>
                  <div className="h-0.5 bg-white/80 rounded w-3/4"></div>
                  <div className="h-0.5 bg-white/60 rounded w-2/3"></div>
                </div>
                <div className="bg-emerald-400 rounded-sm flex flex-col p-0.5 space-y-0.5">
                  <div className="h-0.5 bg-white rounded w-full"></div>
                  <div className="h-0.5 bg-white/80 rounded w-4/5"></div>
                  <div className="h-0.5 bg-white/60 rounded w-3/4"></div>
                </div>
                <div className="bg-teal-400 rounded-sm flex flex-col p-0.5 space-y-0.5">
                  <div className="h-0.5 bg-white rounded w-full"></div>
                  <div className="h-0.5 bg-white/80 rounded w-2/3"></div>
                  <div className="h-0.5 bg-white/60 rounded w-3/4"></div>
                </div>
                <div className="bg-green-500 rounded-sm flex flex-col p-0.5 space-y-0.5">
                  <div className="h-0.5 bg-white rounded w-full"></div>
                  <div className="h-0.5 bg-white/80 rounded w-3/4"></div>
                  <div className="h-0.5 bg-white/60 rounded w-4/5"></div>
                </div>
              </div>
            </div>
            <CardHeader className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="group-hover:text-green-600 transition-colors">
                Professional Templates
              </CardTitle>
              <CardDescription>
                Choose from dozens of professionally designed templates that
                work across all industries and career levels, all ATS-optimized.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100/30 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Create your perfect resume in just three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 opacity-50"></div>

            {/* Step 1 */}
            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  1
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                </div>
                {/* Interactive elements around the circle */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  <div className="w-2 h-2 bg-blue-500 rounded-full m-2"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-100">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full m-1"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Add Your Information
              </h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                Simply input your basic details, work experience, and skills.
                Our AI will help optimize everything.
              </p>
              {/* Interactive preview */}
              <div className="mt-4 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="space-y-2">
                  <div className="h-2 bg-blue-200 rounded w-3/4 mx-auto"></div>
                  <div className="h-1.5 bg-purple-200 rounded w-1/2 mx-auto"></div>
                  <div className="h-1.5 bg-blue-200 rounded w-2/3 mx-auto"></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  2
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  <div className="w-2 h-2 bg-purple-500 rounded-full m-2"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-indigo-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-100">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full m-1"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                Choose a Template
              </h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                Select from our collection of professional templates designed
                for different industries and roles.
              </p>
              <div className="mt-4 p-3 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-3 gap-1">
                  <div className="h-8 bg-purple-200 rounded"></div>
                  <div className="h-8 bg-indigo-200 rounded"></div>
                  <div className="h-8 bg-purple-300 rounded"></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  3
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  <div className="w-2 h-2 bg-green-500 rounded-full m-2"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-100">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full m-1"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                Download & Apply
              </h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                Get your polished resume in multiple formats and start applying
                to your dream jobs immediately.
              </p>
              <div className="mt-4 p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex justify-center space-x-2">
                  <div className="w-6 h-8 bg-green-200 rounded flex items-center justify-center">
                    <FileText className="w-3 h-3 text-green-600" />
                  </div>
                  <div className="w-6 h-8 bg-emerald-200 rounded flex items-center justify-center">
                    <Download className="w-3 h-3 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="text-base animate-pulse hover:animate-none"
            >
              <Link to="/builder">
                Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Dream Resume?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of job seekers who've landed their dream jobs with
            ResumeAI. Start building your professional resume today.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base font-semibold"
          >
            <Link to="/builder">
              Get Started for Free <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">ResumeAI</span>
              </div>
              <p className="text-slate-400">
                Build professional resumes with the power of AI
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    to="/builder"
                    className="hover:text-white transition-colors"
                  >
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/templates"
                    className="hover:text-white transition-colors"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/examples"
                    className="hover:text-white transition-colors"
                  >
                    Examples
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    to="/tips"
                    className="hover:text-white transition-colors"
                  >
                    Resume Tips
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cover-letters"
                    className="hover:text-white transition-colors"
                  >
                    Cover Letters
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career-advice"
                    className="hover:text-white transition-colors"
                  >
                    Career Advice
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 ResumeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
