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
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 md:py-24 px-4"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="inline-block mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-medium"
              >
                Free Shipping on Orders Over $100
              </motion.div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
                Discover the Future of Technology
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Premium electronics, cutting-edge gadgets, and unbeatable prices. Shop the latest innovations from world's top brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Link to="/products" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                    <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                    Shop Now
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Link to="/deals" className="bg-blue-500/20 backdrop-blur-sm text-white hover:bg-blue-500/30 border border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg inline-flex items-center justify-center gap-2 transition-all">
                    View Deals <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="py-8 md:py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { number: '50K+', label: 'Products' },
              { number: '10M+', label: 'Customers' },
              { number: '100+', label: 'Countries' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 md:mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Shop by Category</h2>
              <p className="text-gray-500 text-sm md:text-base">Browse our wide selection of categories</p>
            </div>
            <Link to="/categories" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 text-sm md:text-base">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link to="/categories" className="group">
                  <div className={`relative overflow-hidden rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 bg-gradient-to-br ${category.color} shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                    <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                    <category.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-white mb-2 md:mb-4 relative z-10" />
                    <h3 className="font-semibold text-white text-sm md:text-base lg:text-lg mb-1 relative z-10">{category.name}</h3>
                    <p className="text-white/80 text-xs md:text-sm relative z-10">{category.count} Products</p>
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
          transition={{ delay: 0.7 }}
          className="mb-12 md:mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Featured Products</h2>
              <p className="text-gray-500 text-sm md:text-base">Handpicked products just for you</p>
            </div>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 text-sm md:text-base">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="card group overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden rounded-xl mb-3 md:mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 md:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button
                        onClick={() => handleAddToWishlist(product)}
                        className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 hover:text-red-500 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base lg:text-lg group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2 md:mb-3">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                    <span className="text-xs md:text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-xs md:text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">${product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-12 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Why Choose Us</h2>
            <p className="text-gray-500 text-sm md:text-base">We provide the best shopping experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: ShoppingBag, title: 'Fast Shipping', desc: 'Free shipping on orders over $100 with express delivery available' },
              { icon: Heart, title: 'Quality Guarantee', desc: 'All products are verified and come with manufacturer warranty' },
              { icon: Star, title: '24/7 Support', desc: 'Our customer support team is available around the clock' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="card p-4 md:p-6 lg:p-8 text-center hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-6">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-4 md:mb-8 max-w-xl mx-auto text-sm md:text-base">Get exclusive deals, new arrivals, and insider news delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2.5 md:px-6 md:py-4 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-sm md:text-base" />
            <button className="bg-white text-blue-600 px-6 py-2.5 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-all text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Home
