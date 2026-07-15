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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 flex items-center gap-3"
        >
          <Gift className="w-10 h-10 text-primary" />
          Gift Guide
        </motion.h1>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-12 text-center"
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Find the Perfect Gift</h2>
          <p className="opacity-90">Discover amazing tech gifts for everyone on your list</p>
        </motion.div>

        {/* Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {giftCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-400">{category.items} Gifts</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Gifts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-6">Featured Gifts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGifts.map((gift, index) => (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <img src={gift.image} alt={gift.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-semibold mb-2">{gift.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">{gift.rating}</span>
                </div>
                <p className="text-xl font-bold text-primary mb-4">${gift.price}</p>
                <div className="flex gap-2">
                  <button onClick={() => handleAddToCart(gift)} className="btn-primary flex-1 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button onClick={() => handleAddToWishlist(gift)} className="btn-secondary p-2">
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
