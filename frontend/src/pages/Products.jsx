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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          All Products
        </motion.h1>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-8"
        >
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[200px]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card group"
            >
              <Link to={`/products/${product.id}`} className="block">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.featured && (
                    <span className="absolute top-2 left-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{product.rating}</span>
                  <span className="text-sm text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                </div>
              </Link>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn-primary flex-1 text-sm"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className="p-2 border border-gray-700 rounded-lg hover:border-primary transition-colors"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No products found matching your criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Products
