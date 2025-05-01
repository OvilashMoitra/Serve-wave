'use client'
import React, { useEffect, useState } from "react"
import { Button, Card, Col, Row, Table, Tag, Typography, Space, Divider, notification } from "antd"
import { ArrowRightOutlined, HomeOutlined, ShoppingCartOutlined, FileTextOutlined, CreditCardOutlined, CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons'
import confetti from "canvas-confetti"
import { useVerifyPaymentQuery } from "@/redux/api/orderApi"
import { useSearchParams } from 'next/navigation'
import Link from "next/link"
const { Title, Text } = Typography;

export default function PaymentSuccessfulPage() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('session_id')
  console.log({search})
 
  const [showConfetti, setShowConfetti] = useState(false)
  const {data,isFetching} = useVerifyPaymentQuery(`?sessionId=${search}`, {
    skip:!search
  })

  console.log(data,isFetching)

  // Mock transaction data
  const transaction = {
    id: "TXN-28042025-9385",
    date: "April 28, 2025",
    time: "10:29 AM",
    amount: "$249.99",
    cardType: "Visa",
    cardNumber: "•••• •••• •••• 4242",
    items: [
      { name: "Premium Annual Subscription", price: "$199.99" },
      { name: "Setup Fee (one-time)", price: "$50.00" },
    ],
    subtotal: "$249.99",
    tax: "$0.00",
    total: "$249.99",
  }

  useEffect(() => {
    // Trigger confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true)

      const duration = 3 * 1000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        // Since particles fall down, start a bit higher than random
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#9333EA", "#A855F7", "#D8B4FE", "#2563EB", "#60A5FA"],
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#9333EA", "#A855F7", "#D8B4FE", "#2563EB", "#60A5FA"],
        })
      }, 250)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const columns = [
    { title: 'Description', dataIndex: 'name' },
    { title: 'Amount', dataIndex: 'price', align: 'right' },
  ]

  const tableData = transaction.items.map(item => ({
    key: item.name,
    name: item.name,
    price: item.price,
  }))

  const handleBackToDashboard = () => {
    // Navigate to Dashboard
    console.log('Go to Dashboard');
  }

  const handleViewOrderDetails = () => {
    // Navigate to View Order Details
    console.log('View Order Details');
  }

  const handleContinueShopping = () => {
    // Navigate to Continue Shopping
    console.log('Continue Shopping');
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f4f4f4" }}>
      <div style={{ width: '100%', maxWidth: '900px', padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%', background: '#F4E1F1', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'
          }}>
            <CheckCircleOutlined style={{ fontSize: '40px', color: '#4caf50' }} />
          </div>
          <Title level={2} style={{ color: '#4caf50' }}>Payment Successful!</Title>
          <Text style={{ fontSize: '16px', color: '#6c757d' }}>Thank you for your purchase. Your transaction has been completed.</Text>
        </div>
{/* 
        <Card bordered={false} style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <Card.Meta
            title={<Title level={4} style={{ marginBottom: '0' }}>Payment Receipt</Title>}
            description={
              <Text type="secondary" style={{ fontSize: '14px' }}>
                Transaction ID: {transaction.id}
              </Text>
            }
          />
          <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
            <Col span={12}>
              <Title level={5}>Date & Time</Title>
              <Text>
                <CalendarOutlined style={{ marginRight: '10px', color: '#4caf50' }} />
                {transaction.date} at {transaction.time}
              </Text>
            </Col>
            <Col span={12}>
              <Title level={5}>Payment Method</Title>
              <Text>
                <CreditCardOutlined style={{ marginRight: '10px', color: '#4caf50' }} />
                {transaction.cardType} {transaction.cardNumber}
              </Text>
            </Col>
          </Row>

          <Divider />

          {/* <Title level={5}>Purchase Details</Title>
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            bordered
            summary={() => (
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={1}>Subtotal</Table.Summary.Cell>
                  <Table.Summary.Cell colSpan={1} align="right">{transaction.subtotal}</Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={1}>Tax</Table.Summary.Cell>
                  <Table.Summary.Cell colSpan={1} align="right">{transaction.tax}</Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={1} style={{ fontWeight: 'bold', color: '#4caf50' }}>Total</Table.Summary.Cell>
                  <Table.Summary.Cell colSpan={1} align="right" style={{ fontWeight: 'bold', color: '#4caf50' }}>{transaction.total}</Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          /> */}

          {/* <Divider /> */}

          {/* <div style={{ backgroundColor: '#e7f4e4', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
            <Text>
              <FileTextOutlined style={{ marginRight: '10px' }} />
              A confirmation email with your receipt has been sent to your registered email address. Please keep this for your records.
            </Text>
          </div> */}
        {/* </Card> */}
        
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Button block type="primary" onClick={handleBackToDashboard} icon={<HomeOutlined />}>
              <Link href={'/order'}>
                Go to Order
                </Link> 
            </Button>
          </Col>
          <Col span={8}>
            <Button block type="default" onClick={handleViewOrderDetails} icon={<ArrowRightOutlined />}>
            <Link href={'/'}>
                Go to Home page
                </Link> 
            </Button>
          </Col>
        </Row>


      </div>
    </div>
  )
}
