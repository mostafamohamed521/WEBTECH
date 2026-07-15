import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Filter, Search, ThumbsUp, User } from 'lucide-react'

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const reviews = [
    { id: 1, user: 'John Doe', rating: 5, product: 'iPhone 15 Pro Max', comment: 'Amazing phone! The camera quality is outstanding and the battery life is incredible.', date: '2024-01-15', helpful: 23 },
    { id: 2, user: 'Jane Smith', rating: 4, product: 'MacBook Pro 16"', comment: 'Great laptop for work. The display is beautiful and performance is top-notch.', date: '2024-01-14', helpful: 18 },
    { id: 3, user: 'Mike Johnson', rating: 5, product: 'Sony WH-1000XM5', comment: 'Best noise-canceling headphones I have ever used. Highly recommended!', date: '2024-01-13', helpful: 31 },
    { id: 4, user: 'Sarah Williams', rating: 4, product: 'PlayStation 5', comment: 'Amazing gaming experience. Fast loading and stunning graphics.', date: '2024-01-12', helpful: 27 },
  ]

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === 'all' || review.rating === parseInt(selectedRating)
    const matchesSearch = review.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.product.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesRating && matchesSearch
  })

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Customer Reviews</h1>
          <p className="text-gray-500">See what our customers are saying</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="card p-6 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-3">{averageRating}</div>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < Math.round(averageRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <p className="text-gray-500 font-medium">Average Rating</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-3">{reviews.length}</div>
            <p className="text-gray-500 font-medium">Total Reviews</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-3">95%</div>
            <p className="text-gray-500 font-medium">Satisfied Customers</p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full pl-12"
              />
            </div>
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="input-field"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Reviews List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{review.user}</h3>
                      <p className="text-sm text-gray-500">{review.product}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{review.date}</p>
                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Reviews
