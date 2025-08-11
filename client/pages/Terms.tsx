import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Scale } from "lucide-react";

export default function Terms() {
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
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-600">Last updated: January 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                By accessing and using ResumeAI, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                ResumeAI is an AI-powered platform that helps users create
                professional resumes. Our service includes resume templates,
                AI-powered content suggestions, and export capabilities in
                various formats.
              </p>
              <p className="text-slate-600">
                We reserve the right to modify, suspend, or discontinue any part
                of our service at any time without prior notice.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">You agree to:</p>
              <ul className="space-y-2 text-slate-600">
                <li>
                  • Provide accurate and truthful information in your resumes
                </li>
                <li>• Use the service only for lawful purposes</li>
                <li>• Not share your account credentials with others</li>
                <li>• Respect intellectual property rights</li>
                <li>
                  • Not attempt to reverse engineer or exploit our AI technology
                </li>
                <li>
                  • Report any bugs or security vulnerabilities responsibly
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                You retain ownership of the content you create using our
                service. ResumeAI retains ownership of our platform, templates,
                AI technology, and proprietary algorithms.
              </p>
              <p className="text-slate-600">
                You may not copy, distribute, or create derivative works of our
                templates or technology without explicit written permission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                ResumeAI offers both free and premium subscription plans.
                Premium subscriptions are billed monthly or annually in advance.
                All fees are non-refundable except as required by law.
              </p>
              <p className="text-slate-600">
                You may cancel your subscription at any time. Cancellation will
                take effect at the end of your current billing period.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                ResumeAI is provided "as is" without warranty of any kind. We do
                not guarantee that our service will be error-free or that using
                our platform will result in job opportunities.
              </p>
              <p className="text-slate-600">
                In no event shall ResumeAI be liable for any indirect,
                incidental, special, consequential, or punitive damages arising
                out of your use of the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                We may terminate or suspend your account immediately, without
                prior notice, for any breach of these Terms of Service. Upon
                termination, your right to use the service will cease
                immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-slate-700">
                  <strong>Email:</strong> legal@resumeai.com
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
