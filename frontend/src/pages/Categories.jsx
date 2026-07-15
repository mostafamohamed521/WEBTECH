import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Smartphone, Laptop, Headphones, Camera, Gamepad2, Monitor, Watch, Speaker, Tablet, Keyboard } from 'lucide-react'

const Categories = () => {
  const categories = [
    { icon: Smartphone, name: 'Smartphones', description: 'Latest smartphones from top brands', count: 45, color: 'from-blue-500 to-cyan-500' },
    { icon: Laptop, name: 'Laptops', description: 'Powerful laptops for work and gaming', count: 32, color: 'from-purple-500 to-pink-500' },
    { icon: Tablet, name: 'Tablets', description: 'Tablets for productivity and entertainment', count: 28, color: 'from-green-500 to-emerald-500' },
    { icon: Headphones, name: 'Headphones', description: 'Premium audio experience', count: 35, color: 'from-orange-500 to-red-500' },
    { icon: Camera, name: 'Cameras', description: 'Professional and amateur cameras', count: 18, color: 'from-indigo-500 to-purple-500' },
    { icon: Gamepad2, name: 'Gaming', description: 'Gaming consoles and accessories', count: 22, color: 'from-pink-500 to-rose-500' },
    { icon: Monitor, name: 'Monitors', description: 'High-quality displays', count: 15, color: 'from-teal-500 to-cyan-500' },
    { icon: Watch, name: 'Wearables', description: 'Smartwatches and fitness trackers', count: 25, color: 'from-amber-500 to-orange-500' },
    { icon: Speaker, name: 'Audio', description: 'Speakers and audio equipment', count: 20, color: 'from-lime-500 to-green-500' },
    { icon: Keyboard, name: 'Accessories', description: 'All your tech accessories', count: 40, color: 'from-fuchsia-500 to-pink-500' },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse by Category</h1>
          <p className="text-gray-500">Find exactly what you're looking for</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/categories/${category.name.toLowerCase()}`} className="group">
                <div className="card p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center group-hover:text-blue-600 transition-colors">{category.name}</h3>
                  <p className="text-gray-500 text-sm mb-3 text-center line-clamp-2">{category.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{category.count} Products</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
