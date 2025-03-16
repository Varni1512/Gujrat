import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export default function Scholarships() {
  const scholarships = [
    {
      id: 1,
      title: "MYSY Scholarship",
      description: "Mukhyamantri Yuva Swavalamban Yojana for engineering students",
      eligibility: [
        "Gujarat domicile",
        "Family income less than 6 lakhs per annum",
        "Minimum 80% in 12th standard"
      ],
      amount: "Up to ₹2 lakhs per year",
      deadline: "2024-08-31"
    },
    {
      id: 2,
      title: "Digital Gujarat Scholarship",
      description: "State government scholarship for engineering students",
      eligibility: [
        "Gujarat resident",
        "Enrolled in recognized engineering college",
        "Family income criteria applies"
      ],
      amount: "Varies based on category",
      deadline: "2024-09-15"
    }
  ];

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Available Scholarships
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find financial support for your engineering education
        </p>
      </motion.div>

      <div className="grid gap-8">
        {scholarships.map((scholarship, index) => (
          <motion.div
            key={scholarship.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {scholarship.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {scholarship.description}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-2">
                  {scholarship.eligibility.map((criteria, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {criteria}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Amount:</span>
                  <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                    {scholarship.amount}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Deadline:</span>
                  <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                    {new Date(scholarship.deadline).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Apply Now
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}