import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return
    updateQuantity(productId, newQuantity)
  }

  const handleRemove = (productId, productName) => {
    removeFromCart(productId)
    toast.success(`${productName} removed from cart`)
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 10) : 0
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Your cart is empty</h2>
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2 transition-all">
              Continue Shopping <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-gray-900">{item.name}</h3>
                    <p className="text-blue-600 font-bold mb-4">${item.price}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-1 border border-gray-300 rounded hover:border-blue-600 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-1 border border-gray-300 rounded hover:border-blue-600 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id, item.name)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card sticky top-24"
            >
              <h2 className="text-xl font-bold mb-6 text-gray-900">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-gray-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                  <span className="text-gray-900">Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
              <Link to="/checkout" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full flex items-center justify-center gap-2 mb-4 transition-all">
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={clearCart}
                className="w-full text-red-600 hover:text-red-700 transition-colors"
              >
                Clear Cart
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
