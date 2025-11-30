'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaHeart, FaUsers, FaLeaf } from 'react-icons/fa'

const values = [
  {
    icon: FaRocket,
    title: 'Innovation',
    description:
      'We leverage cutting-edge technology to make car care effortless and accessible to everyone.',
    color: '#2196F3',
  },
  {
    icon: FaHeart,
    title: 'Customer First',
    description:
      'Your satisfaction is our priority. We go above and beyond to deliver exceptional service every time.',
    color: '#F44336',
  },
  {
    icon: FaUsers,
    title: 'Community',
    description:
      'Building lasting relationships with our customers and partner locations across the nation.',
    color: '#9C27B0',
  },
  {
    icon: FaLeaf,
    title: 'Sustainability',
    description:
      'Committed to eco-friendly practices and water conservation in every wash we perform.',
    color: '#4CAF50',
  },
]

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-[#1976D2] py-20 text-white">
        <div className="mx-auto max-w-4xl px-[10%] text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-5xl font-bold max-[768px]:text-4xl"
          >
            Revolutionizing Car Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl leading-relaxed text-white/90"
          >
            We're on a mission to make professional car washing accessible,
            convenient, and environmentally responsible for everyone.
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <div className="mx-auto max-w-6xl px-[10%] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-800">Our Story</h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Founded in 2020, Megacarwash was born from a simple frustration:
              getting a quality car wash shouldn't require waiting in long lines
              or driving across town.
            </p>
            <p>
              We started with a vision to connect car owners with trusted
              professional car wash services through a seamless mobile experience.
              Today, we're proud to serve over 50,000 active users across 100+
              partner locations nationwide.
            </p>
            <p>
              Our platform combines the convenience of on-demand booking with the
              quality assurance of verified partner locations, all while
              maintaining our commitment to environmental sustainability.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="text-3xl" style={{ color: value.color }} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl bg-gradient-to-br from-primary to-[#1976D2] p-12 text-white"
        >
          <h2 className="mb-12 text-center text-4xl font-bold">
            Impact by the Numbers
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">50K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">100+</div>
              <div className="text-white/80">Partner Locations</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">200K+</div>
              <div className="text-white/80">Completed Bookings</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">4.8★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
