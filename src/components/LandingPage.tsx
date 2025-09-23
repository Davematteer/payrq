"use client"

import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay each child
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function LandingPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen flex flex-col justify-center items-center font-sans"
    >
      <motion.p variants={item} className="text-6xl font-extralight">
        Scan.
      </motion.p>
      <motion.p variants={item} className="text-6xl font-extralight">
        Pay.
      </motion.p>
      <motion.p variants={item} className="text-6xl font-extralight">
        Done!
      </motion.p>
      <motion.p variants={item} className="text-lg text-gray-600 mt-6">
        Just scan the QR code.
      </motion.p>
    </motion.div>
  )
}
