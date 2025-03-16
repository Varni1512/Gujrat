import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

export default function RankPredictor() {
  const [formData, setFormData] = useState({
    gujcetPhysics: '',
    gujcetChemistry: '',
    gujcetMaths: '',
    hscPhysics: '',
    hscChemistry: '',
    hscMaths: '',
  });

  const [showResult, setShowResult] = useState(false);
  const [predictedRank, setPredictedRank] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateRank = (e) => {
    e.preventDefault();
    const gujcetTotal = (Number(formData.gujcetPhysics) + 
                        Number(formData.gujcetChemistry) + 
                        Number(formData.gujcetMaths)) / 120 * 100;
    const hscTotal = (Number(formData.hscPhysics) + 
                     Number(formData.hscChemistry) + 
                     Number(formData.hscMaths)) / 300 * 100;
    
    const weightedScore = (gujcetTotal * 0.6) + (hscTotal * 0.4);
    
    let rank = Math.floor(100000 * (1 - (weightedScore / 100)));
    rank = Math.max(1, Math.min(rank, 100000));

    setPredictedRank(rank);
    setShowResult(true);
  };

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ACPC Rank Predictor
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Enter your marks to predict your potential ACPC rank
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={calculateRank} className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              GUJCET Marks (Max: 40 per subject)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Physics', 'Chemistry', 'Maths'].map((subject) => (
                <div key={`gujcet${subject}`}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {subject}
                  </label>
                  <input
                    type="number"
                    name={`gujcet${subject}`}
                    value={formData[`gujcet${subject}`]}
                    onChange={handleInputChange}
                    min="0"
                    max="40"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-gray-900 dark:placeholder-gray-400"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              HSC Marks (Max: 100 per subject)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Physics', 'Chemistry', 'Maths'].map((subject) => (
                <div key={`hsc${subject}`}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {subject}
                  </label>
                  <input
                    type="number"
                    name={`hsc${subject}`}
                    value={formData[`hsc${subject}`]}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-gray-900 dark:placeholder-gray-400"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate Predicted Rank
          </button>
        </form>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Predicted Rank
            </h2>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {predictedRank.toLocaleString()}
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              This is an estimated rank based on your input. Actual rank may vary.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
