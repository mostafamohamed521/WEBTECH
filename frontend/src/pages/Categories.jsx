import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Smartphone, Laptop, Headphones, Camera, Gamepad2, Monitor, Watch, Speaker, Tablet, Keyboard, Mouse, HardDrive, Wifi, Cpu, Battery, Usb, Mic } from 'lucide-react'

const Categories = () => {
  const featuredCategories = [
    { icon: Smartphone, name: 'Smartphones', description: 'Latest smartphones from top brands', count: 45, color: 'from-blue-500 to-cyan-500', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400' },
    { icon: Laptop, name: 'Laptops', description: 'Powerful laptops for work and gaming', count: 32, color: 'from-purple-500 to-pink-500', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400' },
    { icon: Headphones, name: 'Headphones', description: 'Premium audio experience', count: 35, color: 'from-orange-500 to-red-500', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400' },
  ]

  const allCategories = [
    { icon: Tablet, name: 'Tablets', description: 'Tablets for productivity and entertainment', count: 28, color: 'from-green-500 to-emerald-500' },
    { icon: Camera, name: 'Cameras', description: 'Professional and amateur cameras', count: 18, color: 'from-indigo-500 to-purple-500' },
    { icon: Gamepad2, name: 'Gaming', description: 'Gaming consoles and accessories', count: 22, color: 'from-pink-500 to-rose-500' },
    { icon: Monitor, name: 'Monitors', description: 'High-quality displays', count: 15, color: 'from-teal-500 to-cyan-500' },
    { icon: Watch, name: 'Wearables', description: 'Smartwatches and fitness trackers', count: 25, color: 'from-amber-500 to-orange-500' },
    { icon: Speaker, name: 'Audio', description: 'Speakers and audio equipment', count: 20, color: 'from-lime-500 to-green-500' },
    { icon: Keyboard, name: 'Accessories', description: 'All your tech accessories', count: 40, color: 'from-fuchsia-500 to-pink-500' },
    { icon: Mouse, name: 'Mice', description: 'Gaming and productivity mice', count: 18, color: 'from-slate-500 to-gray-500' },
    { icon: HardDrive, name: 'Storage', description: 'SSDs, HDDs, and external drives', count: 12, color: 'from-zinc-500 to-stone-500' },
    { icon: Wifi, name: 'Networking', description: 'Routers, modems, and adapters', count: 14, color: 'from-sky-500 to-blue-500' },
    { icon: Cpu, name: 'Components', description: 'CPUs, GPUs, and motherboards', count: 16, color: 'from-violet-500 to-purple-500' },
    { icon: Battery, name: 'Power', description: 'Batteries and chargers', count: 22, color: 'from-yellow-500 to-amber-500' },
    { icon: Usb, name: 'Cables', description: 'USB, HDMI, and other cables', count: 35, color: 'from-red-500 to-orange-500' },
    { icon: Mic, name: 'Microphones', description: 'Recording and streaming mics', count: 19, color: 'from-cyan-500 to-teal-500' },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse by Category</h1>
          <p className="text-gray-500">Find exactly what you're looking for from our extensive collection</p>
        </motion.div>

        {/* Featured Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link to="/products" className="group block">
                  <div className="card overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 shadow-lg`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                        <p className="text-white/80 text-sm">{category.count} Products</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">All Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <Link to="/products" className="group">
                  <div className="card p-6 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
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
        </motion.section>
      </div>
    </div>
  )
}

export default Categories
