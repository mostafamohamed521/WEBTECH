import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tag, Copy, Check, Percent, Clock } from 'lucide-react'
import toast from 'react-hot-toast'

const Coupons = () => {
  const [copiedCode, setCopiedCode] = useState(null)

  const coupons = [
    { code: 'WELCOME20', discount: '20% OFF', description: 'First order discount', minPurchase: 50, expiry: '2024-12-31', category: 'all' },
    { code: 'FLASH50', discount: '$50 OFF', description: 'Orders over $200', minPurchase: 200, expiry: '2024-06-30', category: 'all' },
    { code: 'TECH10', discount: '10% OFF', description: 'Tech products only', minPurchase: 100, expiry: '2024-09-30', category: 'tech' },
    { code: 'FREESHIP', discount: 'FREE SHIPPING', description: 'No minimum purchase', minPurchase: 0, expiry: '2024-12-31', category: 'shipping' },
    { code: 'SUMMER25', discount: '25% OFF', description: 'Summer sale', minPurchase: 75, expiry: '2024-08-31', category: 'seasonal' },
  ]

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    toast.success('Coupon code copied!')
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-xl">
              <Tag className="w-8 h-8 text-blue-600" />
            </div>
            Available Coupons
          </h1>
          <p className="text-gray-500">Save money with our exclusive deals</p>
        </motion.div>

        {/* Active Coupons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Active Coupons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coupons.map((coupon, index) => (
              <motion.div
                key={coupon.code}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card border-2 border-dashed border-blue-600/50 relative overflow-hidden p-6 hover:shadow-md transition-shadow"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Percent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-blue-600">{coupon.code}</h3>
                      <button
                        onClick={() => handleCopy(coupon.code)}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        {copiedCode === coupon.code ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-600" />}
                      </button>
                    </div>
                    <p className="text-lg font-semibold mb-1 text-gray-900">{coupon.discount}</p>
                    <p className="text-sm text-gray-500 mb-2">{coupon.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Expires: {coupon.expiry}</span>
                  </div>
                  <span>Min purchase: ${coupon.minPurchase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How to Use */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">How to Use Coupons</h2>
          <div className="card p-6">
            <ol className="space-y-4">
              {[
                'Browse our available coupons above',
                'Click the copy button next to the coupon code',
                'Add items to your cart',
                'Paste the coupon code at checkout',
                'Enjoy your discount!'
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <span className="text-gray-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.section>

        {/* Terms */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Terms & Conditions</h2>
          <div className="card p-6">
            <ul className="space-y-2 text-gray-600">
              <li>• Coupons cannot be combined with other offers</li>
              <li>• Each coupon can only be used once per customer</li>
              <li>• Coupons are valid until the expiration date</li>
              <li>• Minimum purchase requirements must be met</li>
              <li>• Some coupons may be category-specific</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Coupons
