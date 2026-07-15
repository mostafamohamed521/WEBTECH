import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingBag, Smartphone, Headphones, Camera, Gamepad2, ArrowRight, Star } from 'lucide-react'
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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-4">Welcome to WEBTECH</h1>
              <p className="text-xl mb-8 opacity-90">Discover the latest in technology</p>
              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to="/categories" className="card text-center hover:scale-105 transition-transform">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-400">{category.count} Products</p>
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
          <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className="p-2 bg-white/90 rounded-full hover:bg-primary transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{product.rating}</span>
                  <span className="text-sm text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn-primary text-sm"
                  >
                    Add to Cart
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

export default Home
