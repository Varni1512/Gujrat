import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { colleges } from '../data/colleges';

export default function CollegeFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const filteredColleges = colleges.filter(college => {
    return (
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedBranch === '' || college.branches.includes(selectedBranch)) &&
      (selectedCity === '' || college.city === selectedCity)
    );
  });

  const allBranches = [...new Set(colleges.flatMap(college => college.branches))];
  const allCities = [...new Set(colleges.map(college => college.city))];

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Find Your Perfect College
        </h1>
        <p className="text-lg text-gray-600 dark:text-white">
          Search and filter through top engineering colleges
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400 dark:text-white" size={20} />
          <input
            type="text"
            placeholder="Search colleges..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
        >
          <option value="" className="dark:text-white">All Branches</option>
          {allBranches.map(branch => (
            <option key={branch} value={branch} className="dark:text-white">{branch}</option>
          ))}
        </select>
        <select
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="" className="dark:text-white">All Cities</option>
          {allCities.map(city => (
            <option key={city} value={city} className="dark:text-white">{city}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map(college => (
          <motion.div
            key={college.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {college.name}
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                {college.city} • Est. {college.established}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Branches:</h4>
                <div className="flex flex-wrap gap-2">
                  {college.branches.map(branch => (
                    <span
                      key={branch}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-white rounded-full text-sm"
                    >
                      {branch}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-white">
                  {college.seats} seats
                </span>
                <a
                  href={college.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-white hover:underline"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}