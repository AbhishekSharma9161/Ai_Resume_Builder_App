import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Star } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    category: "Professional",
    description: "Clean and modern design perfect for corporate roles",
    thumbnail: "/api/placeholder/300/400",
    rating: 4.9,
    downloads: "15K+",
    featured: true,
  },
  {
    id: 2,
    name: "Creative Designer",
    category: "Creative",
    description: "Eye-catching design for creative professionals",
    thumbnail: "/api/placeholder/300/400",
    rating: 4.8,
    downloads: "12K+",
    featured: false,
  },
  {
    id: 3,
    name: "Tech Specialist",
    category: "Technology",
    description: "Technical-focused layout for developers and engineers",
    thumbnail: "/api/placeholder/300/400",
    rating: 4.9,
    downloads: "18K+",
    featured: true,
  },
  {
    id: 4,
    name: "Executive",
    category: "Executive",
    description: "Sophisticated design for senior-level positions",
    thumbnail: "/api/placeholder/300/400",
    rating: 4.7,
    downloads: "8K+",
    featured: false,
  },
  {
    id: 5,
    name: "Academic",
    category: "Academic",
    description: "Traditional format for academic and research positions",
    thumbnail: "/api/placeholder/300/400",
    rating: 4.6,
    downloads: "6K+",
    featured: false,
  },
  {
    id: 6,
    name: "Startup",
    category: "Startup",
    description: "Dynamic design for startup and entrepreneurial roles",
    thumbnail: "/api/placeholder/300/400",
    rating: 4.8,
    downloads: "10K+",
    featured: false,
  },
];

const categories = ["All", "Professional", "Creative", "Technology", "Executive", "Academic", "Startup"];

export default function Templates() {
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
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-slate-400" />
                </div>
                {template.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button asChild>
                    <Link to="/builder">Use This Template</Link>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{template.rating}</span>
                  </div>
                  <span>{template.downloads} downloads</span>
                </div>
                <Badge variant="outline" className="w-fit">
                  {template.category}
                </Badge>
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
