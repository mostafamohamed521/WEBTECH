import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, MessageCircle, Mail, Phone } from 'lucide-react'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'Account',
      questions: [
        { q: 'How do I create an account?', a: 'Click on the Register button in the top right corner and fill in your details. You will receive a confirmation email to activate your account.' },
        { q: 'How do I reset my password?', a: 'Click on Forgot Password on the login page and enter your email address. You will receive a link to reset your password.' },
        { q: 'Can I change my email address?', a: 'Yes, you can change your email address in your Profile settings under Account Information.' },
      ]
    },
    {
      category: 'Orders',
      questions: [
        { q: 'How do I track my order?', a: 'You can track your order using the Order Tracking page with your order number, or check your Orders page for real-time updates.' },
        { q: 'Can I cancel my order?', a: 'Orders can be cancelled within 1 hour of placing them. After that, please contact our support team.' },
        { q: 'What payment methods do you accept?', a: 'We accept credit cards, PayPal, Apple Pay, Google Pay, and bank transfers.' },
      ]
    },
    {
      category: 'Shipping',
      questions: [
        { q: 'What are your shipping options?', a: 'We offer standard shipping (5-7 days), express shipping (2-3 days), and overnight shipping.' },
        { q: 'Do you ship internationally?', a: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.' },
        { q: 'Is shipping free?', a: 'Free shipping is available on orders over $100. Standard shipping fees apply to orders below $100.' },
      ]
    },
    {
      category: 'Returns',
      questions: [
        { q: 'What is your return policy?', a: 'We offer a 30-day return policy for most items. Items must be in original condition with all tags and packaging.' },
        { q: 'How do I return an item?', a: 'Initiate a return through your Orders page, print the return label, and ship the item back to us.' },
        { q: 'How long does refund processing take?', a: 'Refunds are processed within 5-7 business days after we receive the returned item.' },
      ]
    },
  ]

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(qa =>
      qa.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      qa.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-500">Find answers to common questions</p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-6 mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field w-full pl-12"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((qa, index) => (
                  <div key={index} className="card p-6 hover:shadow-md transition-shadow">
                    <button
                      onClick={() => setOpenIndex(openIndex === `${categoryIndex}-${index}` ? null : `${categoryIndex}-${index}`)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-gray-900">{qa.q}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === `${categoryIndex}-${index}` ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openIndex === `${categoryIndex}-${index}` && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pt-4 text-gray-600 leading-relaxed"
                        >
                          {qa.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-8 mt-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Still need help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1 text-gray-900">Live Chat</h3>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1 text-gray-900">Email Us</h3>
              <p className="text-sm text-gray-500">support@webtech.com</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1 text-gray-900">Call Us</h3>
              <p className="text-sm text-gray-500">1-800-WEBTECH</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
