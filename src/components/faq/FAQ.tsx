'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How does Megacarwash work?',
    answer:
      'Simply download our app, create an account, choose a nearby location, select your preferred service, and book a time slot. Show up at your scheduled time, and our partners will take care of the rest!',
  },
  {
    question: 'Can I cancel or reschedule my booking?',
    answer:
      'Yes! You can cancel or reschedule your booking up to 2 hours before your scheduled time directly from the app without any fees.',
  },
  {
    question: 'What if I have multiple vehicles?',
    answer:
      "You can add unlimited vehicles to your account. Simply save each vehicle's details in the app, and select which one you would like to service when booking.",
  },
  {
    question: 'Are all car wash locations the same quality?',
    answer:
      'We carefully vet all our partner locations to ensure they meet our quality standards. Every location is regularly audited, and customer ratings help us maintain high service quality.',
  },
  {
    question: 'What is included in each plan?',
    answer:
      'Each plan includes different numbers of washes per month and varying service levels. Check our Pricing page for detailed comparisons. All plans include mobile app access, booking notifications, and access to our full network of locations.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! New users get a 7-day free trial with our Pro plan. You can cancel anytime before the trial ends with no charges.',
  },
]

function FAQAccordion({ question, answer, index }: FAQItem & { index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="rounded-lg border border-gray-200 bg-white"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
      >
        <span className="pr-4 text-lg font-semibold text-gray-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <FaChevronDown className="text-primary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-[10%]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-gray-800 max-[768px]:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We have got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} {...faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Still have questions?{' '}
            <a
              href="mailto:support@megacarwash.com"
              className="text-primary underline hover:text-[#1976D2]"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
