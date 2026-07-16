import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, ShoppingBag, Heart, Settings, LogOut, Package, CreditCard, Bell, Shield, MapPin, Phone, Mail, Calendar, Edit3, CheckCircle, Clock } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Profile = () => {
  const { user, logout } = useStore()
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)

  const menuItems = [
    { icon: User, label: 'Profile Information', id: 'profile' },
    { icon: Package, label: 'Order History', id: 'orders' },
    { icon: ShoppingBag, label: 'My Cart', id: 'cart' },
    { icon: Heart, label: 'Wishlist', id: 'wishlist' },
    { icon: CreditCard, label: 'Payment Methods', id: 'payment' },
    { icon: Bell, label: 'Notifications', id: 'notifications' },
    { icon: Shield, label: 'Security', id: 'security' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ]

  const handleSave = () => {
    setIsEditing(false)
    toast.success('Profile updated successfully')
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-500">Manage your account settings and preferences</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 mb-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user?.name || 'John Doe'}</h2>
                <p className="text-gray-500 text-sm mb-3">{user?.email || 'john@example.com'}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Member since Jan 2024</span>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors font-medium ${activeTab === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-red-600 hover:bg-red-50 transition-colors font-medium mt-4"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            {activeTab === 'profile' && (
              <div className="card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                    {isEditing ? 'Cancel' : 'Edit'}
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="card p-4 text-center">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Package className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-sm text-gray-500">Total Orders</p>
                  </div>
                  <div className="card p-4 text-center">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">10</p>
                    <p className="text-sm text-gray-500">Completed</p>
                  </div>
                  <div className="card p-4 text-center">
                    <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                    <p className="text-sm text-gray-500">In Progress</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">First Name</label>
                      <input type="text" defaultValue="John" disabled={!isEditing} className="input-field w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
                      <input type="text" defaultValue="Doe" disabled={!isEditing} className="input-field w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="email" defaultValue="john@example.com" disabled={!isEditing} className="input-field w-full pl-12" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="tel" defaultValue="+1 234 567 890" disabled={!isEditing} className="input-field w-full pl-12" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
                      <textarea className="input-field w-full pl-12" rows="3" defaultValue="123 Main St, City, Country" disabled={!isEditing} />
                    </div>
                  </div>
                  {isEditing && (
                    <div className="flex gap-4">
                      <button type="button" onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                        Save Changes
                      </button>
                      <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-xl font-semibold transition-all">
                        Cancel
                      </button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Order History</h2>
                <p className="text-gray-500">View your recent orders and track their status</p>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Security Settings</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Current Password</label>
                    <input type="password" className="input-field w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">New Password</label>
                    <input type="password" className="input-field w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Confirm New Password</label>
                    <input type="password" className="input-field w-full" />
                  </div>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                    Update Password
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Notification Preferences</h2>
                <div className="space-y-4">
                  {['Order updates', 'Promotional emails', 'New arrivals', 'Price drops', 'Wishlist alerts'].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium text-gray-900">{item}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={index < 3} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab !== 'profile' && activeTab !== 'orders' && activeTab !== 'security' && activeTab !== 'notifications' && (
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{menuItems.find(i => i.id === activeTab)?.label}</h2>
                <p className="text-gray-500">This section is coming soon</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Profile
