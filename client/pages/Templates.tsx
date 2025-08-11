import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Star, ArrowRight, Eye } from "lucide-react";

const templates = [
  // Professional Templates - Real resume.io inspired designs
  {
    id: 1,
    name: "Harvard Business",
    category: "Professional",
    description: "Clean, traditional format preferred by top consulting firms and Fortune 500 companies",
    rating: 4.9,
    downloads: "45K+",
    featured: true,
    industry: "Business, Consulting, Finance",
    layout: "traditional",
    colors: {
      primary: "#1e40af",
      secondary: "#64748b",
      accent: "#f1f5f9"
    }
  },
  {
    id: 2,
    name: "Executive Elite",
    category: "Executive", 
    description: "Sophisticated design for C-level executives and senior management positions",
    rating: 4.8,
    downloads: "32K+",
    featured: true,
    industry: "Executive, Management",
    layout: "executive",
    colors: {
      primary: "#0f172a",
      secondary: "#475569",
      accent: "#e2e8f0"
    }
  },
  {
    id: 3,
    name: "Tech Innovator",
    category: "Technology",
    description: "Modern design optimized for software engineers, developers, and tech professionals",
    rating: 4.9,
    downloads: "68K+",
    featured: true,
    industry: "Software, Engineering, IT",
    layout: "modern",
    colors: {
      primary: "#0ea5e9",
      secondary: "#334155",
      accent: "#f0f9ff"
    }
  },
  {
    id: 4,
    name: "Creative Studio",
    category: "Creative",
    description: "Eye-catching template for designers, artists, and creative professionals",
    rating: 4.7,
    downloads: "28K+",
    featured: true,
    industry: "Design, Marketing, Media",
    layout: "creative",
    colors: {
      primary: "#7c3aed",
      secondary: "#64748b",
      accent: "#faf5ff"
    }
  },
  {
    id: 5,
    name: "Medical Professional", 
    category: "Healthcare",
    description: "Clean, professional design for healthcare workers and medical professionals",
    rating: 4.8,
    downloads: "22K+",
    featured: false,
    industry: "Healthcare, Medical, Nursing",
    layout: "traditional",
    colors: {
      primary: "#059669",
      secondary: "#475569",
      accent: "#f0fdf4"
    }
  },
  {
    id: 6,
    name: "Academic Researcher",
    category: "Academic",
    description: "Traditional CV format for professors, researchers, and academic positions",
    rating: 4.6,
    downloads: "18K+",
    featured: false,
    industry: "Education, Research, Academia",
    layout: "academic",
    colors: {
      primary: "#b45309",
      secondary: "#64748b",
      accent: "#fffbeb"
    }
  },
  {
    id: 7,
    name: "Sales Champion",
    category: "Sales",
    description: "Results-focused template highlighting achievements and sales metrics",
    rating: 4.8,
    downloads: "35K+",
    featured: false,
    industry: "Sales, Business Development",
    layout: "modern",
    colors: {
      primary: "#dc2626",
      secondary: "#374151",
      accent: "#fef2f2"
    }
  },
  {
    id: 8,
    name: "Startup Founder",
    category: "Startup",
    description: "Dynamic template perfect for entrepreneurs and startup environments",
    rating: 4.7,
    downloads: "19K+",
    featured: false,
    industry: "Startups, Entrepreneurship",
    layout: "modern",
    colors: {
      primary: "#ea580c",
      secondary: "#64748b",
      accent: "#fff7ed"
    }
  },
  {
    id: 9,
    name: "Finance Expert",
    category: "Finance",
    description: "Conservative, numbers-focused design for finance and accounting roles",
    rating: 4.8,
    downloads: "41K+",
    featured: false,
    industry: "Finance, Accounting, Banking",
    layout: "traditional",
    colors: {
      primary: "#1e3a8a",
      secondary: "#475569",
      accent: "#eff6ff"
    }
  },
  {
    id: 10,
    name: "Digital Marketer",
    category: "Marketing",
    description: "Modern template showcasing digital marketing skills and campaign results",
    rating: 4.7,
    downloads: "33K+",
    featured: false,
    industry: "Marketing, Digital, Social Media",
    layout: "modern",
    colors: {
      primary: "#c026d3",
      secondary: "#64748b",
      accent: "#fdf4ff"
    }
  }
];

const categories = [
  "All",
  "Professional", 
  "Executive",
  "Technology",
  "Creative",
  "Healthcare",
  "Academic",
  "Sales",
  "Startup",
  "Finance",
  "Marketing"
];

// Template Preview Component
const TemplatePreview = ({ template }: { template: typeof templates[0] }) => {
  const { colors, layout } = template;
  
  return (
    <div className="aspect-[3/4] bg-white border border-slate-200 rounded-lg p-4 text-xs leading-tight relative overflow-hidden shadow-sm">
      {/* Header based on layout */}
      {layout === "traditional" && (
        <div className="text-center mb-4 pb-2 border-b border-slate-200">
          <div className="h-3 bg-slate-800 rounded mb-1 w-2/3 mx-auto"></div>
          <div className="h-2 bg-slate-400 rounded w-1/2 mx-auto mb-1"></div>
          <div className="h-2 bg-slate-400 rounded w-2/3 mx-auto"></div>
        </div>
      )}
      
      {layout === "modern" && (
        <div className="flex items-start mb-4 pb-2 border-b border-slate-200">
          <div className="flex-1">
            <div className="h-3 bg-slate-800 rounded mb-1 w-3/4"></div>
            <div className="h-2 bg-slate-400 rounded w-1/2 mb-1"></div>
            <div className="h-2 bg-slate-400 rounded w-2/3"></div>
          </div>
          <div className="w-12 h-12 rounded-full" style={{backgroundColor: colors.primary}}></div>
        </div>
      )}
      
      {layout === "executive" && (
        <div className="text-center mb-4 pb-3 border-b-2" style={{borderColor: colors.primary}}>
          <div className="h-4 bg-slate-800 rounded mb-2 w-1/2 mx-auto"></div>
          <div className="h-2 bg-slate-400 rounded w-1/3 mx-auto mb-1"></div>
          <div className="h-2 bg-slate-400 rounded w-2/5 mx-auto"></div>
        </div>
      )}
      
      {layout === "creative" && (
        <div className="relative mb-4">
          <div className="absolute top-0 left-0 w-full h-8 rounded" style={{backgroundColor: colors.accent}}></div>
          <div className="relative pt-2 text-center">
            <div className="h-3 bg-white rounded mb-1 w-1/2 mx-auto shadow-sm"></div>
            <div className="h-2 bg-slate-600 rounded w-1/3 mx-auto"></div>
          </div>
        </div>
      )}
      
      {layout === "academic" && (
        <div className="mb-4">
          <div className="h-3 bg-slate-800 rounded mb-2 w-2/3"></div>
          <div className="h-2 bg-slate-400 rounded w-1/2 mb-1"></div>
          <div className="h-2 bg-slate-400 rounded w-3/5"></div>
          <div className="h-px bg-slate-300 w-full mt-2"></div>
        </div>
      )}
      
      {/* Professional Summary */}
      <div className="mb-3">
        <div className="h-2 rounded mb-1 w-1/3" style={{backgroundColor: colors.primary}}></div>
        <div className="space-y-1">
          <div className="h-1.5 bg-slate-400 rounded w-full"></div>
          <div className="h-1.5 bg-slate-400 rounded w-4/5"></div>
          <div className="h-1.5 bg-slate-400 rounded w-5/6"></div>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="mb-3">
        <div className="h-2 rounded mb-1 w-1/4" style={{backgroundColor: colors.primary}}></div>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="h-1.5 bg-slate-600 rounded w-1/3"></div>
              <div className="h-1 bg-slate-400 rounded w-1/6"></div>
            </div>
            <div className="h-1 bg-slate-500 rounded w-1/4 mb-1"></div>
            <div className="space-y-0.5">
              <div className="h-1 bg-slate-400 rounded w-full"></div>
              <div className="h-1 bg-slate-400 rounded w-3/4"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="h-1.5 bg-slate-600 rounded w-2/5"></div>
              <div className="h-1 bg-slate-400 rounded w-1/6"></div>
            </div>
            <div className="h-1 bg-slate-500 rounded w-1/3 mb-1"></div>
            <div className="space-y-0.5">
              <div className="h-1 bg-slate-400 rounded w-5/6"></div>
              <div className="h-1 bg-slate-400 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills/Education */}
      <div className="space-y-2">
        <div>
          <div className="h-2 rounded mb-1 w-1/6" style={{backgroundColor: colors.primary}}></div>
          <div className="flex gap-1 flex-wrap">
            <div className="h-1.5 rounded px-1 w-1/5" style={{backgroundColor: colors.accent}}></div>
            <div className="h-1.5 rounded px-1 w-1/6" style={{backgroundColor: colors.accent}}></div>
            <div className="h-1.5 rounded px-1 w-1/4" style={{backgroundColor: colors.accent}}></div>
            <div className="h-1.5 rounded px-1 w-1/5" style={{backgroundColor: colors.accent}}></div>
          </div>
        </div>
        
        <div>
          <div className="h-2 rounded mb-1 w-1/5" style={{backgroundColor: colors.primary}}></div>
          <div className="h-1.5 bg-slate-600 rounded w-2/3 mb-0.5"></div>
          <div className="h-1 bg-slate-500 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates =
    selectedCategory === "All"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

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
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Professional Resume Templates
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
            Professional Resume Templates
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Choose from expertly designed templates used by thousands of professionals. 
            Each template is ATS-optimized and tailored for specific industries and career levels.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-white"
            >
              <div className="relative">
                <TemplatePreview template={template} />
                
                {template.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="space-y-2 w-full px-4">
                    <Button asChild className="w-full bg-white text-slate-900 hover:bg-slate-100">
                      <Link to="/builder">Use This Template</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-white border-white hover:bg-white hover:text-slate-900"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
                      {template.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed mt-1">
                      {template.description}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{template.rating}</span>
                    </div>
                    <span className="text-slate-500 text-xs">
                      {template.downloads} downloads
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-xs">
                        {template.category}
                      </Badge>
                      <div className="text-xs text-slate-500">
                        {template.industry}
                      </div>
                    </div>
                    <Button size="sm" asChild className="ml-2">
                      <Link to="/builder">
                        Select <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Professional Resume?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Choose any template and start building your professional resume with
            our AI-powered builder. Get personalized suggestions and ATS optimization.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/builder">Start Building Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
