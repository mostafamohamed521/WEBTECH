import { motion } from 'framer-motion'
import { Package, Clock, CheckCircle, XCircle, Truck } from 'lucide-react'

const Orders = () => {
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 1299.00,
      items: 2,
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'shipped',
      total: 499.00,
      items: 1,
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'processing',
      total: 849.00,
      items: 3,
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'shipped':
        return <Truck className="w-5 h-5 text-blue-500" />
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Package className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'text-green-500'
      case 'shipped':
        return 'text-blue-500'
      case 'processing':
        return 'text-yellow-500'
      case 'cancelled':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900"
        >
          Order History
        </motion.h1>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Package className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{order.id}</h3>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Items</p>
                    <p className="font-semibold text-gray-900">{order.items}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="font-semibold text-gray-900">${order.total.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    <span className={`font-semibold capitalize ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders
