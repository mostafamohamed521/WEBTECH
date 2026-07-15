import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, X } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Compare = () => {
  const { addToCart, addToWishlist } = useStore()

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      brand: 'Apple',
      rating: 4.8,
      specs: {
        'Display': '6.7" OLED',
        'Processor': 'A17 Pro',
        'Storage': '256GB',
        'Camera': '48MP',
        'Battery': '4422mAh',
      }
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
      brand: 'Samsung',
      rating: 4.7,
      specs: {
        'Display': '6.8" AMOLED',
        'Processor': 'Snapdragon 8 Gen 3',
        'Storage': '256GB',
        'Camera': '200MP',
        'Battery': '5000mAh',
      }
    },
  ]

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  const handleAddToWishlist = (product) => {
    addToWishlist(product)
    toast.success(`${product.name} added to wishlist`)
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Compare Products</h1>
          <p className="text-gray-500">Compare features and specifications side by side</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-6 overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-6 text-gray-900 font-semibold text-lg border-b-2 border-gray-200">Feature</th>
                {products.map(product => (
                  <th key={product.id} className="p-6 min-w-[280px] border-b-2 border-gray-200">
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mx-auto rounded-xl shadow-sm mb-4" />
                      <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
                      <p className="text-blue-600 font-bold text-2xl">${product.price}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(products[0].specs).map((spec, index) => (
                <tr key={spec} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-6 font-semibold text-gray-900 border-b border-gray-100">{spec}</td>
                  {products.map(product => (
                    <td key={product.id} className="p-6 text-center text-gray-700 border-b border-gray-100 font-medium">{product.specs[spec]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 mt-8"
        >
          {products.map(product => (
            <div key={product.id} className="flex-1 flex gap-3">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex-1 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToWishlist(product)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-xl transition-all"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Compare
