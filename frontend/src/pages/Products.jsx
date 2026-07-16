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
    { id: 1, name: 'iPhone 15 Pro Max', price: 1199, category: 'smartphones', rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', featured: true, brand: 'Apple', stock: 15 },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 1299, category: 'smartphones', rating: 4.7, reviews: 189, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400', featured: true, brand: 'Samsung', stock: 23 },
    { id: 3, name: 'Google Pixel 8 Pro', price: 999, category: 'smartphones', rating: 4.6, reviews: 156, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400', featured: false, brand: 'Google', stock: 18 },
    { id: 4, name: 'OnePlus 12', price: 799, category: 'smartphones', rating: 4.5, reviews: 98, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', featured: false, brand: 'OnePlus', stock: 12 },
    { id: 5, name: 'MacBook Pro 16"', price: 2499, category: 'laptops', rating: 4.9, reviews: 312, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', featured: true, brand: 'Apple', stock: 8 },
    { id: 6, name: 'Dell XPS 15', price: 1899, category: 'laptops', rating: 4.6, reviews: 156, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400', featured: false, brand: 'Dell', stock: 14 },
    { id: 7, name: 'HP Spectre x360', price: 1599, category: 'laptops', rating: 4.5, reviews: 134, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', featured: false, brand: 'HP', stock: 19 },
    { id: 8, name: 'Lenovo ThinkPad X1', price: 1799, category: 'laptops', rating: 4.7, reviews: 178, image: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=400', featured: false, brand: 'Lenovo', stock: 11 },
    { id: 9, name: 'Sony WH-1000XM5', price: 349, category: 'headphones', rating: 4.8, reviews: 423, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400', featured: true, brand: 'Sony', stock: 45 },
    { id: 10, name: 'Bose QuietComfort Ultra', price: 429, category: 'headphones', rating: 4.7, reviews: 287, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', featured: false, brand: 'Bose', stock: 32 },
    { id: 11, name: 'AirPods Pro 2', price: 249, category: 'headphones', rating: 4.6, reviews: 567, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400', featured: false, brand: 'Apple', stock: 67 },
    { id: 12, name: 'Sennheiser Momentum 4', price: 399, category: 'headphones', rating: 4.5, reviews: 145, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400', featured: false, brand: 'Sennheiser', stock: 28 },
    { id: 13, name: 'Canon EOS R5', price: 3899, category: 'cameras', rating: 4.9, reviews: 98, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', featured: true, brand: 'Canon', stock: 5 },
    { id: 14, name: 'Sony A7 IV', price: 2499, category: 'cameras', rating: 4.8, reviews: 134, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400', featured: false, brand: 'Sony', stock: 9 },
    { id: 15, name: 'Nikon Z8', price: 3499, category: 'cameras', rating: 4.7, reviews: 87, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', featured: false, brand: 'Nikon', stock: 7 },
    { id: 16, name: 'Fujifilm X-T5', price: 1699, category: 'cameras', rating: 4.6, reviews: 112, image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400', featured: false, brand: 'Fujifilm', stock: 13 },
    { id: 17, name: 'PlayStation 5', price: 499, category: 'gaming', rating: 4.9, reviews: 567, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400', featured: true, brand: 'Sony', stock: 34 },
    { id: 18, name: 'Xbox Series X', price: 499, category: 'gaming', rating: 4.8, reviews: 432, image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400', featured: false, brand: 'Microsoft', stock: 28 },
    { id: 19, name: 'Nintendo Switch OLED', price: 349, category: 'gaming', rating: 4.7, reviews: 345, image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400', featured: false, brand: 'Nintendo', stock: 41 },
    { id: 20, name: 'Steam Deck', price: 399, category: 'gaming', rating: 4.6, reviews: 234, image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400', featured: false, brand: 'Valve', stock: 25 },
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
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">All Products</h1>
          <p className="text-gray-500 text-sm md:text-base">Browse our complete collection of premium electronics ({sortedProducts.length} products)</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-6 md:mb-8 p-4 md:p-6"
        >
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                placeholder="Search products by name, brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full pl-10 md:pl-12 text-sm md:text-base"
              />
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field flex-1 lg:flex-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                ))}
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="input-field flex-1 lg:flex-none"
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
                className="input-field flex-1 lg:flex-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          {/* Active Filters */}
          {(selectedCategory !== 'all' || priceRange !== 'all' || searchTerm) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex gap-2 mt-4 pt-4 border-t border-gray-200 flex-wrap"
            >
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                  <button onClick={() => setSelectedCategory('all')} className="hover:text-blue-800">×</button>
                </span>
              )}
              {priceRange !== 'all' && (
                <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {priceRange.replace('-', ' - ').replace('under', 'Under $').replace('over', 'Over $')}
                  <button onClick={() => setPriceRange('all')} className="hover:text-blue-800">×</button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                  "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="hover:text-blue-800">×</button>
                </span>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <div className="card group overflow-hidden hover:shadow-xl transition-all duration-500">
                <Link to={`/products/${product.id}`} className="block">
                  <div className="relative overflow-hidden rounded-xl mb-3 md:mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 md:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 flex gap-1 md:gap-2">
                      {product.featured && (
                        <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium shadow-md">
                          Featured
                        </span>
                      )}
                      {product.stock < 10 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium shadow-md">
                          Low Stock
                        </span>
                      )}
                    </div>
                    <div className="absolute top-2 md:top-3 right-2 md:right-3 flex gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button
                        onClick={(e) => { e.preventDefault(); handleAddToWishlist(product); }}
                        className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 hover:text-red-500 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="px-2">
                    <span className="text-xs text-gray-500 mb-1 block">{product.brand}</span>
                    <h3 className="font-semibold mb-2 text-gray-900 text-sm md:text-base lg:text-lg group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2 md:mb-3">
                      <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                      <span className="text-xs md:text-sm font-medium text-gray-700">{product.rating}</span>
                      <span className="text-xs md:text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">${product.price}</span>
                      <span className="text-xs md:text-sm text-gray-500 hidden sm:inline">{product.stock} in stock</span>
                    </div>
                  </div>
                </Link>
                <div className="flex gap-2 mt-3 md:mt-4 px-2 pb-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm font-medium shadow-md hover:shadow-lg transition-all flex-1"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className="p-2 md:p-2.5 border border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
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
            className="text-center py-12 md:py-16"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Filter className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-500 mb-4 text-sm md:text-base">Try adjusting your filters or search terms</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); setPriceRange('all'); }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg font-medium text-sm md:text-base"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Products
