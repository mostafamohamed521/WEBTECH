import { motion } from 'framer-motion'
import { Gift, Sparkles, Heart, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Gifts = () => {
  const { addToCart, addToWishlist } = useStore()

  const giftCategories = [
    { name: 'Tech Gifts', icon: 'Smartphone', items: 45, color: 'from-blue-500 to-cyan-500' },
    { name: 'Gaming', icon: 'Gamepad2', items: 32, color: 'from-purple-500 to-pink-500' },
    { name: 'Audio', icon: 'Headphones', items: 28, color: 'from-green-500 to-emerald-500' },
    { name: 'Accessories', icon: 'Monitor', items: 55, color: 'from-orange-500 to-red-500' },
  ]

  const featuredGifts = [
    { id: 1, name: 'iPhone 15 Pro Max', price: 1199, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', rating: 4.8 },
    { id: 2, name: 'Sony WH-1000XM5', price: 349, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400', rating: 4.8 },
    { id: 3, name: 'PlayStation 5', price: 499, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400', rating: 4.9 },
  ]

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  const handleAddToWishlist = (product) => {
    addToWishlist(product)
    toast.success(`${product.name} added to wishlist`)
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
              <Gift className="w-10 h-10 text-blue-600" />
            </div>
            Gift Guide
          </h1>
          <p className="text-gray-500">Find the perfect tech gift for everyone</p>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 mb-12 text-center shadow-lg"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-white">Find the Perfect Gift</h2>
          <p className="text-white/90">Discover amazing tech gifts for everyone on your list</p>
        </motion.div>

        {/* Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {giftCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md`}>
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.items} Gifts</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Gifts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Gifts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGifts.map((gift, index) => (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg transition-all"
              >
                <img src={gift.image} alt={gift.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="font-semibold mb-2 text-gray-900">{gift.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">{gift.rating}</span>
                </div>
                <p className="text-xl font-bold text-blue-600 mb-4">${gift.price}</p>
                <div className="flex gap-2">
                  <button onClick={() => handleAddToCart(gift)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex-1 flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg transition-all">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button onClick={() => handleAddToWishlist(gift)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Gifts
