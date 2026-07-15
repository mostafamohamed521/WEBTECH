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
            <p className="text-gray-400">Your cart is empty</p>
          </div>
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
          Checkout
        </motion.h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-12">
          {['Shipping', 'Payment', 'Review', 'Complete'].map((s, index) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-primary' : 'bg-gray-800'}`}>
                {step > index + 1 ? <CheckCircle className="w-5 h-5" /> : <span>{index + 1}</span>}
              </div>
              {(index < 3) && <div className={`w-16 h-1 ${step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-primary' : 'bg-gray-800'}`} />}
              <span className={`ml-2 ${step === index + 1 ? 'text-primary font-semibold' : 'text-gray-400'}`}>{s}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Truck className="w-6 h-6 text-primary" />
                  Shipping Information
                </h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input type="text" className="input-field w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input type="text" className="input-field w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="input-field w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <input type="text" className="input-field w-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input type="text" className="input-field w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP Code</label>
                      <input type="text" className="input-field w-full" />
                    </div>
                  </div>
                  <button onClick={() => setStep(2)} className="btn-primary w-full">
                    Continue to Payment <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border border-primary rounded-lg bg-primary/10">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" checked className="w-5 h-5" />
                      <span className="font-semibold">Credit Card</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-5 h-5" />
                      <span>PayPal</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" className="input-field w-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="input-field w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input type="text" placeholder="123" className="input-field w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="btn-secondary flex-1">Back</button>
                    <button onClick={() => setStep(3)} className="btn-primary flex-1">
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
                className="card"
              >
                <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="btn-secondary flex-1">Back</button>
                  <button onClick={handlePlaceOrder} disabled={loading} className="btn-primary flex-1">
                    {loading ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card text-center"
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Order Placed Successfully!</h2>
                <p className="text-gray-400 mb-6">Thank you for your purchase. You will receive an email confirmation shortly.</p>
                <button className="btn-primary">Continue Shopping</button>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card sticky top-24"
            >
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-800 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Secure checkout powered by Stripe</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
