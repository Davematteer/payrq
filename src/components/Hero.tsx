import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay each child
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="text-center space-y-2"
    >
      <motion.h1 variants={item} className="text-4xl font-bold">
        Fast, Simple, Secure
      </motion.h1>
      <motion.p variants={item} className="text-lg text-gray-600">
        Just scan the QR code.
      </motion.p>
    </motion.div>
  )
}
