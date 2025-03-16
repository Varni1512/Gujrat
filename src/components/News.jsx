import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { news } from '../data/news';

export default function News() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Latest News & Updates
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Stay informed with the latest ACPC news and announcements
        </p>
      </motion.div>

      <div className="grid gap-8">
        {news.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center text-blue-600 dark:text-blue-400">
                  <Tag className="w-4 h-4 mr-2" />
                  {item.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {item.content}
              </p>
              <div className="mt-6">
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}