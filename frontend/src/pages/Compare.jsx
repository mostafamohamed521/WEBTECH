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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Compare Products
        </motion.h1>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4">Feature</th>
                {products.map(product => (
                  <th key={product.id} className="p-4 min-w-[250px]">
                    <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto rounded-lg mb-4" />
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-primary font-bold text-xl">${product.price}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(products[0].specs).map((spec, index) => (
                <tr key={spec} className={index % 2 === 0 ? 'bg-gray-800/50' : ''}>
                  <td className="p-4 font-semibold">{spec}</td>
                  {products.map(product => (
                    <td key={product.id} className="p-4 text-center">{product.specs[spec]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex gap-4 mt-8">
          {products.map(product => (
            <div key={product.id} className="flex-1 flex gap-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToWishlist(product)}
                className="btn-secondary p-2"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Compare
