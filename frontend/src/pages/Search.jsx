import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search as SearchIcon, Clock, X, TrendingUp, Filter, SlidersHorizontal, Star } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Search = () => {
  const [query, setQuery] = useState('')
  const [searchHistory, setSearchHistory] = useState(['iPhone 15', 'MacBook Pro', 'Sony WH-1000XM5', 'PlayStation 5', 'Samsung Galaxy'])
  const [trendingSearches, setTrendingSearches] = useState(['iPhone 15 Pro Max', 'MacBook Pro 16', 'Sony headphones', 'Gaming laptops', 'Wireless earbuds'])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('relevance')
  const { addToCart, addToWishlist, isInWishlist } = useStore()

  const products = [
    { id: 1, name: 'iPhone 15 Pro Max', price: 1199, category: 'smartphones', rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', brand: 'Apple' },
    { id: 2, name: 'MacBook Pro 16"', price: 2499, category: 'laptops', rating: 4.9, reviews: 312, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', brand: 'Apple' },
    { id: 3, name: 'Sony WH-1000XM5', price: 349, category: 'headphones', rating: 4.8, reviews: 423, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400', brand: 'Sony' },
    { id: 4, name: 'PlayStation 5', price: 499, category: 'gaming', rating: 4.9, reviews: 567, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400', brand: 'Sony' },
    { id: 5, name: 'Samsung Galaxy S24 Ultra', price: 1299, category: 'smartphones', rating: 4.7, reviews: 189, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400', brand: 'Samsung' },
    { id: 6, name: 'Dell XPS 15', price: 1899, category: 'laptops', rating: 4.6, reviews: 156, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400', brand: 'Dell' },
    { id: 7, name: 'AirPods Pro 2', price: 249, category: 'headphones', rating: 4.6, reviews: 567, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400', brand: 'Apple' },
    { id: 8, name: 'Canon EOS R5', price: 3899, category: 'cameras', rating: 4.9, reviews: 98, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', brand: 'Canon' },
  ]

  const categories = ['all', 'smartphones', 'laptops', 'headphones', 'gaming', 'cameras']

  const filteredProducts = products.filter(p => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) || 
                         p.brand.toLowerCase().includes(query.toLowerCase()) ||
                         p.category.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
    return matchesQuery && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'relevance') return 0
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

  const handleSearch = () => {
    if (query && !searchHistory.includes(query)) {
      setSearchHistory([query, ...searchHistory.slice(0, 4)])
    }
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-2 text-center text-gray-900">Search</h1>
          <p className="text-gray-500 text-center mb-8">Find your favorite products from our extensive collection</p>

          {/* Search Input */}
          <div className="relative mb-8">
            <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search for products, brands, or categories..."
              className="input-field w-full pl-14 pr-14 py-4 text-lg"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Trending Searches */}
          {!query && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6 mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                <h2 className="font-semibold text-gray-900 text-lg">Trending Searches</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {trendingSearches.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(item)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 rounded-xl transition-colors text-gray-700 font-medium border border-orange-200"
                  >
                    <span className="text-orange-500 font-bold">{index + 1}</span>
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Search History */}
          {!query && searchHistory.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <h2 className="font-semibold text-gray-900 text-lg">Recent Searches</h2>
                </div>
                <button 
                  onClick={() => setSearchHistory([])}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {searchHistory.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(item)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors text-gray-700 font-medium"
                  >
                    <Clock className="w-4 h-4 text-gray-500" />
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Search Results */}
          {query && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Filters */}
              <div className="card p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-gray-500" />
                    <span className="font-medium text-gray-700">Filters:</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg transition-all ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                  <div className="ml-auto">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="input-field"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>
                </div>
              </div>

              <h2 className="font-semibold mb-6 text-gray-900 text-lg">
                {sortedProducts.length} {sortedProducts.length === 1 ? 'result' : 'results'} for "{query}"
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card group overflow-hidden hover:shadow-xl transition-all"
                  >
                    <Link to={`/products/${product.id}`} className="block">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-gray-500 mb-1 block">{product.brand}</span>
                        <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h3>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                        </div>
                        <p className="text-xl font-bold text-blue-600">${product.price}</p>
                      </div>
                    </Link>
                    <div className="px-4 pb-4 flex gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex-1 transition-all"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleAddToWishlist(product)}
                        className="p-2 border border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Star className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SearchIcon className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search terms or filters</p>
                  <button
                    onClick={() => { setQuery(''); setSelectedCategory('all'); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Search
