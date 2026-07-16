import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Trash2, ArrowRight, Share2, Star, SlidersHorizontal } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, isInWishlist } = useStore()
  const [sortBy, setSortBy] = useState('date')

  const sortedWishlist = [...wishlist].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  const handleRemove = (productId, productName) => {
    removeFromWishlist(productId)
    toast.success(`${productName} removed from wishlist`)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  const handleAddAllToCart = () => {
    sortedWishlist.forEach(product => addToCart(product))
    toast.success(`${sortedWishlist.length} items added to cart`)
  }

  const handleShare = () => {
    toast.success('Wishlist link copied to clipboard')
  }

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">Save your favorite items for later</p>
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
              Continue Shopping <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">My Wishlist</h1>
              <p className="text-gray-500">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleShare}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleAddAllToCart}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add All to Cart
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sort Options */}
        {wishlist.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-4 mb-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-700">Sort by:</span>
              </div>
              <div className="flex gap-2">
                {[
                  { value: 'date', label: 'Date Added' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                  { value: 'name', label: 'Name' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`px-4 py-2 rounded-lg transition-all ${sortBy === option.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedWishlist.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <div className="card group overflow-hidden hover:shadow-xl transition-all">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Link to={`/products/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button
                    onClick={() => handleRemove(item.id, item.name)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <Link to={`/products/${item.id}`}>
                  <h3 className="font-semibold mb-2 text-gray-900 text-lg group-hover:text-blue-600 transition-colors line-clamp-2">{item.name}</h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{item.rating || 4.5}</span>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-4">${item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl w-full flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist
