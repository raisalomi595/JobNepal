import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    features: [
      "Browse and search jobs",
      "Apply to jobs",
      "Save up to 10 jobs",
      "Basic profile",
      "Email notifications",
    ],
    cta: "Current Plan",
    highlighted: false,
  },
  {
    name: "Premium Monthly",
    price: "999",
    period: "/month",
    features: [
      "Everything in Free",
      "Priority application review",
      "Featured resume badge",
      "AI resume review & score",
      "Unlimited applications",
      "Early access to new jobs",
      "Salary insights & analytics",
      "Unlimited saved jobs",
      "Profile badge",
    ],
    cta: "Upgrade to Premium",
    highlighted: true,
  },
  {
    name: "Premium Yearly",
    price: "9,999",
    period: "/year",
    features: [
      "Everything in Premium Monthly",
      "2 months free",
      "Priority support",
      "Career coaching session",
      "Premium support",
    ],
    cta: "Go Annual (Save 17%)",
    highlighted: false,
  },
];

export default function Premium() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Upgrade Your Job Search</h1>
        <p className="text-sm text-gray-500 mt-1">Get ahead with premium features designed to help you land your dream job faster.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.highlighted ? "border-[#fc8b07] ring-2 ring-[#fc8b07]/20" : ""}`}>
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fc8b07] text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <div className="text-center pt-2">
              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">Rs. {plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-2.5 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlighted ? "primary" : "outline"}
              className="w-full"
              disabled={plan.name === "Free"}
            >
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-400">
          All plans include a 7-day free trial. Cancel anytime. Secure payment via Stripe.
        </p>
      </div>
    </div>
  );
}
