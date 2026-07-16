import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import useStore from '../context/StoreContext'
import toast from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate()
  const { setUser, setToken } = useStore()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate login
    setTimeout(() => {
      setUser({ id: 1, name: 'John Doe', email: formData.email })
      setToken('mock-token-12345')
      toast.success('Login successful!')
      navigate('/home')
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-8 md:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="card p-6 md:p-8 shadow-lg md:shadow-xl">
          <div className="text-center mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
              <LogIn className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-gray-900">Welcome Back</h1>
            <p className="text-gray-500 text-sm md:text-base">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-700">Email Address</label>
              <div className="relative">
                <User className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field w-full pl-10 md:pl-12 text-sm md:text-base"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input-field w-full pl-10 md:pl-12 pr-10 md:pr-12 text-sm md:text-base"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 md:w-5 md:h-5" /> : <Eye className="w-4 h-4 md:w-5 md:h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
                <span className="text-xs md:text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-xs md:text-sm text-blue-600 hover:text-blue-700 font-medium">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl w-full flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
            >
              {loading ? (
                'Signing in...'
              ) : (
                <>
                  <LogIn className="w-4 h-4 md:w-5 md:h-5" />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="mt-6 md:mt-8 text-center">
            <p className="text-gray-500 text-sm md:text-base">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-3 md:px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-4 md:mt-6 grid grid-cols-2 gap-3 md:gap-4">
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow transition-all text-sm md:text-base">
                <span className="text-red-500 font-bold text-sm md:text-base">G</span>
                Google
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transition-all text-sm md:text-base">
                <span className="font-bold text-sm md:text-base">GH</span>
                GitHub
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
