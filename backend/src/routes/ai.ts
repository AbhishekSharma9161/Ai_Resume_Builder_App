import { RequestHandler } from "express";

interface EnhanceSummaryRequest {
  summary: string;
  experience: any[];
  skills: string[];
}

interface EnhanceSummaryResponse {
  enhancedSummary: string;
}

export const enhanceSummary: RequestHandler = async (req, res) => {
  try {
    const { summary, experience, skills }: EnhanceSummaryRequest = req.body;

    // For demo purposes, we'll use a simple enhancement algorithm
    // In production, this would integrate with OpenAI or similar service
    
    let enhancedSummary = summary;
    
    if (!summary || summary.trim().length === 0) {
      // Generate a basic summary if none exists
      const skillsText = skills.length > 0 ? skills.slice(0, 5).join(", ") : "various technologies";
      const yearsOfExp = experience.length > 0 ? experience.length : 1;
      
      enhancedSummary = `Experienced professional with ${yearsOfExp}+ years of expertise in ${skillsText}. Proven track record of delivering high-quality solutions and driving results. Passionate about leveraging technology to solve complex business challenges and contribute to team success.`;
    } else {
      // Enhance existing summary
      const improvements = [
        // Add action words if missing
        summary.includes("Experienced") ? "" : "Experienced ",
        // Add metrics/numbers if missing
        !summary.match(/\d+/) && experience.length > 0 ? `with ${experience.length}+ years of experience ` : "",
        // Add skills reference if missing
        !skills.some(skill => summary.toLowerCase().includes(skill.toLowerCase())) && skills.length > 0 
          ? `. Skilled in ${skills.slice(0, 3).join(", ")}` : "",
        // Add results-oriented language
        !summary.toLowerCase().includes("result") && !summary.toLowerCase().includes("deliver") 
          ? ". Proven ability to deliver results and drive business impact" : ""
      ];
      
      enhancedSummary = improvements[0] + summary + improvements.slice(1).join("");
    }
    
    // Clean up and format
    enhancedSummary = enhancedSummary
      .replace(/\s+/g, " ")
      .replace(/\.\s*\./g, ".")
      .trim();
    
    // Ensure it ends with a period
    if (!enhancedSummary.endsWith(".")) {
      enhancedSummary += ".";
    }

    const response: EnhanceSummaryResponse = {
      enhancedSummary
    };

    res.json(response);
  } catch (error) {
    console.error("AI enhancement error:", error);
    res.status(500).json({ 
      error: "Failed to enhance summary",
      message: "An error occurred while processing your request"
    });
  }
};

export const generateJobDescription: RequestHandler = async (req, res) => {
  try {
    const { position, company, keywords } = req.body;
    
    // Simple job description generator for demo
    const descriptions = [
      `Developed and maintained ${keywords.length > 0 ? keywords[0] : 'software'} applications, improving system performance by 30%.`,
      `Collaborated with cross-functional teams to deliver high-quality solutions on time and within budget.`,
      `Implemented best practices for code quality, testing, and deployment processes.`,
      `Mentored junior developers and contributed to technical documentation and knowledge sharing.`,
      `Participated in agile development processes and contributed to project planning and estimation.`
    ];
    
    const randomDescriptions = descriptions
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .join(" ");
    
    res.json({ 
      generatedDescription: randomDescriptions 
    });
  } catch (error) {
    console.error("Job description generation error:", error);
    res.status(500).json({ 
      error: "Failed to generate job description",
      message: "An error occurred while processing your request"
    });
  }
};
