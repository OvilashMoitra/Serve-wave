"use client"

import { useState } from "react"
import Link from "next/link"
import { Button, Card } from "antd"




export default function PaymentFailedPage() {
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetry = () => {
    setIsRetrying(true)
    // Simulate retry process
    setTimeout(() => {
      setIsRetrying(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-slate-50 p-4">
     
        <Card className="border-rose-200 shadow-lg">
          <div className="pb-4">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center"
              >
                {/* <AlertCircle className="h-8 w-8 text-rose-500" /> */}
              </div>
            </div>
            <h3 className="text-center text-2xl font-bold text-rose-700">Payment Failed</h3>
            <p className="text-center text-rose-500 mt-1">
              We couldn't process your payment
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
              <h3 className="font-medium text-rose-800 mb-2">What went wrong?</h3>
              <p className="text-sm text-rose-600">
                Your payment was declined by your bank. This could be due to insufficient funds, expired card details,
                or security restrictions.
              </p>
            </div>
            <div
              className="rounded-lg bg-amber-50 border border-amber-100 p-3 text-sm text-amber-700"
            >
              <p className="flex items-start">
                <span>
                  Your card hasn't been charged. You can try again with the same or a different payment method.
                </span>
              </p>
            </div>
              </div>
              <div
          className="mt-4 text-center text-sm text-slate-500"
        >
                  <Button>
                  <Link href="/" className="text-rose-600 hover:underline">
           Go to home page
          </Link>
          </Button>
        </div>

        </Card>

       
    </div>
  )
}
