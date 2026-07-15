import { motion } from 'framer-motion'
import { Target, Users, Award, Heart, Zap, Shield } from 'lucide-react'

const About = () => {
  const values = [
    { icon: Target, title: 'Innovation', desc: 'We constantly push boundaries to bring you the latest technology' },
    { icon: Users, title: 'Customer First', desc: 'Your satisfaction is our top priority' },
    { icon: Award, title: 'Quality', desc: 'We only offer products that meet our high standards' },
    { icon: Heart, title: 'Passion', desc: 'We love technology and it shows in everything we do' },
    { icon: Zap, title: 'Speed', desc: 'Fast shipping and quick responses to your needs' },
    { icon: Shield, title: 'Trust', desc: 'Secure transactions and reliable service' },
  ]

  const stats = [
    { number: '10M+', label: 'Happy Customers' },
    { number: '50K+', label: 'Products' },
    { number: '100+', label: 'Countries' },
    { number: '24/7', label: 'Support' },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About WEBTECH</h1>
          <p className="text-gray-500">Learn more about our company and values</p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Trusted Technology Partner</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Founded in 2020, WEBTECH has grown from a small startup to a leading electronics retailer. We believe that everyone deserves access to the latest technology at fair prices.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make technology accessible to everyone while providing exceptional customer service. We carefully curate our product selection to ensure quality and reliability.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              WEBTECH started with a simple idea: make technology accessible to everyone. Our founders, tech enthusiasts themselves, noticed that many people struggled to find reliable information about electronics and often ended up with products that didn't meet their needs.
            </p>
            <p>
              We began as a small blog reviewing tech products, but our passion for helping people make informed decisions quickly grew into something bigger. We started partnering with manufacturers and retailers to bring our readers the best deals on the products we recommended.
            </p>
            <p>
              Today, WEBTECH is a full-fledged electronics retailer with customers in over 100 countries. We've maintained our commitment to providing honest reviews, fair prices, and exceptional customer service. Every product in our inventory is carefully selected based on quality, performance, and value.
            </p>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'John Smith', role: 'CEO & Founder', bio: 'Tech visionary with 15+ years of industry experience' },
              { name: 'Sarah Johnson', role: 'CTO', bio: 'Engineering expert leading our technical innovation' },
              { name: 'Mike Chen', role: 'COO', bio: 'Operations specialist ensuring smooth customer experiences' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2 font-medium">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
