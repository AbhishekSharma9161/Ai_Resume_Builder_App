import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Target,
  Lightbulb,
  Award,
  Heart,
  Rocket,
} from "lucide-react";

export default function About() {
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
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  About ResumeAI
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Empowering Careers with AI
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ResumeAI was founded with a simple mission: to democratize access to
            professional resume writing by combining artificial intelligence
            with career expertise.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-blue-900">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800">
                To level the playing field in job applications by providing
                everyone access to professional-quality resume writing,
                regardless of their background or budget. We believe great
                talent deserves great presentation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-900">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800">
                To become the world's most trusted career advancement platform,
                where AI and human expertise combine to unlock opportunities and
                accelerate professional growth for millions of job seekers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Rocket className="w-6 h-6 mr-3" />
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              Founded in 2023 by a team of career counselors, AI researchers,
              and hiring managers, ResumeAI emerged from a shared frustration
              with the job application process. We saw talented individuals
              struggle to articulate their value, while recruiters sifted
              through poorly formatted resumes that didn't showcase the person
              behind the paper.
            </p>
            <p>
              Our breakthrough came when we realized that the same AI technology
              powering language models could be fine-tuned to understand resume
              best practices, industry standards, and ATS requirements. By
              training our models on millions of successful resumes and job
              descriptions, we created an AI that thinks like a career expert.
            </p>
            <p>
              Today, ResumeAI has helped over 100,000 job seekers land their
              dream jobs, with our users reporting a 40% higher callback rate
              compared to their previous resumes.
            </p>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Professional resume writing shouldn't be a luxury. We make
                  career advancement tools accessible to everyone, regardless of
                  budget or background.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We obsess over quality, continuously refining our AI models
                  and templates based on the latest hiring trends and user
                  feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We believe in honest feedback, clear pricing, and ethical AI.
                  Your data belongs to you, and we're transparent about how we
                  use it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <Card className="bg-gradient-to-r from-slate-900 to-blue-900 text-white mb-16">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold text-center mb-12">
              Impact by the Numbers
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-300 mb-2">
                  100K+
                </div>
                <div className="text-blue-100">Resumes Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-300 mb-2">40%</div>
                <div className="text-blue-100">Higher Callback Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-300 mb-2">
                  500+
                </div>
                <div className="text-blue-100">Template Designs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-300 mb-2">98%</div>
                <div className="text-blue-100">User Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-slate-600">
              Have questions about our mission or want to join our team? We'd
              love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/builder">Try ResumeAI Free</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:hello@resumeai.com">Contact Us</a>
              </Button>
            </div>
            <div className="text-sm text-slate-500 mt-6">
              <p>ResumeAI Inc.</p>
              <p>123 Innovation Drive, San Francisco, CA 94105</p>
              <p>hello@resumeai.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
