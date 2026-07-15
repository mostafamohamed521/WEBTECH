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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Deals & Discounts
        </motion.h1>

        {/* Flash Sale Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-accent to-red-600 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Flash Sale!</h2>
              <p className="opacity-90">Limited time offers on selected products</p>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8" />
              <div className="text-2xl font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flash Sales */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Flash Sale Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flashSales.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{product.discount}%
                </div>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">${product.salePrice}</span>
                  <span className="text-gray-400 line-through">${product.originalPrice}</span>
                </div>
                <Link to={`/products/${product.id}`} className="btn-primary w-full flex items-center justify-center gap-2">
                  View Deal <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Active Coupons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Active Coupons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coupons.map((coupon, index) => (
              <motion.div
                key={coupon.code}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card border-2 border-dashed border-primary/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-primary">{coupon.code}</p>
                    <p className="text-sm text-gray-400">{coupon.discount}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <p>Min purchase: ${coupon.minPurchase}</p>
                  <p>Expires in: {coupon.expiry}</p>
                </div>
                <button className="btn-primary w-full">Copy Code</button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Categories on Sale */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-6">Categories on Sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoriesOnSale.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform cursor-pointer"
              >
                <Percent className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-primary font-bold mb-2">{category.discount}</p>
                <p className="text-sm text-gray-400">{category.count} products</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Deals
