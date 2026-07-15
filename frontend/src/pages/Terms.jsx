import { motion } from 'framer-motion'
import { FileText, Shield, AlertCircle, Scale } from 'lucide-react'

const Terms = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-500">Last updated: January 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-50 rounded-xl">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              Agreement to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using WEBTECH, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              Account Registration
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To access certain features of our website, you may be required to register for an account. You agree to provide accurate, current, and complete information during registration.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>• You are responsible for all activities that occur under your account</li>
              <li>• You agree to notify us immediately of any unauthorized use of your account</li>
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-50 rounded-xl">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of our website is also subject to our Privacy Policy. Please review our Privacy Policy, which also governs our website and informs users of our data collection practices.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Product Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We strive to provide accurate product descriptions and images. However, we do not warrant that descriptions are error-free. Colors may vary slightly due to monitor settings.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Prices are subject to change without notice. We reserve the right to limit quantities and to discontinue products at any time.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Pricing & Payment</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              All prices are listed in USD unless otherwise specified. We accept various payment methods including credit cards, PayPal, and other secure payment options.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By providing payment information, you represent and warrant that you are authorized to use the payment method and that all payment information is accurate.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Shipping & Delivery</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Shipping times are estimates and are not guaranteed. We are not responsible for delays caused by shipping carriers, customs, or other factors beyond our control.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Risk of loss transfers to you upon delivery to the shipping carrier. Please inspect your delivery upon receipt.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Returns & Refunds</h2>
            <p className="text-gray-600 leading-relaxed">
              Please refer to our Return Policy for detailed information about returns, exchanges, and refunds. Our Return Policy is incorporated into these Terms by reference.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              Intellectual Property
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of WEBTECH or its content suppliers and is protected by copyright laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You may not use, reproduce, modify, or distribute any content from our website without our prior written consent.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, WEBTECH shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which WEBTECH is registered, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. Your continued use of our website after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Terms
