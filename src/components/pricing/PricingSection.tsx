'use client'

import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import { Button } from '../ui/Button'

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$9.99',
    period: '/month',
    description: 'Perfect for occasional car washes',
    features: [
      '2 car washes per month',
      'Basic exterior wash',
      'Mobile app access',
      'Booking notifications',
      'Standard support',
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$24.99',
    period: '/month',
    description: 'Best for regular car care',
    features: [
      '8 car washes per month',
      'Premium exterior & interior',
      'Priority booking',
      'Multiple vehicle support',
      'Wax & polish included',
      '24/7 priority support',
    ],
    popular: true,
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Unlimited',
    price: '$49.99',
    period: '/month',
    description: 'For car enthusiasts',
    features: [
      'Unlimited car washes',
      'Premium detailing service',
      'VIP priority booking',
      'Unlimited vehicles',
      'Ceramic coating discount',
      'Concierge support',
      'Free pickup & delivery',
    ],
    buttonText: 'Go Premium',
  },
]

interface PricingCardProps extends PricingPlan {
  index: number
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
  buttonText,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col rounded-2xl p-8 ${
        popular
          ? 'bg-gradient-to-br from-primary to-[#1976D2] text-white shadow-2xl scale-105'
          : 'bg-white text-gray-800 shadow-lg'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-gray-800">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3
          className={`mb-2 text-2xl font-bold ${popular ? 'text-white' : 'text-gray-800'}`}
        >
          {name}
        </h3>
        <p className={`text-sm ${popular ? 'text-white/80' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      <div className="mb-6">
        <span className="text-5xl font-bold">{price}</span>
        <span className={`text-lg ${popular ? 'text-white/80' : 'text-gray-600'}`}>
          {period}
        </span>
      </div>
      <ul className="mb-8 flex-grow space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaCheck
              className={`mt-1 flex-shrink-0 ${popular ? 'text-yellow-300' : 'text-green-500'}`}
            />
            <span className={popular ? 'text-white/90' : 'text-gray-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        href="mailto:support@megacarwash.com"
        primary={!popular}
        big
        className={`w-full text-center ${
          popular
            ? 'bg-primary text-white hover:bg-blue-600'
            : ''
        }`}
        style={popular ? { backgroundColor: '#2196F3', color: 'white' } : undefined}
      >
        {buttonText}
      </Button>
    </motion.div>
  )
}

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-[10%]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-5xl font-bold text-gray-800 max-[768px]:text-4xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Choose the plan that fits your car care needs. No hidden fees, cancel
            anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            All plans include access to our mobile app and 100+ partner locations
            nationwide.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Need a custom plan for your business?{' '}
            <a
              href="mailto:support@megacarwash.com"
              className="text-primary underline hover:text-[#1976D2]"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
