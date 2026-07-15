import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingBag, Smartphone, Laptop, Headphones, Camera, Gamepad2, ArrowRight, Star, Heart } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Home = () => {
  const { addToCart, addToWishlist, isInWishlist } = useStore()

  const categories = [
    { icon: Smartphone, name: 'Smartphones', count: 45, color: 'from-blue-500 to-cyan-500' },
    { icon: Laptop, name: 'Laptops', count: 32, color: 'from-purple-500 to-pink-500' },
    { icon: Headphones, name: 'Headphones', count: 28, color: 'from-green-500 to-emerald-500' },
    { icon: Camera, name: 'Cameras', count: 15, color: 'from-orange-500 to-red-500' },
    { icon: Gamepad2, name: 'Gaming', count: 22, color: 'from-indigo-500 to-purple-500' },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      rating: 4.8,
      reviews: 234,
    },
    {
      id: 2,
      name: 'MacBook Pro 16"',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      rating: 4.9,
      reviews: 189,
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      price: 349,
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
      rating: 4.8,
      reviews: 312,
    },
    {
      id: 4,
      name: 'PlayStation 5',
      price: 499,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400',
      rating: 4.9,
      reviews: 456,
    },
  ]

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  const handleAddToWishlist = (product) => {
    if (!isInWishlist(product.id)) {
      addToWishlist(product)
      toast.success(`${product.name} added to wishlist`)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 px-6"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Discover the Future of Technology
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Premium electronics, cutting-edge gadgets, and unbeatable prices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                  <ShoppingBag className="w-5 h-5" />
                  Shop Now
                </Link>
                <Link to="/deals" className="bg-blue-500/20 backdrop-blur-sm text-white hover:bg-blue-500/30 border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all">
                  View Deals <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-6 py-12">
        {/* Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
            <Link to="/categories" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to="/categories" className="group">
                  <div className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${category.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <category.icon className="w-12 h-12 text-white mb-4 relative z-10" />
                    <h3 className="font-semibold text-white text-lg mb-1 relative z-10">{category.name}</h3>
                    <p className="text-white/80 text-sm relative z-10">{category.count} Products</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Products */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card group overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => handleAddToWishlist(product)}
                        className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 hover:text-red-500 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Home
