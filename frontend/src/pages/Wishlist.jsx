import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, isInWishlist } = useStore()

  const handleRemove = (productId, productName) => {
    removeFromWishlist(productId)
    toast.success(`${productName} removed from wishlist`)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <Heart className="w-24 h-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Your wishlist is empty</h2>
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2 transition-all">
              Continue Shopping <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          My Wishlist
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => handleRemove(item.id, item.name)}
                  className="absolute top-2 right-2 p-2 bg-white/90 rounded-full hover:bg-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{item.name}</h3>
              <p className="text-xl font-bold text-blue-600 mb-4">${item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist
