'use client'

import { motion } from 'framer-motion'
import { FaStar, FaBriefcase, FaTruck, FaCar } from 'react-icons/fa'
import React from 'react'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  icon: React.ReactNode
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Busy Professional',
    content:
      'Megacarwash has been a game-changer for me. I can book a wash during my lunch break and my car is ready when I need it. The app is so easy to use!',
    rating: 5,
    icon: <FaBriefcase className="text-2xl" />,
  },
  {
    name: 'Michael Chen',
    role: 'Fleet Manager',
    content:
      'Managing car washes for our company fleet used to be a nightmare. Now with Megacarwash, I can schedule everything in advance and track all our vehicles in one place.',
    rating: 5,
    icon: <FaTruck className="text-2xl" />,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Uber Driver',
    content:
      'As a rideshare driver, keeping my car clean is essential. The unlimited plan pays for itself, and I love that I can use any of their 100+ locations.',
    rating: 5,
    icon: <FaCar className="text-2xl" />,
  },
]

function TestimonialCard({
  name,
  role,
  content,
  rating,
  icon,
  index,
}: Testimonial & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-2xl bg-white p-8 shadow-lg"
    >
      <div className="mb-4 flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
      <p className="mb-6 flex-grow text-gray-700 italic leading-relaxed">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#1976D2] text-white">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-gray-800">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-[10%]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-gray-800 max-[768px]:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Join thousands of satisfied customers who've made car care effortless
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
