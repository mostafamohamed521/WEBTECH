import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react'

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('')
  const [trackingResult, setTrackingResult] = useState(null)

  const handleTrack = () => {
    if (orderId) {
      setTrackingResult({
        id: orderId,
        status: 'shipped',
        estimatedDelivery: '2024-01-20',
        currentLocation: 'San Francisco, CA',
        timeline: [
          { date: '2024-01-15', time: '10:30 AM', status: 'Order Placed', icon: Package },
          { date: '2024-01-16', time: '2:00 PM', status: 'Processing', icon: Clock },
          { date: '2024-01-17', time: '9:00 AM', status: 'Shipped', icon: Truck },
          { date: '2024-01-20', time: 'Expected', status: 'Delivered', icon: CheckCircle },
        ]
      })
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Track Your Order
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {!trackingResult ? (
            <div className="card">
              <h2 className="text-xl font-bold mb-6">Enter Your Order ID</h2>
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="e.g., ORD-001234"
                    className="input-field w-full pl-12"
                  />
                </div>
                <button onClick={handleTrack} className="btn-primary">
                  Track Order
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Order Info */}
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">Order #{trackingResult.id}</h2>
                    <p className="text-gray-400">Estimated Delivery: {trackingResult.estimatedDelivery}</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-5 h-5" />
                    <span>{trackingResult.currentLocation}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-6 h-6 text-blue-500" />
                  <span className="font-semibold capitalize">{trackingResult.status}</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="card">
                <h3 className="font-semibold mb-6">Order Timeline</h3>
                <div className="space-y-6">
                  {trackingResult.timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index < 3 ? 'bg-primary' : 'bg-gray-800'}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        {index < trackingResult.timeline.length - 1 && (
                          <div className={`w-0.5 h-12 ${index < 2 ? 'bg-primary' : 'bg-gray-800'}`} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{item.status}</p>
                        <p className="text-sm text-gray-400">{item.date} at {item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setTrackingResult(null)
                  setOrderId('')
                }}
                className="btn-secondary w-full"
              >
                Track Another Order
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default OrderTracking
