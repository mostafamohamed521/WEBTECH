import { motion } from 'framer-motion'
import { RotateCcw, Package, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Return Policy</h1>
          <p className="text-gray-500">Our hassle-free return policy</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Overview */}
          <div className="card p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <RotateCcw className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">30-Day Return Policy</h2>
                <p className="text-gray-500">We want you to be completely satisfied with your purchase</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              If you're not satisfied with your purchase, you can return most items within 30 days of delivery for a full refund or exchange. Items must be in their original condition with all tags and packaging intact.
            </p>
          </div>

          {/* Return Process */}
          <div className="card p-6 mb-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
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
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Return Conditions */}
          <div className="card p-6 mb-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              Return Conditions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-600">Eligible for Return</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Items in original condition</li>
                  <li>• With all tags and packaging</li>
                  <li>• Within 30 days of delivery</li>
                  <li>• Proof of purchase required</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-600">Non-Returnable Items</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personalized items</li>
                  <li>• Software and digital downloads</li>
                  <li>• Items marked as final sale</li>
                  <li>• Used or damaged items</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Refund Options */}
          <div className="card p-6 mb-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              Refund Options
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded-xl">
                <h4 className="font-semibold mb-2 text-gray-900">Original Payment Method</h4>
                <p className="text-gray-500 text-sm">Refund to your original payment method within 5-7 business days</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-xl">
                <h4 className="font-semibold mb-2 text-gray-900">Store Credit</h4>
                <p className="text-gray-500 text-sm">Immediate store credit for future purchases</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-xl">
                <h4 className="font-semibold mb-2 text-gray-900">Exchange</h4>
                <p className="text-gray-500 text-sm">Exchange for a different size, color, or product</p>
              </div>
            </div>
          </div>

          {/* Special Cases */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-50 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
              </div>
              Special Cases
            </h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <h4 className="font-semibold mb-2 text-gray-900">Damaged or Defective Items</h4>
                <p className="text-sm leading-relaxed">If you receive a damaged or defective item, please contact us within 48 hours of delivery. We will provide a prepaid return label and arrange for a replacement or full refund.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-900">Wrong Item Received</h4>
                <p className="text-sm leading-relaxed">If you receive the wrong item, we will arrange for the correct item to be shipped to you at no additional cost. You may keep or return the wrong item.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ReturnPolicy
