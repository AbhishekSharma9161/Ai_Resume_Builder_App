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

        {/* Sample Resumes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Senior Software Engineer Resume",
              industry: "Technology",
              experience: "8+ years",
              highlights: ["Full-stack development", "Team leadership", "System architecture"],
            },
            {
              title: "Product Manager Resume",
              industry: "SaaS",
              experience: "5+ years",
              highlights: ["Product strategy", "Cross-functional leadership", "Data-driven decisions"],
            },
            {
              title: "UX Designer Resume",
              industry: "Design",
              experience: "6+ years",
              highlights: ["User research", "Design systems", "Prototyping"],
            },
            {
              title: "Marketing Manager Resume",
              industry: "Digital Marketing",
              experience: "4+ years",
              highlights: ["Campaign management", "Analytics", "Content strategy"],
            },
            {
              title: "Sales Director Resume",
              industry: "Enterprise Sales",
              experience: "10+ years",
              highlights: ["Revenue growth", "Team building", "Client relationships"],
            },
            {
              title: "Data Scientist Resume",
              industry: "Analytics",
              experience: "3+ years",
              highlights: ["Machine learning", "Statistical analysis", "Python/R"],
            },
          ].map((example, index) => (
            <Card key={index} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden border border-slate-200">
                  {/* Mock resume preview */}
                  <div className="w-32 h-36 bg-white rounded shadow-sm border border-slate-300 flex flex-col p-2 text-xs">
                    <div className="h-2 bg-slate-800 rounded mb-1"></div>
                    <div className="h-1 bg-slate-400 rounded mb-2 w-2/3"></div>
                    <div className="space-y-1 flex-1">
                      <div className="h-1 bg-slate-600 rounded w-1/2"></div>
                      <div className="h-0.5 bg-slate-400 rounded"></div>
                      <div className="h-0.5 bg-slate-400 rounded w-3/4"></div>
                      <div className="h-0.5 bg-slate-400 rounded w-2/3"></div>
                      <div className="h-1 bg-slate-600 rounded w-1/3 mt-2"></div>
                      <div className="h-0.5 bg-slate-400 rounded w-4/5"></div>
                      <div className="h-0.5 bg-slate-400 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {example.title}
                </CardTitle>
                <CardDescription>
                  <span className="text-sm font-medium text-slate-700">{example.industry}</span>
                  <span className="text-xs text-slate-500 block">{example.experience}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-900">Key highlights:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {example.highlights.map((highlight, i) => (
                      <li key={i}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 space-y-2">
                  <Button size="sm" className="w-full" asChild>
                    <Link to="/builder">Use This Template</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
