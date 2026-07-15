import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Gift, Truck, Shield, Tag } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore()
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [giftWrap, setGiftWrap] = useState(false)

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return
    updateQuantity(productId, newQuantity)
  }

  const handleRemove = (productId, productName) => {
    removeFromCart(productId)
    toast.success(`${productName} removed from cart`)
  }

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === 'save20') {
      setPromoApplied(true)
      toast.success('Promo code applied! 20% off')
    } else {
      toast.error('Invalid promo code')
    }
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = promoApplied ? subtotal * 0.2 : 0
  const giftWrapCost = giftWrap ? cart.length * 5 : 0
  const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 10) : 0
  const total = subtotal - discount + giftWrapCost + shipping

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet</p>
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
              Continue Shopping <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-500">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card p-6 hover:shadow-lg transition-all"
              >
                <div className="flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-xl shadow-sm"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-gray-900 text-lg">{item.name}</h3>
                    <p className="text-blue-600 font-bold mb-4 text-xl">${item.price}</p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-white rounded-md transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-white rounded-md transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id, item.name)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
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
              transition={{ delay: 0.2 }}
              className="card p-6 sticky top-28"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>
              
              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code (try: SAVE20)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="input-field flex-1"
                  />
                  <button
                    onClick={handlePromoCode}
                    className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-green-600 text-sm font-medium flex items-center gap-1"
                  >
                    <Tag className="w-4 h-4" />
                    20% discount applied!
                  </motion.div>
                )}
              </div>

              {/* Gift Wrap */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={giftWrap}
                    onChange={(e) => setGiftWrap(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                  <Gift className="w-5 h-5 text-blue-600" />
                  <div>
                    <span className="font-medium text-gray-900">Gift Wrap</span>
                    <p className="text-sm text-gray-500">+$5 per item</p>
                  </div>
                </label>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-lg text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">-${discount.toFixed(2)}</span>
                  </div>
                )}
                {giftWrapCost > 0 && (
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-500">Gift Wrap</span>
                    <span className="text-gray-900 font-medium">${giftWrapCost.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-gray-900 font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-xl">
                  <span className="text-gray-900">Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-green-600" />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Secure checkout guaranteed</span>
                </div>
              </div>

              <Link to="/checkout" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl w-full flex items-center justify-center gap-2 mb-4 font-semibold shadow-lg hover:shadow-xl transition-all">
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={clearCart}
                className="w-full text-red-600 hover:text-red-700 font-medium py-2 transition-colors"
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
