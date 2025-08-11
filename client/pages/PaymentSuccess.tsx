import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, ArrowRight, CreditCard, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const planId = searchParams.get('plan');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // In production, verify the session with your backend
    if (sessionId) {
      setIsVerified(true);
    }
  }, [sessionId]);

  const planName = planId === 'professional' ? 'Professional' : planId === 'executive' ? 'Executive' : 'Professional';
  const trialDays = planId === 'executive' ? 14 : 7;
  const monthlyPrice = planId === 'executive' ? '$19.99' : '$9.99';

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="max-w-lg w-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-800">
            Payment Successful!
          </CardTitle>
          <p className="text-slate-600">
            Welcome to ResumeAI Premium! Your subscription is now active.
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Subscription Details */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-green-800">Professional Plan</h3>
              <Badge className="bg-green-600">Active</Badge>
            </div>
            <div className="space-y-2 text-sm text-green-700">
              <div className="flex justify-between">
                <span>Free trial period:</span>
                <span className="font-medium">7 days</span>
              </div>
              <div className="flex justify-between">
                <span>Trial ends:</span>
                <span className="font-medium">
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Monthly charge:</span>
                <span className="font-medium">$9.99/month</span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">What's next?</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-slate-900">Start building your resume</h4>
                  <p className="text-sm text-slate-600">
                    Access 50+ premium templates and AI-powered suggestions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <CreditCard className="w-5 h-5 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-slate-900">Manage your subscription</h4>
                  <p className="text-sm text-slate-600">
                    View billing details and manage your account settings
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button asChild className="w-full" size="lg">
              <Link to="/builder">
                <FileText className="w-4 h-4 mr-2" />
                Start Building Your Resume
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="w-full">
              <Link to="/account">
                <CreditCard className="w-4 h-4 mr-2" />
                Manage Subscription
              </Link>
            </Button>
          </div>

          {/* Receipt Info */}
          <div className="text-center text-sm text-slate-500 border-t pt-4">
            <p>Transaction ID: {sessionId || 'txn_' + Math.random().toString(36).substr(2, 9)}</p>
            <p>A receipt has been sent to your email address</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
