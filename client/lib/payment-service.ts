// Payment Service for handling Stripe payments and subscriptions
// In production, replace with actual Stripe keys

interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  interval: "month" | "year";
  features: string[];
  stripePriceId?: string;
}

export const paymentPlans: PaymentPlan[] = [
  {
    id: "free",
    name: "Starter",
    price: 0,
    interval: "month",
    features: [
      "3 resume templates",
      "Basic AI suggestions",
      "PDF download",
      "ATS optimization",
      "1 resume project",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 9.99,
    interval: "month",
    features: [
      "50+ premium templates",
      "Advanced AI writing assistant",
      "Multiple formats (PDF, Word, HTML)",
      "Cover letter generator",
      "Unlimited resume projects",
      "Priority email support",
      "LinkedIn profile optimization",
    ],
    stripePriceId: "price_professional_monthly",
  },
  {
    id: "executive",
    name: "Executive",
    price: 19.99,
    interval: "month",
    features: [
      "Everything in Professional",
      "Executive resume templates",
      "Personal branding consultation",
      "1-on-1 career coaching session",
      "Interview preparation guide",
      "Salary negotiation templates",
      "Priority phone support",
    ],
    stripePriceId: "price_executive_monthly",
  },
];

export interface PaymentSession {
  sessionId: string;
  url: string;
  planId: string;
}

export interface Subscription {
  id: string;
  planId: string;
  status: "active" | "canceled" | "past_due" | "trialing";
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
}

class PaymentService {
  private static instance: PaymentService;

  static getInstance(): PaymentService {
    if (!PaymentService.instance) {
      PaymentService.instance = new PaymentService();
    }
    return PaymentService.instance;
  }

  // Create checkout session (mock implementation)
  async createCheckoutSession(
    planId: string,
    userId: string,
  ): Promise<PaymentSession> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const plan = paymentPlans.find((p) => p.id === planId);
    if (!plan || plan.price === 0) {
      throw new Error("Invalid plan selected");
    }

    // In production, this would call your backend to create a Stripe session
    const mockSession: PaymentSession = {
      sessionId: `cs_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      url: `/payment/success?session_id=cs_${Date.now()}`,
      planId,
    };

    // For demo purposes, redirect to success page after a delay
    setTimeout(() => {
      window.location.href = mockSession.url;
    }, 2000);

    return mockSession;
  }

  // Get user subscription status
  async getSubscription(userId: string): Promise<Subscription | null> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mock subscription - in production, fetch from your backend
    const mockSubscription: Subscription = {
      id: "sub_" + Math.random().toString(36).substr(2, 9),
      planId: "free",
      status: "active",
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      cancelAtPeriodEnd: false,
    };

    return mockSubscription;
  }

  // Cancel subscription
  async cancelSubscription(subscriptionId: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // In production, call your backend to cancel the Stripe subscription
    console.log("Subscription cancelled:", subscriptionId);
  }

  // Resume subscription
  async resumeSubscription(subscriptionId: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // In production, call your backend to resume the Stripe subscription
    console.log("Subscription resumed:", subscriptionId);
  }

  // Get plan by ID
  getPlan(planId: string): PaymentPlan | undefined {
    return paymentPlans.find((plan) => plan.id === planId);
  }

  // Check if user has access to feature based on plan
  hasFeatureAccess(userPlanId: string, feature: string): boolean {
    const plan = this.getPlan(userPlanId);
    if (!plan) return false;

    // Free plan restrictions
    if (userPlanId === "free") {
      const restrictedFeatures = [
        "premium_templates",
        "advanced_ai",
        "multiple_formats",
        "cover_letter_generator",
        "unlimited_projects",
        "priority_support",
      ];
      return !restrictedFeatures.includes(feature);
    }

    // Professional and Executive have full access
    return true;
  }
}

export const paymentService = PaymentService.getInstance();
