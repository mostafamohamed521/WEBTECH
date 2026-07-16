import { useState } from 'react'
import { motion } from 'framer-motion'
import { Package, Clock, CheckCircle, XCircle, Truck, ChevronDown, ChevronUp, Eye, Download, RefreshCw } from 'lucide-react'

const Orders = () => {
  const [expandedOrder, setExpandedOrder] = useState(null)
  const [filterStatus, setFilterStatus] = useState('all')

  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 1299.00,
      items: 2,
      shipping: 'Free',
      payment: 'Credit Card',
      tracking: '1Z999AA10123456784',
      deliveryDate: '2024-01-18',
      products: [
        { name: 'iPhone 15 Pro Max', price: 1199, quantity: 1, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100' },
        { name: 'AirPods Pro 2', price: 249, quantity: 1, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=100' },
      ],
      address: '123 Main Street, New York, NY 10001',
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-10',
      status: 'shipped',
      total: 499.00,
      items: 1,
      shipping: '$10.00',
      payment: 'PayPal',
      tracking: '1Z999AA10123456785',
      estimatedDelivery: '2024-01-17',
      products: [
        { name: 'PlayStation 5', price: 499, quantity: 1, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=100' },
      ],
      address: '456 Oak Avenue, Los Angeles, CA 90001',
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-05',
      status: 'processing',
      total: 849.00,
      items: 3,
      shipping: 'Free',
      payment: 'Credit Card',
      tracking: null,
      products: [
        { name: 'Sony WH-1000XM5', price: 349, quantity: 1, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=100' },
        { name: 'MacBook Pro Case', price: 49, quantity: 1, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100' },
        { name: 'USB-C Cable', price: 19, quantity: 2, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100' },
      ],
      address: '789 Pine Road, Chicago, IL 60601',
    },
    {
      id: 'ORD-2024-004',
      date: '2024-01-02',
      status: 'cancelled',
      total: 1899.00,
      items: 1,
      shipping: '$15.00',
      payment: 'Credit Card',
      tracking: null,
      products: [
        { name: 'MacBook Pro 16"', price: 1899, quantity: 1, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100' },
      ],
      address: '321 Elm Street, Houston, TX 77001',
    },
  ]

  const filteredOrders = filterStatus === 'all' ? orders : orders.filter(o => o.status === filterStatus)

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
        return 'text-green-500 bg-green-50'
      case 'shipped':
        return 'text-blue-500 bg-blue-50'
      case 'processing':
        return 'text-yellow-500 bg-yellow-50'
      case 'cancelled':
        return 'text-red-500 bg-red-50'
      default:
        return 'text-gray-500 bg-gray-50'
    }
  }

  const toggleExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-gray-500">Track and manage your orders</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 mb-8 overflow-x-auto pb-2"
        >
          {['all', 'processing', 'shipped', 'delivered', 'cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${filterStatus === status ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="space-y-4">
          {filteredOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="card hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <Package className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{order.id}</h3>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Items</p>
                      <p className="font-semibold text-gray-900 text-lg">{order.items}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Total</p>
                      <p className="font-semibold text-gray-900 text-lg">${order.total.toFixed(2)}</p>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="font-semibold capitalize text-sm">
                        {order.status}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleExpand(order.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {expandedOrder === order.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedOrder === order.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Order Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Payment Method</span>
                            <span className="text-gray-900">{order.payment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Shipping</span>
                            <span className="text-gray-900">{order.shipping}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Delivery Address</span>
                            <span className="text-gray-900 text-right">{order.address}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tracking Information</h4>
                        {order.tracking ? (
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Tracking Number</span>
                              <span className="text-blue-600 font-medium">{order.tracking}</span>
                            </div>
                            {order.deliveryDate && (
                              <div className="flex justify-between">
                                <span className="text-gray-500">Delivery Date</span>
                                <span className="text-gray-900">{order.deliveryDate}</span>
                              </div>
                            )}
                            {order.estimatedDelivery && (
                              <div className="flex justify-between">
                                <span className="text-gray-500">Estimated Delivery</span>
                                <span className="text-gray-900">{order.estimatedDelivery}</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">Tracking information will be available once shipped</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Products</h4>
                      <div className="space-y-3">
                        {order.products.map((product, pIndex) => (
                          <div key={pIndex} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{product.name}</p>
                              <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                            </div>
                            <p className="font-semibold text-gray-900">${(product.price * product.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all">
                        <Download className="w-4 h-4" />
                        Download Invoice
                      </button>
                      {order.status === 'delivered' && (
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all">
                          <RefreshCw className="w-4 h-4" />
                          Buy Again
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-500">Try adjusting your filter or start shopping</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Orders
