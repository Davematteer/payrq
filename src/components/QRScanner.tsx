"use client"

import { useState } from "react"
import { useZxing } from "react-zxing"
import { PaymentDrawer } from "./PaymentDrawer"
import { motion, AnimatePresence } from "framer-motion"

interface Encode {
  metaData: string
  item: { name: string; price: number }[]
}

export const QRScanner = () => {
  const [result, setResult] = useState("")
  const [isOpen, setOpen] = useState(false)

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText())
      setOpen(true)
    },
  })

  let data: Partial<Encode> = {}
  if (result !== "") {
    try {
      data = JSON.parse(result)
    } catch (e) {
      console.error("Invalid JSON from QR code:", e)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 m-2">
      {/* Scanner video */}
      <motion.video
        ref={ref}
        className="rounded-xl shadow-xl border border-gray-200 translate-y-15"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Scanned text */}
      <AnimatePresence>
        {result && (
          <motion.p
            key="scan-result"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-lg text-gray-700 font-light text-center"
          >
            {result}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Payment Drawer */}
      <AnimatePresence>
        {data.metaData && (
          <motion.div
            key="drawer-trigger"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <PaymentDrawer isOpen={isOpen} setOpen={setOpen} total={100} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
