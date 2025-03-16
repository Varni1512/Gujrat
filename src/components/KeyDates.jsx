import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { keyDates } from '../data/keyDates';

export default function KeyDates() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Important Dates
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Keep track of all important ACPC admission dates
        </p>
      </motion.div>

      <div className="grid gap-6">
        {keyDates.map((date, index) => (
          <motion.div
            key={date.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-start space-x-4"
          >
            <div className="flex-shrink-0">
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {date.event}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {date.description}
              </p>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <time dateTime={date.date}>
                  {new Date(date.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}