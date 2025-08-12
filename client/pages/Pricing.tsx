import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Construction } from "lucide-react";

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
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Pricing
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Pricing Coming Soon!</CardTitle>
            <CardDescription className="text-lg">
              We're finalizing our pricing plans to offer you the best value for
              professional resume building.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-slate-600">
              For now, enjoy our free resume builder with all features available
              at no cost.
            </p>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">What we're planning:</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Free tier with essential features</li>
                <li>• Premium templates and designs</li>
                <li>• Advanced AI suggestions</li>
                <li>• Priority support</li>
              </ul>
            </div>
            <Button asChild>
              <Link to="/builder">Start Building for Free</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
