import { motion } from 'framer-motion'
import { RotateCcw, Package, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Return Policy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Overview */}
          <div className="card mb-8">
            <div className="flex items-center gap-4 mb-4">
              <RotateCcw className="w-12 h-12 text-primary" />
              <div>
                <h2 className="text-2xl font-bold">30-Day Return Policy</h2>
                <p className="text-gray-400">We want you to be completely satisfied with your purchase</p>
              </div>
            </div>
            <p className="text-gray-300">
              If you're not satisfied with your purchase, you can return most items within 30 days of delivery for a full refund or exchange. Items must be in their original condition with all tags and packaging intact.
            </p>
          </div>

          {/* Return Process */}
          <div className="card mb-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Package className="w-6 h-6 text-primary" />
              How to Return an Item
            </h3>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Initiate Return', desc: 'Log into your account and select the order you wish to return' },
                { step: 2, title: 'Print Return Label', desc: 'Download and print the prepaid return shipping label' },
                { step: 3, title: 'Package Item', desc: 'Pack the item in its original packaging with all accessories' },
                { step: 4, title: 'Ship Item', desc: 'Drop off the package at any authorized shipping location' },
                { step: 5, title: 'Receive Refund', desc: 'Once received, your refund will be processed within 5-7 business days' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Return Conditions */}
          <div className="card mb-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              Return Conditions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-400">Eligible for Return</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Items in original condition</li>
                  <li>• With all tags and packaging</li>
                  <li>• Within 30 days of delivery</li>
                  <li>• Proof of purchase required</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-400">Non-Returnable Items</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Personalized items</li>
                  <li>• Software and digital downloads</li>
                  <li>• Items marked as final sale</li>
                  <li>• Used or damaged items</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Refund Options */}
          <div className="card mb-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Refund Options
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Original Payment Method</h4>
                <p className="text-gray-400 text-sm">Refund to your original payment method within 5-7 business days</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Store Credit</h4>
                <p className="text-gray-400 text-sm">Immediate store credit for future purchases</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Exchange</h4>
                <p className="text-gray-400 text-sm">Exchange for a different size, color, or product</p>
              </div>
            </div>
          </div>

          {/* Special Cases */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Special Cases
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold mb-2">Damaged or Defective Items</h4>
                <p className="text-sm">If you receive a damaged or defective item, please contact us within 48 hours of delivery. We will provide a prepaid return label and arrange for a replacement or full refund.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Wrong Item Received</h4>
                <p className="text-sm">If you receive the wrong item, we will arrange for the correct item to be shipped to you at no additional cost. You may keep or return the wrong item.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ReturnPolicy
