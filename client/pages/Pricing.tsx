import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Star, Zap, Crown, CreditCard } from "lucide-react";
import Checkout from "@/components/Checkout";
import { paymentPlans } from "@/lib/payment-service";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleSelectPlan = (planId: string) => {
    if (planId === "free") {
      // Redirect to builder for free plan
      window.location.href = "/builder";
      return;
    }

    setSelectedPlan(planId);
    setShowCheckout(true);
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="px-6 py-4">
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

      <div className="px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that works best for your career goals. All plans
            include our AI-powered resume optimization and professional
            templates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paymentPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`${plan.id === "professional" ? "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 relative" : "border-slate-200"}`}
            >
              {plan.id === "professional" && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                </div>
              )}

              <CardHeader>
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      plan.id === "free"
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : plan.id === "professional"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                          : "bg-gradient-to-r from-purple-500 to-indigo-500"
                    }`}
                  >
                    {plan.id === "free" && (
                      <Check className="w-6 h-6 text-white" />
                    )}
                    {plan.id === "professional" && (
                      <Zap className="w-6 h-6 text-white" />
                    )}
                    {plan.id === "executive" && (
                      <Crown className="w-6 h-6 text-white" />
                    )}
                  </div>
                  {plan.id === "free" && (
                    <Badge variant="outline">Free Forever</Badge>
                  )}
                  {plan.id === "professional" && (
                    <Badge
                      variant="outline"
                      className="border-blue-500 text-blue-700"
                    >
                      Most Popular
                    </Badge>
                  )}
                  {plan.id === "executive" && (
                    <Badge
                      variant="outline"
                      className="border-purple-500 text-purple-700"
                    >
                      Premium
                    </Badge>
                  )}
                </div>
                <CardTitle
                  className={`text-2xl ${plan.id === "professional" ? "text-blue-900" : plan.id === "executive" ? "text-purple-900" : ""}`}
                >
                  {plan.name}
                </CardTitle>
                <div
                  className={`text-3xl font-bold ${plan.id === "professional" ? "text-blue-900" : plan.id === "executive" ? "text-purple-900" : ""}`}
                >
                  ${plan.price}
                  <span
                    className={`text-lg font-normal ${plan.id === "professional" ? "text-blue-600" : plan.id === "executive" ? "text-purple-600" : "text-slate-600"}`}
                  >
                    /{plan.interval}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p
                  className={
                    plan.id === "professional"
                      ? "text-blue-800"
                      : plan.id === "executive"
                        ? "text-purple-800"
                        : "text-slate-600"
                  }
                >
                  {plan.id === "free"
                    ? "Perfect for getting started with your first professional resume."
                    : plan.id === "professional"
                      ? "Everything you need for a successful job search campaign."
                      : "Premium features for executives and senior professionals."}
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check
                        className={`w-4 h-4 mr-3 ${
                          plan.id === "professional"
                            ? "text-blue-500"
                            : plan.id === "executive"
                              ? "text-purple-500"
                              : "text-green-500"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.id === "professional"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : plan.id === "executive"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : ""
                  }`}
                  variant={plan.id === "free" ? "outline" : "default"}
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  {plan.id === "free" ? (
                    "Get Started Free"
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Start {plan.id === "professional"
                        ? "7-Day"
                        : "14-Day"}{" "}
                      Free Trial
                    </>
                  )}
                </Button>

                {plan.id !== "free" && (
                  <p className="text-xs text-center text-slate-500">
                    No commitment • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How do free trials work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Start your free trial today and get full access to all premium
                  features. You won't be charged until your trial period ends.
                  Cancel anytime during the trial with no charges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I change plans anytime?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! You can upgrade or downgrade your plan at any time.
                  Changes take effect immediately, and billing is prorated for
                  the remaining period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What payment methods do you accept?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We accept all major credit cards (Visa, MasterCard, American
                  Express) and PayPal through our secure Stripe payment
                  processing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Is my payment information secure?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely. We use Stripe for payment processing, which is PCI
                  DSS compliant and trusted by millions of businesses worldwide.
                  We never store your payment information.
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
              Join over 100,000 job seekers who have successfully landed their
              dream jobs with ResumeAI. Start building your winning resume
              today.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleSelectPlan("professional")}
            >
              Start Free Trial
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Checkout Modal */}
      {selectedPlan && (
        <Checkout
          planId={selectedPlan}
          isOpen={showCheckout}
          onClose={closeCheckout}
        />
      )}
    </div>
  );
}
