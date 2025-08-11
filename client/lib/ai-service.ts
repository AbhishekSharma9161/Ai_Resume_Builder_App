// AI Service for Resume Content Suggestions
// Note: This is a mock implementation. In production, you would integrate with actual AI APIs

interface AIJobSuggestion {
  content: string;
  reason: string;
  confidence: number;
}

interface AISkillSuggestion {
  skill: string;
  relevance: number;
  category: string;
}

export class AIService {
  private static instance: AIService;

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  // Mock professional summary suggestions
  async generateSummary(jobTitle: string, experience: string[], skills: string[]): Promise<AIJobSuggestion[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const suggestions: AIJobSuggestion[] = [
      {
        content: `Experienced ${jobTitle} with ${experience.length}+ years of proven success in delivering high-quality solutions. Expertise in ${skills.slice(0, 3).join(', ')}, with a track record of improving team productivity and driving project success.`,
        reason: "Emphasizes experience and key skills",
        confidence: 0.9
      },
      {
        content: `Results-driven ${jobTitle} specializing in ${skills.slice(0, 2).join(' and ')}. Demonstrated ability to lead cross-functional teams and deliver complex projects on time and within budget.`,
        reason: "Focuses on leadership and results",
        confidence: 0.85
      },
      {
        content: `Innovative ${jobTitle} with strong background in ${skills.slice(0, 3).join(', ')}. Passionate about creating efficient solutions and mentoring junior team members.`,
        reason: "Highlights innovation and mentorship",
        confidence: 0.8
      }
    ];

    return suggestions;
  }

  // Mock job description optimization
  async optimizeJobDescription(description: string, jobTitle: string): Promise<AIJobSuggestion[]> {
    await new Promise(resolve => setTimeout(resolve, 800));

    const suggestions: AIJobSuggestion[] = [
      {
        content: description.replace(/I /g, '• ').replace(/\./g, '\n• ') + '\n• Collaborated with cross-functional teams to deliver projects 20% ahead of schedule',
        reason: "Added quantifiable achievement and bullet points for better readability",
        confidence: 0.92
      },
      {
        content: description + ' Utilized industry best practices to improve code quality and reduce technical debt by 30%.',
        reason: "Added specific metrics and technical improvement",
        confidence: 0.88
      }
    ];

    return suggestions;
  }

  // Mock skill suggestions based on job title
  async suggestSkills(jobTitle: string, currentSkills: string[]): Promise<AISkillSuggestion[]> {
    await new Promise(resolve => setTimeout(resolve, 600));

    const skillDatabase = {
      'Software Engineer': [
        { skill: 'JavaScript', relevance: 0.95, category: 'Programming' },
        { skill: 'React', relevance: 0.9, category: 'Frontend' },
        { skill: 'Node.js', relevance: 0.85, category: 'Backend' },
        { skill: 'Git', relevance: 0.9, category: 'Tools' },
        { skill: 'Docker', relevance: 0.8, category: 'DevOps' },
        { skill: 'TypeScript', relevance: 0.85, category: 'Programming' },
        { skill: 'AWS', relevance: 0.75, category: 'Cloud' },
        { skill: 'REST APIs', relevance: 0.8, category: 'Backend' }
      ],
      'Product Manager': [
        { skill: 'Agile/Scrum', relevance: 0.95, category: 'Methodology' },
        { skill: 'Product Strategy', relevance: 0.9, category: 'Strategy' },
        { skill: 'Data Analysis', relevance: 0.85, category: 'Analytics' },
        { skill: 'User Research', relevance: 0.8, category: 'Research' },
        { skill: 'Roadmap Planning', relevance: 0.85, category: 'Planning' },
        { skill: 'SQL', relevance: 0.7, category: 'Technical' },
        { skill: 'A/B Testing', relevance: 0.75, category: 'Analytics' }
      ],
      'Designer': [
        { skill: 'Figma', relevance: 0.95, category: 'Design Tools' },
        { skill: 'Adobe Creative Suite', relevance: 0.9, category: 'Design Tools' },
        { skill: 'User Experience (UX)', relevance: 0.9, category: 'Design' },
        { skill: 'User Interface (UI)', relevance: 0.85, category: 'Design' },
        { skill: 'Prototyping', relevance: 0.8, category: 'Design' },
        { skill: 'Design Systems', relevance: 0.75, category: 'Design' },
        { skill: 'HTML/CSS', relevance: 0.7, category: 'Technical' }
      ]
    };

    const relevantSkills = skillDatabase[jobTitle as keyof typeof skillDatabase] || [];
    
    // Filter out skills the user already has
    const newSkills = relevantSkills.filter(
      skill => !currentSkills.some(existing => 
        existing.toLowerCase().includes(skill.skill.toLowerCase()) ||
        skill.skill.toLowerCase().includes(existing.toLowerCase())
      )
    );

    return newSkills.slice(0, 5); // Return top 5 suggestions
  }

  // Mock ATS optimization score
  async getATSScore(resumeData: any): Promise<{ score: number; suggestions: string[] }> {
    await new Promise(resolve => setTimeout(resolve, 500));

    const suggestions: string[] = [];
    let score = 85;

    if (!resumeData.personalInfo.fullName) {
      suggestions.push("Add your full name");
      score -= 10;
    }

    if (!resumeData.personalInfo.email) {
      suggestions.push("Add your email address");
      score -= 10;
    }

    if (!resumeData.summary) {
      suggestions.push("Add a professional summary");
      score -= 15;
    }

    if (resumeData.experience.length === 0) {
      suggestions.push("Add work experience");
      score -= 20;
    }

    if (resumeData.skills.length < 5) {
      suggestions.push("Add more relevant skills (aim for 8-12)");
      score -= 10;
    }

    if (resumeData.experience.some((exp: any) => !exp.description)) {
      suggestions.push("Add descriptions to all work experiences");
      score -= 10;
    }

    return {
      score: Math.max(score, 0),
      suggestions
    };
  }
}

export const aiService = AIService.getInstance();
