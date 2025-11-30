'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <div className="mb-16 px-[10%]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center text-center"
      >
        About this project
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-left leading-[1.75]"
      >
        <h1>
          Introducing the Ultimate Convenience: Remote Registration for Carwash
          Services
        </h1>

        <p>
          At <em>Megacarwash</em>, we understand that your time is valuable, and
          convenience is paramount in today&apos;s fast-paced world. That&apos;s
          why we&apos;re thrilled to present our groundbreaking mobile app,
          designed to revolutionize your carwash experience. Say goodbye to
          waiting in long queues or making endless phone calls to book an
          appointment—our Remote Registration feature is here to simplify your
          life.
        </p>

        <h2>Why Choose Remote Registration?</h2>

        <ul>
          <li>
            <strong>Effortless Convenience:</strong> Our user-friendly mobile
            app allows you to book your carwash appointment from anywhere,
            anytime. Whether you&apos;re at home, at the office, or on the go,
            you can effortlessly schedule your wash with just a few taps on your
            smartphone.
          </li>

          <li>
            <strong>Time-Saving:</strong> Bid farewell to the frustrating wait
            times at the carwash. With Remote Registration, you can reserve your
            slot in advance, ensuring that your car is cleaned at a time that
            suits your schedule.
          </li>

          <li>
            <strong>Contactless Experience:</strong> In today&apos;s
            health-conscious climate, minimizing physical contact is a top
            priority. Our app enables a seamless, contactless registration
            process, reducing unnecessary interaction while maximizing safety.
          </li>

          <li>
            <strong>Customization:</strong> Tailor your carwash experience to
            your preferences. Choose from a range of wash packages, add-on
            services, and special requests to ensure your vehicle gets the care
            it deserves.
          </li>

          <li>
            <strong>Real-time Updates:</strong> Stay informed about your
            appointment with real-time notifications. You&apos;ll receive alerts
            when your wash is in progress and when it&apos;s ready for pickup,
            keeping you connected every step of the way.
          </li>
        </ul>

        <h2>How It Works:</h2>

        <ol>
          <li>
            <strong>Download the App:</strong> Get started by downloading our
            user-friendly app from your device&apos;s app store.
          </li>

          <li>
            <strong>Register:</strong> Create your account with a few simple
            steps, and you&apos;re ready to roll.
          </li>

          <li>
            <strong>Choose Your Service:</strong> Browse our menu of carwash
            services and select the one that suits your needs.
          </li>

          <li>
            <strong>Select a Date and Time:</strong> Pick a date and time that
            works for you. We offer flexible scheduling options to accommodate
            your busy lifestyle.
          </li>

          <li>
            <strong>Review and Confirm:</strong> Double-check your selection and
            confirm your booking.
          </li>

          <li>
            <strong>Arrive and Relax:</strong> Drive to our carwash location at
            your appointed time, and leave the rest to us. Your vehicle will
            receive top-notch care from our skilled team.
          </li>

          <li>
            <strong>Enjoy Your Clean Car:</strong> Within no time, you&apos;ll
            be back on the road with a sparkling clean vehicle.
          </li>
        </ol>

        <p>
          At <em>Megacarwash</em>, we&apos;re committed to making your carwash
          experience as convenient, efficient, and enjoyable as possible. Try
          our Remote Registration feature today and discover a new level of car
          care. Your car deserves it, and so do you.
        </p>

        <p>
          <em>
            Experience the future of carwash services. Download the{' '}
            <strong>Megacarwash</strong> app now!
          </em>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 flex w-full justify-center"
      >
        <Image
          src="/about.png"
          alt="About Megacarwash"
          width={800}
          height={600}
          className="w-full max-w-[800px] px-[10%]"
        />
      </motion.div>
    </div>
  )
}
