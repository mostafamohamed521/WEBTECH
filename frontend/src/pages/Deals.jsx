import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Tag, Percent, ArrowRight } from 'lucide-react'

const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const flashSales = [
    { id: 1, name: 'iPhone 15 Pro Max', originalPrice: 1199, salePrice: 999, discount: 17, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400' },
    { id: 2, name: 'MacBook Pro 16"', originalPrice: 2499, salePrice: 2199, discount: 12, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400' },
    { id: 3, name: 'Sony WH-1000XM5', originalPrice: 349, salePrice: 279, discount: 20, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400' },
  ]

  const coupons = [
    { code: 'FLASH20', discount: '20% OFF', minPurchase: 100, expiry: '2 days' },
    { code: 'SAVE50', discount: '$50 OFF', minPurchase: 200, expiry: '5 days' },
    { code: 'FREESHIP', discount: 'FREE SHIPPING', minPurchase: 50, expiry: '7 days' },
  ]

  const categoriesOnSale = [
    { name: 'Smartphones', discount: 'Up to 30% OFF', count: 15 },
    { name: 'Laptops', discount: 'Up to 25% OFF', count: 12 },
    { name: 'Headphones', discount: 'Up to 40% OFF', count: 18 },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Deals & Discounts</h1>
          <p className="text-gray-500">Save big on your favorite products</p>
        </motion.div>

        {/* Flash Sale Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-2xl p-8 mb-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Flash Sale!</h2>
              <p className="text-white/90">Limited time offers on selected products</p>
            </div>
            <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
              <Clock className="w-8 h-8 text-white" />
              <div className="text-3xl font-bold text-white">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flash Sales */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Flash Sale Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashSales.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card group overflow-hidden">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      -{product.discount}%
                    </div>
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 text-gray-900 text-lg">{product.name}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-blue-600">${product.salePrice}</span>
                      <span className="text-gray-400 line-through text-lg">${product.originalPrice}</span>
                    </div>
                    <Link to={`/products/${product.id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl w-full flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg transition-all">
                      View Deal <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Active Coupons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Active Coupons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coupons.map((coupon, index) => (
              <motion.div
                key={coupon.code}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card border-2 border-dashed border-blue-600/50 p-6 hover:border-blue-600 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Tag className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{coupon.code}</p>
                    <p className="text-sm text-gray-500">{coupon.discount}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>Min purchase: ${coupon.minPurchase}</p>
                  <p>Expires in: {coupon.expiry}</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl w-full font-semibold shadow-md hover:shadow-lg transition-all">Copy Code</button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Categories on Sale */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Categories on Sale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesOnSale.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Percent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{category.name}</h3>
                <p className="text-blue-600 font-bold mb-2 text-xl">{category.discount}</p>
                <p className="text-sm text-gray-500">{category.count} products</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Deals
