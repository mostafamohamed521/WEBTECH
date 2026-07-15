import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Filter, Heart, Star, SlidersHorizontal } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Products = () => {
  const { addToCart, addToWishlist, isInWishlist } = useStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['all', 'smartphones', 'laptops', 'headphones', 'cameras', 'gaming']

  const products = [
    { id: 1, name: 'iPhone 15 Pro Max', price: 1199, category: 'smartphones', rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', featured: true },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 1299, category: 'smartphones', rating: 4.7, reviews: 189, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400', featured: true },
    { id: 3, name: 'MacBook Pro 16"', price: 2499, category: 'laptops', rating: 4.9, reviews: 312, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', featured: true },
    { id: 4, name: 'Dell XPS 15', price: 1899, category: 'laptops', rating: 4.6, reviews: 156, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400', featured: false },
    { id: 5, name: 'Sony WH-1000XM5', price: 349, category: 'headphones', rating: 4.8, reviews: 423, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400', featured: true },
    { id: 6, name: 'Bose QuietComfort Ultra', price: 429, category: 'headphones', rating: 4.7, reviews: 287, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', featured: false },
    { id: 7, name: 'Canon EOS R5', price: 3899, category: 'cameras', rating: 4.9, reviews: 98, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', featured: true },
    { id: 8, name: 'Sony A7 IV', price: 2499, category: 'cameras', rating: 4.8, reviews: 134, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400', featured: false },
    { id: 9, name: 'PlayStation 5', price: 499, category: 'gaming', rating: 4.9, reviews: 567, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400', featured: true },
    { id: 10, name: 'Xbox Series X', price: 499, category: 'gaming', rating: 4.8, reviews: 432, image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400', featured: false },
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under-500' && product.price < 500) ||
      (priceRange === '500-1000' && product.price >= 500 && product.price < 1000) ||
      (priceRange === '1000-2000' && product.price >= 1000 && product.price < 2000) ||
      (priceRange === 'over-2000' && product.price >= 2000)
    return matchesSearch && matchesCategory && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'featured') return b.featured - a.featured
    return 0
  })

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
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-500">Browse our complete collection of premium electronics</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-8 p-6"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full pl-12"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="input-field"
            >
              <option value="all">All Prices</option>
              <option value="under-500">Under $500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000-2000">$1000 - $2000</option>
              <option value="over-2000">Over $2000</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="card group overflow-hidden">
                <Link to={`/products/${product.id}`} className="block">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {product.featured && (
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 text-lg group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                  </div>
                </Link>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all flex-1"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className="p-2.5 border border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {sortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Products
