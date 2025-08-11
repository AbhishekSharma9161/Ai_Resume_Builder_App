import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Users, DollarSign, Calendar, MessageCircle, Search, Target } from "lucide-react";

export default function CareerAdvice() {
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
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Career Advice
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
            Expert Career Guidance
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Navigate your career journey with confidence using proven strategies 
            from hiring managers, recruiters, and career coaches.
          </p>
        </div>

        {/* Career Journey Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Your Career Success Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto text-white mb-3">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Job Search</h3>
                <p className="text-xs text-slate-600">Find and apply to the right opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto text-white mb-3">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Interview</h3>
                <p className="text-xs text-slate-600">Ace your interviews with confidence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto text-white mb-3">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Negotiate</h3>
                <p className="text-xs text-slate-600">Secure the best compensation package</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto text-white mb-3">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Onboard</h3>
                <p className="text-xs text-slate-600">Start strong in your new role</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto text-white mb-3">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Advance</h3>
                <p className="text-xs text-slate-600">Grow and excel in your career</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">Job Search Strategy</CardTitle>
                <Badge variant="secondary">Foundation</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">Where to Search:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-medium text-slate-800">Company Websites</h5>
                        <p className="text-sm text-slate-600">70% of jobs are never posted publicly</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-medium text-slate-800">LinkedIn</h5>
                        <p className="text-sm text-slate-600">Use advanced search and set up job alerts</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-medium text-slate-800">Industry Job Boards</h5>
                        <p className="text-sm text-slate-600">AngelList for startups, Dice for tech, etc.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">Application Strategy:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Apply within 24-48 hours of posting</li>
                    <li>• Target 10-15 quality applications per week</li>
                    <li>• Follow up 1 week after applying</li>
                    <li>• Track applications in a spreadsheet</li>
                    <li>• Customize resume and cover letter for each role</li>
                    <li>• Research company and hiring manager</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">Interview Mastery</CardTitle>
                <Badge variant="secondary">Critical</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">Before</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-blue-800"><strong>Research thoroughly:</strong></p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Company mission and values</li>
                      <li>• Recent news and developments</li>
                      <li>• Interviewer backgrounds (LinkedIn)</li>
                      <li>• Role requirements and challenges</li>
                    </ul>
                    <p className="text-blue-800 mt-3"><strong>Prepare stories using STAR method</strong></p>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-900">During</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-purple-800"><strong>First impressions matter:</strong></p>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Arrive 10-15 minutes early</li>
                      <li>• Firm handshake and eye contact</li>
                      <li>• Professional attire</li>
                      <li>• Bring copies of your resume</li>
                    </ul>
                    <p className="text-purple-800 mt-3"><strong>Ask thoughtful questions</strong></p>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">After</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-green-800"><strong>Follow up professionally:</strong></p>
                    <ul className="text-green-700 space-y-1">
                      <li>• Send thank you email within 24 hours</li>
                      <li>• Reference specific conversation points</li>
                      <li>• Reiterate your interest and fit</li>
                      <li>• Follow up if no response in 1 week</li>
                    </ul>
                    <p className="text-green-800 mt-3"><strong>Continue your job search</strong></p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-slate-100 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">Common Interview Questions & How to Answer:</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-slate-800">"Tell me about yourself"</p>
                    <p className="text-slate-600">Formula: Present situation + Past experience + Future goals (as they relate to this role)</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">"Why do you want this role?"</p>
                    <p className="text-slate-600">Connect your skills and interests to their specific needs and company mission</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">"What's your greatest weakness?"</p>
                    <p className="text-slate-600">Choose a real weakness + explain how you're actively working to improve it</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">Salary Negotiation</CardTitle>
                <Badge variant="secondary">High Value</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">Research Your Worth:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Use Glassdoor, PayScale, and Levels.fyi</li>
                    <li>• Factor in location, experience, and company size</li>
                    <li>• Consider total compensation (benefits, stock, etc.)</li>
                    <li>• Talk to people in similar roles</li>
                    <li>• Know your minimum acceptable offer</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">Negotiation Strategy:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Let them make the first offer</li>
                    <li>• Express enthusiasm for the role first</li>
                    <li>• Negotiate the entire package, not just salary</li>
                    <li>• Use market data to support your ask</li>
                    <li>• Be prepared to justify your value</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Negotiation Script Template:</h4>
                <p className="text-green-700 text-sm">
                  "Thank you for the offer! I'm very excited about this opportunity and joining the team. 
                  Based on my research of similar roles in this market and my [X years] of experience in [field], 
                  I was hoping we could discuss the compensation. Would there be flexibility to move to $[X]?"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">Professional Networking</CardTitle>
                <Badge variant="secondary">Long-term</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">Building Your Network:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Attend industry events and meetups</li>
                    <li>• Join professional associations</li>
                    <li>• Engage on LinkedIn thoughtfully</li>
                    <li>• Offer help before asking for favors</li>
                    <li>• Maintain relationships consistently</li>
                    <li>• Follow up within 48 hours of meeting</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">LinkedIn Optimization:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Professional headshot photo</li>
                    <li>• Keyword-optimized headline and summary</li>
                    <li>• Complete all profile sections</li>
                    <li>• Share industry insights regularly</li>
                    <li>• Comment meaningfully on others' posts</li>
                    <li>• Connect with colleagues and industry peers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Career Transition Strategies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">Industry Switch</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <ul className="text-blue-700 space-y-1">
                      <li>• Identify transferable skills</li>
                      <li>• Take relevant courses or certifications</li>
                      <li>• Volunteer or freelance in target industry</li>
                      <li>• Network with professionals in new field</li>
                      <li>• Consider bridge roles or internships</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-900">Role Change</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <ul className="text-purple-700 space-y-1">
                      <li>• Shadow someone in the target role</li>
                      <li>• Take on projects that build relevant skills</li>
                      <li>• Find a mentor in your desired role</li>
                      <li>• Highlight relevant accomplishments</li>
                      <li>• Consider lateral moves within company</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">Career Break Return</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <ul className="text-green-700 space-y-1">
                      <li>• Update skills through online courses</li>
                      <li>• Volunteer to build recent experience</li>
                      <li>• Address the gap honestly and positively</li>
                      <li>• Consider returnship programs</li>
                      <li>• Network with former colleagues</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Career Journey Today
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              A great career starts with a great resume. Build yours today and 
              take the first step toward your dream job.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/builder">
                Build Your Professional Resume
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
