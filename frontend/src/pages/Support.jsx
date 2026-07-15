import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, BookOpen, Video, ArrowRight, HeadphonesIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Support = () => {
  const supportOptions = [
    { icon: MessageCircle, title: 'Live Chat', desc: 'Chat with our support team 24/7', action: 'Start Chat' },
    { icon: Phone, title: 'Phone Support', desc: 'Call us at 1-800-WEBTECH', action: 'Call Now' },
    { icon: Mail, title: 'Email Support', desc: 'support@webtech.com', action: 'Send Email' },
  ]

  const popularTopics = [
    { title: 'Order Status', link: '/order-tracking' },
    { title: 'Returns & Refunds', link: '/return-policy' },
    { title: 'Payment Issues', link: '/faq' },
    { title: 'Account Settings', link: '/profile' },
  ]

  const quickLinks = [
    { title: 'Track Order', link: '/order-tracking', icon: 'Package' },
    { title: 'My Orders', link: '/orders', icon: 'ShoppingBag' },
    { title: 'My Account', link: '/profile', icon: 'User' },
    { title: 'FAQ', link: '/faq', icon: 'HelpCircle' },
  ]

  const recentArticles = [
    { title: 'How to track your order', date: 'Jan 15, 2024' },
    { title: 'Understanding our return policy', date: 'Jan 14, 2024' },
    { title: 'Payment methods explained', date: 'Jan 13, 2024' },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Help Center</h1>
          <p className="text-gray-500">Find answers and get support</p>
        </motion.div>

        {/* Support Options */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{option.title}</h3>
                <p className="text-gray-500 mb-4">{option.desc}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl w-full font-semibold shadow-md hover:shadow-lg transition-all">{option.action}</button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Knowledge Base */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
            <div className="p-2 bg-blue-50 rounded-xl">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            Knowledge Base
          </h2>
          <div className="card p-6">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="input-field w-full"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Order Issues', 'Payment', 'Shipping', 'Returns', 'Account', 'Products', 'Technical', 'Other'].map((topic) => (
                <button key={topic} className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors text-gray-700 font-medium">
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Video Tutorials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
            <div className="p-2 bg-blue-50 rounded-xl">
              <Video className="w-6 h-6 text-blue-600" />
            </div>
            Video Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'How to place an order', duration: '2:30' },
              { title: 'Tracking your order', duration: '1:45' },
              { title: 'Returns process', duration: '3:15' },
            ].map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-semibold mb-1 text-gray-900">{video.title}</h3>
                <p className="text-sm text-gray-500">{video.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Popular Topics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Popular Topics</h2>
          <div className="card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularTopics.map((topic, index) => (
                <Link
                  key={topic.title}
                  to={topic.link}
                  className="flex items-center gap-2 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors text-gray-700 font-medium"
                >
                  <span>{topic.title}</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-500" />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quick Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.link}
                className="card p-4 flex items-center gap-3 hover:shadow-md transition-all"
              >
                <HeadphonesIcon className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-900">{link.title}</span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Recent Help Articles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent Help Articles</h2>
          <div className="card p-6">
            <div className="space-y-4">
              {recentArticles.map((article, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="font-semibold text-gray-900">{article.title}</span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Support
