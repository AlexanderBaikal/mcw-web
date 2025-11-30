'use client'

import { motion } from 'framer-motion'

interface StatItem {
  main: string
  top: string
  bottom: string
}

const statItems: StatItem[] = [
  {
    main: '50K+',
    top: 'active',
    bottom: 'users',
  },
  {
    main: '100+',
    top: 'partner',
    bottom: 'locations',
  },
  {
    main: '4.8★',
    top: 'app store',
    bottom: 'rating',
  },
  {
    main: '200K+',
    top: 'completed',
    bottom: 'bookings',
  },
  {
    main: '24/7',
    top: 'customer',
    bottom: 'support',
  },
]

interface ExtraTextProps {
  main: string
  top: string
  bottom: string
  color?: string
}

function ExtraText({ main, top, bottom, color = 'white' }: ExtraTextProps) {
  return (
    <div
      className="flex items-center justify-center text-base text-white max-[768px]:text-sm"
      style={{ color }}
    >
      <p className="text-[40px] font-semibold max-[768px]:text-[30px]">
        {main}
      </p>
      <div className="ml-3.5 flex flex-col">
        <p className="font-medium leading-[18px] text-gray-200 max-[768px]:leading-4">
          {top}
        </p>
        <p className="font-normal leading-[18px] text-gray-200 max-[768px]:leading-4">
          {bottom}
        </p>
      </div>
    </div>
  )
}

interface CompaniesSectionProps {
  top?: boolean
}

export default function CompaniesSection({ top }: CompaniesSectionProps) {
  return (
    <div
      className={`mb-8 flex items-center justify-center overflow-x-hidden ${
        top
          ? 'flex-row max-[1080px]:hidden'
          : 'hidden flex-col max-[1080px]:flex'
      }`}
    >
      <div className="flex w-full justify-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="m-0 grid w-full max-w-[1200px] items-center gap-x-12 gap-y-0 grid-cols-5 max-[1230px]:grid-cols-4 max-[1230px]:gap-x-8 max-[1230px]:gap-y-10 max-[1050px]:grid-cols-3 max-[1050px]:gap-x-6 max-[860px]:grid-cols-2 max-[860px]:gap-x-4 max-[300px]:grid-cols-1"
        >
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex max-w-full items-center justify-center"
            >
              <ExtraText main={item.main} top={item.top} bottom={item.bottom} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
