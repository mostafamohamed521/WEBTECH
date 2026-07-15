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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900"
        >
          Customer Reviews
        </motion.h1>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="card text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{averageRating}</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <p className="text-gray-500">Average Rating</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{reviews.length}</div>
            <p className="text-gray-500">Total Reviews</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-500">Satisfied Customers</p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-8"
        >
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full pl-12"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
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
        <div className="space-y-4">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.user}</h3>
                      <p className="text-sm text-gray-500">{review.product}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{review.date}</p>
                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews
