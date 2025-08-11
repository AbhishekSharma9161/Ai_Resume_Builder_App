import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Star, ArrowRight } from "lucide-react";

const templates = [
  // Professional Templates
  {
    id: 1,
    name: "Executive Professional",
    category: "Professional",
    description: "Clean, ATS-friendly design perfect for corporate roles and management positions",
    rating: 4.9,
    downloads: "25K+",
    featured: true,
    colors: ["bg-blue-500", "bg-slate-700"],
  },
  {
    id: 2,
    name: "Corporate Classic",
    category: "Professional",
    description: "Traditional professional layout ideal for finance, consulting, and business roles",
    rating: 4.8,
    downloads: "18K+",
    featured: false,
    colors: ["bg-slate-600", "bg-blue-600"],
  },
  {
    id: 3,
    name: "Modern Minimalist",
    category: "Professional",
    description: "Clean minimalist design that highlights your achievements and experience",
    rating: 4.7,
    downloads: "22K+",
    featured: true,
    colors: ["bg-gray-500", "bg-indigo-500"],
  },

  // Creative Templates
  {
    id: 4,
    name: "Creative Portfolio",
    category: "Creative",
    description: "Eye-catching design perfect for designers, artists, and creative professionals",
    rating: 4.9,
    downloads: "15K+",
    featured: true,
    colors: ["bg-purple-500", "bg-pink-500"],
  },
  {
    id: 5,
    name: "Artistic Flair",
    category: "Creative",
    description: "Bold and vibrant template for creative industries and portfolio showcase",
    rating: 4.6,
    downloads: "12K+",
    featured: false,
    colors: ["bg-orange-500", "bg-red-500"],
  },
  {
    id: 6,
    name: "Designer Pro",
    category: "Creative",
    description: "Professional creative template with space for portfolio links and projects",
    rating: 4.8,
    downloads: "14K+",
    featured: false,
    colors: ["bg-emerald-500", "bg-teal-500"],
  },

  // Technology Templates
  {
    id: 7,
    name: "Software Engineer",
    category: "Technology",
    description: "Technical-focused layout optimized for developers and software engineers",
    rating: 4.9,
    downloads: "28K+",
    featured: true,
    colors: ["bg-cyan-600", "bg-blue-700"],
  },
  {
    id: 8,
    name: "Tech Specialist",
    category: "Technology",
    description: "Modern tech resume with sections for skills, projects, and certifications",
    rating: 4.8,
    downloads: "20K+",
    featured: false,
    colors: ["bg-indigo-600", "bg-purple-600"],
  },
  {
    id: 9,
    name: "DevOps Pro",
    category: "Technology",
    description: "Specialized template for DevOps engineers and system administrators",
    rating: 4.7,
    downloads: "16K+",
    featured: false,
    colors: ["bg-slate-700", "bg-cyan-600"],
  },

  // Executive Templates
  {
    id: 10,
    name: "C-Suite Executive",
    category: "Executive",
    description: "Prestigious design for senior executives and C-level positions",
    rating: 4.9,
    downloads: "8K+",
    featured: true,
    colors: ["bg-slate-800", "bg-amber-600"],
  },
  {
    id: 11,
    name: "Senior Leadership",
    category: "Executive",
    description: "Sophisticated template for senior management and director roles",
    rating: 4.7,
    downloads: "6K+",
    featured: false,
    colors: ["bg-gray-700", "bg-blue-800"],
  },

  // Academic Templates
  {
    id: 12,
    name: "Academic Researcher",
    category: "Academic",
    description: "Traditional CV format for academic positions and research roles",
    rating: 4.6,
    downloads: "9K+",
    featured: false,
    colors: ["bg-blue-700", "bg-indigo-700"],
  },
  {
    id: 13,
    name: "University Professor",
    category: "Academic",
    description: "Comprehensive academic CV with sections for publications and grants",
    rating: 4.8,
    downloads: "7K+",
    featured: false,
    colors: ["bg-slate-600", "bg-green-700"],
  },

  // Startup Templates
  {
    id: 14,
    name: "Startup Founder",
    category: "Startup",
    description: "Dynamic template perfect for entrepreneurs and startup environments",
    rating: 4.8,
    downloads: "11K+",
    featured: false,
    colors: ["bg-orange-600", "bg-red-600"],
  },
  {
    id: 15,
    name: "Growth Hacker",
    category: "Startup",
    description: "Modern startup template emphasizing growth metrics and achievements",
    rating: 4.7,
    downloads: "9K+",
    featured: false,
    colors: ["bg-purple-600", "bg-pink-600"],
  },
];

const categories = ["All", "Professional", "Creative", "Technology", "Executive", "Academic", "Startup"];

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = selectedCategory === "All"
    ? templates
    : templates.filter(template => template.category === selectedCategory);

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
                <span className="text-xl font-bold text-slate-900">Resume Templates</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Choose Your Perfect Template
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional resume templates designed by experts. Each template is optimized 
            for ATS systems and tailored for specific industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 flex flex-col items-center justify-start p-4 text-xs leading-tight">
                  {/* Mock Resume Content */}
                  <div className="w-full text-center mb-2">
                    <div className="h-2 bg-slate-800 rounded mb-1"></div>
                    <div className="h-1 bg-slate-400 rounded w-2/3 mx-auto mb-1"></div>
                    <div className="h-1 bg-slate-400 rounded w-1/2 mx-auto"></div>
                  </div>
                  <div className="h-px bg-slate-300 w-full mb-2"></div>
                  <div className="w-full space-y-1 mb-2">
                    <div className="h-1 bg-slate-600 rounded w-1/4"></div>
                    <div className="h-1 bg-slate-400 rounded w-full"></div>
                    <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                    <div className="h-1 bg-slate-400 rounded w-5/6"></div>
                  </div>
                  <div className="w-full space-y-1 mb-2">
                    <div className="h-1 bg-slate-600 rounded w-1/3"></div>
                    <div className="h-1 bg-slate-400 rounded w-full"></div>
                    <div className="h-1 bg-slate-400 rounded w-4/5"></div>
                  </div>
                  <div className="w-full space-y-1">
                    <div className="h-1 bg-slate-600 rounded w-1/4"></div>
                    <div className="flex space-x-1">
                      <div className="h-1 bg-blue-400 rounded flex-1"></div>
                      <div className="h-1 bg-green-400 rounded flex-1"></div>
                      <div className="h-1 bg-purple-400 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
                {template.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="space-y-2">
                    <Button asChild className="w-full">
                      <Link to="/builder">Use This Template</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-white border-white hover:bg-white hover:text-black">
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{template.name}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{template.rating}</span>
                  </div>
                  <span className="text-slate-500">{template.downloads} downloads</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="w-fit">
                    {template.category}
                  </Badge>
                  <Button size="sm" variant="ghost" asChild>
                    <Link to="/builder">
                      Select <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Resume?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Choose any template and start building your professional resume with our AI-powered builder.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/builder">Start Building Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
