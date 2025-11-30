'use client'

import { motion } from 'framer-motion'
import {
  FaClock,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaShieldAlt,
  FaStar,
  FaLeaf,
  FaCreditCard,
  FaHeadset,
} from 'react-icons/fa'

interface FeatureData {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

const features: FeatureData[] = [
  {
    icon: FaClock,
    title: 'Real-Time Booking',
    description: 'Book your car wash instantly and track your appointment in real-time',
    color: '#2196F3',
  },
  {
    icon: FaMapMarkerAlt,
    title: '100+ Locations',
    description: 'Access partner locations nationwide, wherever you are',
    color: '#F44336',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile First',
    description: 'Manage everything from your phone with our intuitive app',
    color: '#9C27B0',
  },
  {
    icon: FaShieldAlt,
    title: 'Secure Payments',
    description: 'Safe and encrypted payment processing for your peace of mind',
    color: '#4CAF50',
  },
  {
    icon: FaStar,
    title: 'Quality Guaranteed',
    description: '4.8-star rated service with satisfaction guarantee',
    color: '#FF9800',
  },
  {
    icon: FaLeaf,
    title: 'Eco-Friendly',
    description: 'Environmentally conscious cleaning products and water conservation',
    color: '#8BC34A',
  },
  {
    icon: FaCreditCard,
    title: 'Flexible Plans',
    description: 'Pay-per-wash or subscribe for unlimited monthly access',
    color: '#00BCD4',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Customer service team ready to help anytime you need',
    color: '#673AB7',
  },
]

interface FeatureProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

function Feature({ icon: Icon, title, description, color }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center max-w-[280px]"
    >
      <div
        className="mb-4 flex h-20 w-20 items-center justify-center rounded-full"
        style={{ backgroundColor: `${color}20` }}
      >
        <span style={{ color }}>
          <Icon className="text-4xl" />
        </span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-300">{description}</p>
    </motion.div>
  )
}

export default function Technologies() {
  return (
    <div className="px-[10%] py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-[63px] font-semibold text-primary max-[960px]:text-[40px] max-[768px]:text-[50px] max-[400px]:text-[30px]"
      >
        Why Choose Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16 text-center text-lg text-gray-300 max-[768px]:text-base"
      >
        Everything you need for a seamless car wash experience
      </motion.p>
      <div className="grid grid-cols-4 gap-12 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 justify-items-center">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            color={feature.color}
          />
        ))}
      </div>
    </div>
  )
}
