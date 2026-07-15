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
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Track Your Order</h1>
          <p className="text-gray-500">Enter your order ID to track your shipment</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {!trackingResult ? (
            <div className="card p-8">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Enter Your Order ID</h2>
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
                <button onClick={handleTrack} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                  Track Order
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Order Info */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Order #{trackingResult.id}</h2>
                    <p className="text-gray-500">Estimated Delivery: {trackingResult.estimatedDelivery}</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">{trackingResult.currentLocation}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-semibold capitalize text-gray-900">{trackingResult.status}</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="card p-6">
                <h3 className="font-semibold mb-6 text-gray-900">Order Timeline</h3>
                <div className="space-y-6">
                  {trackingResult.timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index < 3 ? 'bg-blue-600' : 'bg-gray-300'}`}>
                          <item.icon className={`w-5 h-5 ${index < 3 ? 'text-white' : 'text-gray-500'}`} />
                        </div>
                        {index < trackingResult.timeline.length - 1 && (
                          <div className={`w-0.5 h-12 ${index < 2 ? 'bg-blue-600' : 'bg-gray-300'}`} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.status}</p>
                        <p className="text-sm text-gray-500">{item.date} at {item.time}</p>
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
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl w-full font-semibold transition-all"
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
