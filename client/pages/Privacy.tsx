import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText } from "lucide-react";

export default function Privacy() {
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
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600">Last updated: January 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Personal Information
                </h4>
                <p className="text-slate-600">
                  We collect information you provide directly to us, including
                  your name, email address, work experience, education, skills,
                  and other resume-related information when you use our resume
                  building service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Usage Information
                </h4>
                <p className="text-slate-600">
                  We automatically collect certain information about your device
                  and how you interact with our service, including your IP
                  address, browser type, pages visited, and time spent on our
                  platform.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-slate-600">
                <li>• Provide and maintain our resume building service</li>
                <li>• Process your payments and manage your account</li>
                <li>• Send you important updates about our service</li>
                <li>• Improve our platform and develop new features</li>
                <li>
                  • Provide customer support and respond to your inquiries
                </li>
                <li>
                  • Comply with legal obligations and protect against fraud
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Protection & Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. Your data is encrypted in transit
                and at rest using industry-standard encryption protocols.
              </p>
              <p className="text-slate-600">
                We never sell your personal information to third parties. Your
                resume data belongs to you, and we provide tools to export or
                delete your information at any time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">You have the right to:</p>
              <ul className="space-y-2 text-slate-600">
                <li>• Access, update, or delete your personal information</li>
                <li>• Export your data in a portable format</li>
                <li>• Opt out of marketing communications</li>
                <li>• Request restriction of processing your data</li>
                <li>• File a complaint with supervisory authorities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies & Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                We use cookies and similar technologies to enhance your
                experience, analyze usage patterns, and provide personalized
                content. You can control cookie settings through your browser
                preferences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-slate-700">
                  <strong>Email:</strong> privacy@resumeai.com
                  <br />
                  <strong>Address:</strong> 123 Innovation Drive, San Francisco,
                  CA 94105
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/builder">Start Building Your Resume</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
