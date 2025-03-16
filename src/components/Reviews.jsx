import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, MessageSquare, Search } from 'lucide-react';

export default function Reviews() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  const reviews = [
    {
      id: 1,
      college: "L.D. College of Engineering",
      branch: "Computer Engineering",
      rating: 4.5,
      review: "Great faculty and excellent placement opportunities. The campus is well-maintained and has good facilities.",
      author: "Mihir Patel",
      batch: "2023",
      helpful: 45,
      comments: 12,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      college: "DDU Nadiad",
      branch: "Information Technology",
      rating: 4.2,
      review: "Modern infrastructure and strong industry connections. The coding culture here is amazing.",
      author: "Riya Shah",
      batch: "2023",
      helpful: 38,
      comments: 8,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    }
  ];

  const branches = [...new Set(reviews.map(review => review.branch))];

  const filteredReviews = reviews.filter(review => {
    return (
      review.college.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedBranch === '' || review.branch === selectedBranch)
    );
  });

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : index < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          College Reviews
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Real experiences shared by students
        </p>
      </motion.div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search colleges..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
        <select
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          <option value="">All Branches</option>
          {branches.map(branch => (
            <option key={branch} value={branch}>{branch}</option>
          ))}
        </select>
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {review.author}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Batch of {review.batch}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {renderStars(review.rating)}
                <span className="ml-2 text-gray-600 dark:text-gray-300">
                  {review.rating}
                </span>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {review.college} - {review.branch}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {review.review}
            </p>
            <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
              <button className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
                <ThumbsUp className="w-5 h-5 mr-1" />
                {review.helpful}
              </button>
              <button className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
                <MessageSquare className="w-5 h-5 mr-1" />
                {review.comments}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}