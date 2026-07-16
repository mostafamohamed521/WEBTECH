import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Heart, ShoppingBag, Star, Plus, Minus, Truck, Shield, RotateCcw, CheckCircle, Share2, ThumbsUp, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart, addToWishlist, isInWishlist } = useStore()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('Natural Titanium')
  const [selectedStorage, setSelectedStorage] = useState('256GB')
  const [activeTab, setActiveTab] = useState('description')
  const [expandedReview, setExpandedReview] = useState(null)

  const product = {
    id: parseInt(id),
    name: 'iPhone 15 Pro Max',
    price: 1199,
    originalPrice: 1299,
    description: 'Experience the future of smartphones with the iPhone 15 Pro Max. Featuring the powerful A17 Pro chip, titanium design, and advanced camera system. The most powerful iPhone ever created.',
    rating: 4.8,
    reviews: 234,
    stock: 15,
    brand: 'Apple',
    category: 'smartphones',
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    storage: ['256GB', '512GB', '1TB'],
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
    ],
    specs: {
      'Display': '6.7" Super Retina XDR OLED, 2896 x 1290 pixels',
      'Processor': 'A17 Pro chip (6-core CPU, 6-core GPU)',
      'Storage': '256GB/512GB/1TB NVMe',
      'RAM': '8GB',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'Front Camera': '12MP TrueDepth',
      'Battery': '4422mAh with MagSafe charging',
      'OS': 'iOS 17',
      'Dimensions': '159.9 x 76.7 x 8.25 mm',
      'Weight': '221g',
      'Water Resistance': 'IP68',
    },
    features: [
      'Titanium design - lighter and stronger',
      'A17 Pro chip for console-quality gaming',
      '48MP Main camera with 5x optical zoom',
      'Action button for instant access',
      'USB-C with USB 3 speeds',
      'Always-On display',
      'Emergency SOS via satellite',
      'Crash Detection',
    ]
  }

  const reviews = [
    { id: 1, user: 'John D.', rating: 5, date: '2024-01-15', title: 'Best iPhone ever!', content: 'The titanium design feels amazing in hand. The camera improvements are significant, especially the 5x zoom. Battery life is excellent, easily lasting a full day of heavy use.', helpful: 45, verified: true },
    { id: 2, user: 'Sarah M.', rating: 4, date: '2024-01-10', title: 'Great upgrade from 14 Pro', content: 'Upgraded from iPhone 14 Pro and the difference is noticeable. The A17 Pro chip makes everything faster. Only giving 4 stars because the price is quite steep.', helpful: 32, verified: true },
    { id: 3, user: 'Mike R.', rating: 5, date: '2024-01-05', title: 'Perfect for photography', content: 'As a photographer, the camera system on this phone is incredible. The 48MP sensor captures amazing detail. Low light performance is also much improved.', helpful: 28, verified: true },
  ]

  const faqs = [
    { q: 'Is this phone unlocked?', a: 'Yes, this iPhone is factory unlocked and works with any carrier worldwide.' },
    { q: 'Does it come with a charger?', a: 'The box includes the iPhone, USB-C cable, and documentation. Charger is sold separately.' },
    { q: 'What is the return policy?', a: 'We offer a 30-day return policy for all products. The item must be in original condition.' },
    { q: 'Is international shipping available?', a: 'Yes, we ship to over 100 countries worldwide with tracking and insurance.' },
  ]

  const relatedProducts = [
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 1299, rating: 4.7, reviews: 189, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400' },
    { id: 3, name: 'Sony WH-1000XM5', price: 349, rating: 4.8, reviews: 423, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400' },
    { id: 4, name: 'PlayStation 5', price: 499, rating: 4.9, reviews: 567, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400' },
    { id: 5, name: 'MacBook Pro 16"', price: 2499, rating: 4.9, reviews: 312, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400' },
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
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/home" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="card p-6 mb-6 shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-contain rounded-xl"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`card p-2 transition-all ${selectedImage === index ? 'ring-2 ring-blue-600' : 'hover:ring-2 hover:ring-blue-300'}`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-20 object-contain rounded-lg" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">{product.brand}</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-gray-500 text-lg">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
              )}
              <span className="text-4xl font-bold text-blue-600">${product.price}</span>
              {product.originalPrice && (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <span className="font-semibold text-gray-900 text-lg mb-3 block">Color: {selectedColor}</span>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedColor === color ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300 hover:border-blue-300'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="mb-6">
              <span className="font-semibold text-gray-900 text-lg mb-3 block">Storage: {selectedStorage}</span>
              <div className="flex gap-3">
                {product.storage.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedStorage === storage ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300 hover:border-blue-300'}`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-6 mb-8">
              <span className="font-semibold text-gray-900 text-lg">Quantity:</span>
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-white rounded-lg transition-colors text-gray-700"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center text-gray-900 font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-3 hover:bg-white rounded-lg transition-colors text-gray-700"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <span className="text-gray-500 text-sm">{product.stock} in stock</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button onClick={handleAddToCart} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex-1 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all text-lg">
                <ShoppingBag className="w-6 h-6" />
                Add to Cart
              </button>
              <button onClick={handleAddToWishlist} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-4 rounded-xl transition-all">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="card p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Free Shipping</p>
              </div>
              <div className="card p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">2 Year Warranty</p>
              </div>
              <div className="card p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <RotateCcw className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">30-Day Returns</p>
              </div>
            </div>

            {/* Specifications */}
            <div className="card p-6">
              <h3 className="font-semibold mb-6 text-gray-900 text-xl">Specifications</h3>
              <div className="space-y-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 font-medium">{key}</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex gap-8 border-b border-gray-200 mb-8">
            {['description', 'features', 'reviews', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-medium transition-colors ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="prose max-w-none"
            >
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                The iPhone 15 Pro Max represents the pinnacle of smartphone technology. With its revolutionary A17 Pro chip, 
                you'll experience console-quality gaming right in your pocket. The titanium design is not only stunning but 
                also incredibly durable, making it the perfect companion for your daily adventures.
              </p>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="card p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-semibold text-gray-900">{review.user}</span>
                          {review.verified && (
                            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Verified Purchase</span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{review.content}</p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        Helpful ({review.helpful})
                      </button>
                      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="card p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Related Products */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="card group overflow-hidden hover:shadow-xl transition-all">
                <div className="relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ProductDetail
