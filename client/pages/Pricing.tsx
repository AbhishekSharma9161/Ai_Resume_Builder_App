import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Star, Zap, Crown } from "lucide-react";

export default function Pricing() {
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
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Pricing
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that works best for your career goals. All plans include 
            our AI-powered resume optimization and professional templates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card className="border-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <Badge variant="outline">Free Forever</Badge>
              </div>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <div className="text-3xl font-bold">
                $0
                <span className="text-lg font-normal text-slate-600">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">Perfect for getting started with your first professional resume.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-3" />
                  <span>3 resume templates</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-3" />
                  <span>Basic AI suggestions</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-3" />
                  <span>PDF download</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-3" />
                  <span>ATS optimization</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-3" />
                  <span>1 resume project</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/builder">Get Started Free</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600 text-white">Most Popular</Badge>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <Badge variant="outline" className="border-blue-500 text-blue-700">Most Popular</Badge>
              </div>
              <CardTitle className="text-2xl text-blue-900">Professional</CardTitle>
              <div className="text-3xl font-bold text-blue-900">
                $9.99
                <span className="text-lg font-normal text-blue-600">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800">Everything you need for a successful job search campaign.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-blue-500 mr-3" />
                  <span>50+ premium templates</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-blue-500 mr-3" />
                  <span>Advanced AI writing assistant</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-blue-500 mr-3" />
                  <span>Multiple formats (PDF, Word, HTML)</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-blue-500 mr-3" />
                  <span>Cover letter generator</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-blue-500 mr-3" />
                  <span>Unlimited resume projects</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-blue-500 mr-3" />
                  <span>Priority email support</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-blue-500 mr-3" />
                  <span>LinkedIn profile optimization</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/builder">Start 7-Day Free Trial</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="border-purple-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <Badge variant="outline" className="border-purple-500 text-purple-700">Premium</Badge>
              </div>
              <CardTitle className="text-2xl text-purple-900">Executive</CardTitle>
              <div className="text-3xl font-bold text-purple-900">
                $19.99
                <span className="text-lg font-normal text-purple-600">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-800">Premium features for executives and senior professionals.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-purple-500 mr-3" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-purple-500 mr-3" />
                  <span>Executive resume templates</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-purple-500 mr-3" />
                  <span>Personal branding consultation</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-purple-500 mr-3" />
                  <span>1-on-1 career coaching session</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-purple-500 mr-3" />
                  <span>Interview preparation guide</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-purple-500 mr-3" />
                  <span>Salary negotiation templates</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-purple-500 mr-3" />
                  <span>Priority phone support</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/builder">Start 14-Day Free Trial</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! You can cancel your subscription at any time. There are no long-term 
                  contracts or cancellation fees. Your access continues until the end of 
                  your billing period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens to my data?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Your resumes and data remain yours. Even on the free plan, you can 
                  download your resumes as PDFs. Paid plans offer additional export 
                  formats and backup options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We offer a 30-day money-back guarantee on all paid plans. If you're 
                  not satisfied with our service, we'll provide a full refund within 
                  30 days of purchase.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is my payment information secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely. We use Stripe for payment processing, which is PCI DSS 
                  compliant and trusted by millions of businesses worldwide. We never 
                  store your payment information on our servers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Professional Resume?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join over 100,000 job seekers who have successfully landed their dream jobs 
              with ResumeAI. Start building your winning resume today.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/builder">
                Start Building Now
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
