import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Tag, Percent, ArrowRight, Flame, Gift, Sparkles, TrendingUp } from 'lucide-react'

const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 23, minutes: 59, seconds: 59 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const flashSales = [
    { id: 1, name: 'iPhone 15 Pro Max', originalPrice: 1199, salePrice: 999, discount: 17, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', sold: 85, total: 100 },
    { id: 2, name: 'MacBook Pro 16"', originalPrice: 2499, salePrice: 2199, discount: 12, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', sold: 62, total: 80 },
    { id: 3, name: 'Sony WH-1000XM5', originalPrice: 349, salePrice: 279, discount: 20, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400', sold: 145, total: 200 },
    { id: 4, name: 'PlayStation 5', originalPrice: 499, salePrice: 449, discount: 10, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400', sold: 78, total: 150 },
  ]

  const dailyDeals = [
    { id: 5, name: 'Samsung Galaxy S24 Ultra', originalPrice: 1299, salePrice: 1099, discount: 15, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400', endsIn: '5h 32m' },
    { id: 6, name: 'Dell XPS 15', originalPrice: 1899, salePrice: 1599, discount: 16, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400', endsIn: '8h 15m' },
    { id: 7, name: 'Canon EOS R5', originalPrice: 3899, salePrice: 3499, discount: 10, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', endsIn: '12h 45m' },
    { id: 8, name: 'Nintendo Switch OLED', originalPrice: 349, salePrice: 299, discount: 14, image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400', endsIn: '3h 20m' },
  ]

  const coupons = [
    { code: 'FLASH30', discount: '30% OFF', minPurchase: 150, expiry: '2 days', description: 'Flash sale exclusive' },
    { code: 'SAVE100', discount: '$100 OFF', minPurchase: 500, expiry: '5 days', description: 'High-value items' },
    { code: 'FREESHIP', discount: 'FREE SHIPPING', minPurchase: 75, expiry: '7 days', description: 'No minimum required' },
    { code: 'BUNDLE20', discount: '20% OFF', minPurchase: 200, expiry: '3 days', description: 'Bundle deals only' },
    { code: 'NEWUSER15', discount: '15% OFF', minPurchase: 50, expiry: '14 days', description: 'First purchase only' },
    { code: 'WEEKEND25', discount: '25% OFF', minPurchase: 100, expiry: '2 days', description: 'Weekend special' },
  ]

  const categoriesOnSale = [
    { name: 'Smartphones', discount: 'Up to 30% OFF', count: 45, icon: '📱' },
    { name: 'Laptops', discount: 'Up to 25% OFF', count: 32, icon: '💻' },
    { name: 'Headphones', discount: 'Up to 40% OFF', count: 35, icon: '🎧' },
    { name: 'Gaming', discount: 'Up to 35% OFF', count: 22, icon: '🎮' },
    { name: 'Cameras', discount: 'Up to 20% OFF', count: 18, icon: '📷' },
    { name: 'Wearables', discount: 'Up to 25% OFF', count: 25, icon: '⌚' },
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
          <p className="text-gray-500">Save big on your favorite products with exclusive offers</p>
        </motion.div>

        {/* Flash Sale Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-2xl p-8 mb-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <Flame className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-white">Flash Sale!</h2>
                <p className="text-white/90">Limited time offers on selected products</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
              <Clock className="w-8 h-8 text-white" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {String(timeLeft.days).padStart(2, '0')}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
                </div>
                <p className="text-white/80 text-sm">Time Remaining</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flash Sales */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500" />
              Flash Sale Products
            </h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSales.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="card group overflow-hidden hover:shadow-2xl transition-all">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      -{product.discount}%
                    </div>
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 text-gray-900 text-lg line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-blue-600">${product.salePrice}</span>
                      <span className="text-gray-400 line-through text-lg">${product.originalPrice}</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                        <span>Sold: {product.sold}/{product.total}</span>
                        <span>{Math.round((product.sold / product.total) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full transition-all" style={{ width: `${(product.sold / product.total) * 100}%` }} />
                      </div>
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

        {/* Daily Deals */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              Daily Deals
            </h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyDeals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="card group overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      -{product.discount}%
                    </div>
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 text-gray-900 text-lg line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-blue-600">${product.salePrice}</span>
                      <span className="text-gray-400 line-through text-lg">${product.originalPrice}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-orange-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>Ends in {product.endsIn}</span>
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
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Tag className="w-6 h-6 text-green-600" />
              Active Coupons
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coupons.map((coupon, index) => (
              <motion.div
                key={coupon.code}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="card border-2 border-dashed border-blue-600/50 p-6 hover:border-blue-600 hover:shadow-lg transition-all"
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
                <p className="text-sm text-gray-600 mb-4">{coupon.description}</p>
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
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              Categories on Sale
            </h2>
            <Link to="/categories" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {categoriesOnSale.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="card p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
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
