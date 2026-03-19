export const STRIPE_PRICES = {
  starter: 'price_1TChYQFE7rCAiPw0AUxtdP2Q',
  professional: 'price_1TChYQFE7rCAiPw0kl4xmQ8n',
  enterprise: 'price_1TChYRFE7rCAiPw05GnjVVKe',
};

export const PRICING_TIERS = [
  {
    name: 'Starter',
    priceId: 'price_1TChYQFE7rCAiPw0AUxtdP2Q',
    price: 19,
    description: 'Perfect for getting started',
    features: [
      'Basic features',
      'Up to 100 requests/month',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    priceId: 'price_1TChYQFE7rCAiPw0kl4xmQ8n',
    price: 49,
    description: 'Most popular for teams',
    features: [
      'All Starter features',
      'Unlimited requests',
      'Priority support',
      'Advanced analytics',
      'Team collaboration',
    ],
  },
  {
    name: 'Enterprise',
    priceId: 'price_1TChYRFE7rCAiPw05GnjVVKe',
    price: 99,
    description: 'For large-scale operations',
    features: [
      'All Professional features',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
    ],
  },
];
