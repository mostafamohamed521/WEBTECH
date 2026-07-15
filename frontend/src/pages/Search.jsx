import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search as SearchIcon, Clock, X } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Search = () => {
  const [query, setQuery] = useState('')
  const [searchHistory, setSearchHistory] = useState(['iPhone', 'MacBook', 'Sony headphones'])
  const { addToCart, addToWishlist } = useStore()

  const products = [
    { id: 1, name: 'iPhone 15 Pro Max', price: 1199, category: 'smartphones', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400' },
    { id: 2, name: 'MacBook Pro 16"', price: 2499, category: 'laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400' },
    { id: 3, name: 'Sony WH-1000XM5', price: 349, category: 'headphones', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400' },
  ]

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  const handleAddToWishlist = (product) => {
    addToWishlist(product)
    toast.success(`${product.name} added to wishlist`)
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
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-2 text-center text-gray-900">Search</h1>
          <p className="text-gray-500 text-center mb-8">Find your favorite products</p>

          {/* Search Input */}
          <div className="relative mb-8">
            <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search for products..."
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

          {/* Search History */}
          {!query && searchHistory.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900 text-lg">Recent Searches</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Clear all</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {searchHistory.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(item)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors text-gray-700 font-medium"
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
              <h2 className="font-semibold mb-6 text-gray-900 text-lg">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} for "{query}"
              </h2>
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-6">
                      <Link to={`/products/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-28 h-28 object-cover rounded-xl shadow-sm"
                        />
                      </Link>
                      <div className="flex-1">
                        <Link to={`/products/${product.id}`}>
                          <h3 className="font-semibold mb-2 hover:text-blue-600 transition-colors text-gray-900 text-lg">{product.name}</h3>
                        </Link>
                        <p className="text-sm text-gray-500 mb-3 capitalize">{product.category}</p>
                        <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => handleAddToWishlist(product)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SearchIcon className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                  <p className="text-gray-500">Try adjusting your search terms</p>
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
