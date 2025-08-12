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

export default function Examples() {
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
                  Resume Examples
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
            Resume Examples
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get inspired by real resume examples from successful professionals
            across various industries.
          </p>
        </div>

        {/* Example Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Software Engineer",
              count: "15+ examples",
              color: "from-blue-500 to-cyan-500",
              bg: "from-blue-50 to-cyan-50",
            },
            {
              title: "Product Manager",
              count: "12+ examples",
              color: "from-purple-500 to-indigo-500",
              bg: "from-purple-50 to-indigo-50",
            },
            {
              title: "Designer",
              count: "10+ examples",
              color: "from-green-500 to-emerald-500",
              bg: "from-green-50 to-emerald-50",
            },
            {
              title: "Marketing",
              count: "8+ examples",
              color: "from-orange-500 to-red-500",
              bg: "from-orange-50 to-red-50",
            },
            {
              title: "Sales",
              count: "6+ examples",
              color: "from-pink-500 to-rose-500",
              bg: "from-pink-50 to-rose-50",
            },
            {
              title: "Executive",
              count: "5+ examples",
              color: "from-slate-700 to-slate-900",
              bg: "from-slate-50 to-slate-100",
            },
          ].map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div
                  className={`w-full h-32 bg-gradient-to-br ${category.bg} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  {/* Mock resume preview */}
                  <div className="absolute bottom-2 right-2 w-16 h-20 bg-white rounded shadow-sm border border-slate-200 flex flex-col p-1">
                    <div className="h-1 bg-slate-800 rounded mb-1"></div>
                    <div className="h-0.5 bg-slate-400 rounded mb-1"></div>
                    <div className="space-y-0.5 flex-1">
                      <div className="h-0.5 bg-slate-600 rounded w-1/3"></div>
                      <div className="h-0.5 bg-slate-400 rounded"></div>
                      <div className="h-0.5 bg-slate-400 rounded w-3/4"></div>
                      <div className="h-0.5 bg-slate-400 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-600 text-sm">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">
              Full Examples Coming Soon!
            </CardTitle>
            <CardDescription className="text-lg">
              We're curating real resume examples from successful professionals
              in every industry.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="font-medium text-slate-900">What you'll get:</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Before and after resume transformations</li>
                <li>• Industry-specific tips and annotations</li>
                <li>• ATS optimization examples</li>
                <li>• Downloadable templates based on examples</li>
              </ul>
            </div>
            <div className="space-y-2">
              <Button asChild>
                <Link to="/builder">Start Building Your Resume Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/templates">Browse Templates</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
