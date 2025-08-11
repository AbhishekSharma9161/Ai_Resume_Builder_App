import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft, User, CreditCard, FileText, Settings } from "lucide-react";
import SubscriptionCard from "@/components/SubscriptionCard";
import Checkout from "@/components/Checkout";

export default function Account() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Mock user data - in production, get from auth context
  const currentUser = {
    id: "demo_user",
    email: "john@example.com",
    name: "John Doe",
  };

  const handleUpgrade = (planId: string) => {
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
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Account Settings
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome back, {currentUser.name}!
            </h1>
            <p className="text-slate-600">
              Manage your subscription and account settings
            </p>
          </div>

          <Tabs defaultValue="subscription" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger
                value="subscription"
                className="flex items-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                Subscription
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="resumes" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                My Resumes
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Subscription Tab */}
            <TabsContent value="subscription" className="space-y-6">
              <SubscriptionCard
                userId={currentUser.id}
                onUpgrade={handleUpgrade}
              />

              {/* Billing History */}
              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Professional Plan</p>
                        <p className="text-sm text-slate-600">
                          January 15, 2025
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$9.99</p>
                        <p className="text-sm text-green-600">Paid</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Professional Plan</p>
                        <p className="text-sm text-slate-600">
                          December 15, 2024
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$9.99</p>
                        <p className="text-sm text-green-600">Paid</p>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <Button variant="outline" size="sm">
                        View All Invoices
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Full Name
                      </label>
                      <p className="mt-1 text-slate-900">{currentUser.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <p className="mt-1 text-slate-900">{currentUser.email}</p>
                    </div>
                  </div>
                  <Button variant="outline">Edit Profile</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* My Resumes Tab */}
            <TabsContent value="resumes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Resumes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-slate-500">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No saved resumes yet</p>
                    <p className="text-sm mb-4">
                      Create your first resume to see it here
                    </p>
                    <Button asChild>
                      <Link to="/builder">Create Resume</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-slate-600">
                          Receive updates about your account
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Data Export</p>
                        <p className="text-sm text-slate-600">
                          Download your data
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Export
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Delete Account</p>
                        <p className="text-sm text-slate-600">
                          Permanently delete your account
                        </p>
                      </div>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Checkout Modal */}
      {selectedPlan && (
        <Checkout
          planId={selectedPlan}
          isOpen={showCheckout}
          onClose={closeCheckout}
          userId={currentUser.id}
        />
      )}
    </div>
  );
}
