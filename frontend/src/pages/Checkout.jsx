import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Truck, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Checkout = () => {
  const { cart, clearCart } = useStore()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handlePlaceOrder = () => {
    setLoading(true)
    setTimeout(() => {
      clearCart()
      toast.success('Order placed successfully!')
      setLoading(false)
      setStep(4)
    }, 2000)
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-500">Complete your order in a few simple steps</p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between mb-12 overflow-x-auto"
        >
          {['Shipping', 'Payment', 'Review', 'Complete'].map((s, index) => (
            <div key={s} className="flex items-center flex-shrink-0">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-blue-600' : 'bg-gray-300'} shadow-md`}>
                {step > index + 1 ? <CheckCircle className="w-6 h-6 text-white" /> : <span className="text-white font-semibold">{index + 1}</span>}
              </div>
              {(index < 3) && <div className={`w-20 h-1 mx-2 ${step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-blue-600' : 'bg-gray-300'}`} />}
              <span className={`ml-2 font-medium ${step === index + 1 ? 'text-blue-600' : 'text-gray-500'}`}>{s}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  Shipping Information
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">First Name</label>
                      <input type="text" className="input-field w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
                      <input type="text" className="input-field w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                    <input type="email" className="input-field w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Street Address</label>
                    <input type="text" className="input-field w-full" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">City</label>
                      <input type="text" className="input-field w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">ZIP Code</label>
                      <input type="text" className="input-field w-full" />
                    </div>
                  </div>
                  <button onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl w-full flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all">
                    Continue to Payment <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-blue-600 rounded-xl bg-blue-50">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" checked className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">Credit Card</span>
                    </div>
                  </div>
                  <div className="p-4 border-2 border-gray-300 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-5 h-5" />
                      <span className="text-gray-700 font-medium">PayPal</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" className="input-field w-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="input-field w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">CVV</label>
                        <input type="text" placeholder="123" className="input-field w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button onClick={() => setStep(1)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl flex-1 font-medium transition-all">Back</button>
                    <button onClick={() => setStep(3)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex-1 font-semibold shadow-lg hover:shadow-xl transition-all">
                      Review Order <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Review Your Order</h2>
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-gray-900 text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl flex-1 font-medium transition-all">Back</button>
                  <button onClick={handlePlaceOrder} disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex-1 font-semibold shadow-lg hover:shadow-xl transition-all">
                    {loading ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-12 text-center"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Order Placed Successfully!</h2>
                <p className="text-gray-500 mb-8 text-lg">Thank you for your purchase. You will receive an email confirmation shortly.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">Continue Shopping</button>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6 sticky top-28 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-gray-900 font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-500">Tax</span>
                  <span className="text-gray-900 font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-2xl">
                  <span className="text-gray-900">Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 bg-blue-50 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Secure checkout powered by Stripe</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
