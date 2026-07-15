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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Search</h1>

          {/* Search Input */}
          <div className="relative mb-8">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search for products..."
              className="input-field w-full pl-12 pr-12"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Search History */}
          {!query && searchHistory.length > 0 && (
            <div className="card mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Recent Searches</h2>
                <button className="text-sm text-blue-600 hover:underline">Clear all</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(item)}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700"
                  >
                    <Clock className="w-4 h-4 text-gray-500" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div>
              <h2 className="font-semibold mb-4 text-gray-900">
                {filteredProducts.length} results for "{query}"
              </h2>
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card"
                  >
                    <div className="flex gap-4">
                      <Link to={`/products/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </Link>
                      <div className="flex-1">
                        <Link to={`/products/${product.id}`}>
                          <h3 className="font-semibold mb-1 hover:text-blue-600 transition-colors text-gray-900">{product.name}</h3>
                        </Link>
                        <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
                        <p className="text-xl font-bold text-blue-600">${product.price}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => handleAddToWishlist(product)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm transition-all"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No products found for "{query}"</p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Search
