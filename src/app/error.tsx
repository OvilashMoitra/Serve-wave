'use client' // Error components must be Client Components
 
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <div
            style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                background: "#fff",
                width: "100vw",
                height: "100vh",
            }}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
        }}>
          
                {/* <Image
                    src="https://i.ibb.co/TgF4R0z/Red-Triangle-warning-sign-vector-art-illustration.jpg"
                    alt="404"
                    width={500}
                    height={500}
                /> */}
                <Button type="primary" size={"middle"}>
                    <Link href="/">Go to Home</Link>
                </Button>
            </div>
        </div>
    </div>
  )
}