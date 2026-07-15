import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Heart, ShoppingBag, Star, Plus, Minus, Truck, Shield, RotateCcw, CheckCircle } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart, addToWishlist, isInWishlist } = useStore()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = {
    id: parseInt(id),
    name: 'iPhone 15 Pro Max',
    price: 1199,
    description: 'Experience the future of smartphones with the iPhone 15 Pro Max. Featuring the powerful A17 Pro chip, titanium design, and advanced camera system.',
    rating: 4.8,
    reviews: 234,
    stock: 15,
    brand: 'Apple',
    category: 'smartphones',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800',
    ],
    specs: {
      'Display': '6.7" Super Retina XDR OLED',
      'Processor': 'A17 Pro chip',
      'Storage': '256GB',
      'RAM': '8GB',
      'Camera': '48MP Main + 12MP Ultra Wide',
      'Battery': '4422mAh',
      'OS': 'iOS 17',
    }
  }

  const relatedProducts = [
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 1299, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400' },
    { id: 3, name: 'Sony WH-1000XM5', price: 349, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400' },
    { id: 4, name: 'PlayStation 5', price: 499, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400' },
  ]

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    toast.success(`${product.name} added to cart`)
  }

  const handleAddToWishlist = () => {
    if (!isInWishlist(product.id)) {
      addToWishlist(product)
      toast.success(`${product.name} added to wishlist`)
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/home" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="card mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`card ${selectedImage === index ? 'border-primary' : ''}`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-24 object-contain" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                ))}
              </div>
              <span className="text-gray-400">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
            <p className="text-gray-300 mb-6">{product.description}</p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-700 rounded-lg hover:border-primary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-2 border border-gray-700 rounded-lg hover:border-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-gray-400 text-sm">({product.stock} available)</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button onClick={handleAddToCart} className="btn-primary flex-1 flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button onClick={handleAddToWishlist} className="btn-secondary p-3">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="card text-center">
                <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm">Free Shipping</p>
              </div>
              <div className="card text-center">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm">2 Year Warranty</p>
              </div>
              <div className="card text-center">
                <RotateCcw className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm">30-Day Returns</p>
              </div>
            </div>

            {/* Specifications */}
            <div className="card">
              <h3 className="font-semibold mb-4">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400">{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="card hover:scale-105 transition-transform">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-xl font-bold text-primary">${product.price}</p>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ProductDetail
