// src/components/Finder.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { collegeData, cities, branches, colleges, categories, collegeTypes } from '../data/cutoff';

const Finder = () => {
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('OPEN');
  const [collegeType, setCollegeType] = useState('ALL');
  const [city, setCity] = useState('All City');
  const [branch, setBranch] = useState('All Branch');
  const [collegeName, setCollege] = useState('ALL College');
  const [sortBy, setSortBy] = useState('Merit No.');
  const [results, setResults] = useState([]);

  const handleShow = () => {
    if (!rank) {
      setResults([]);
      alert('Please enter a valid Merit No.');
      return;
    }

    const rankNum = Number(rank);
    if (isNaN(rankNum)) {
      setResults([]);
      alert('Please enter a valid numeric Merit No.');
      return;
    }

    let filteredData = collegeData.filter(college => {
      const cutoff = college.gujcetCutoff || college.jeeCutoff;
      if (!cutoff) return false;

      // Filter by rank
      if (cutoff < rankNum) return false;

      // Filter by category
      const matchesCategory = category === 'OPEN' || college.category === category;

      // Filter by city
      const matchesCity = city === 'All City' || college.city === city;

      // Filter by branch
      const matchesBranch = branch === 'All Branch' || college.course === branch;

      // Filter by college name
      const matchesCollege = collegeName === 'ALL College' || college.name === collegeName;

      // Filter by college type
      const matchesType = collegeType === 'ALL' ||
        (collegeType === 'Government' && college.name.toLowerCase().includes('government')) ||
        (collegeType === 'Private' && !college.name.toLowerCase().includes('government') && !college.name.toLowerCase().includes('university')) ||
        (collegeType === 'Autonomous' && college.name.toLowerCase().includes('university'));

      return matchesCategory && matchesCity && matchesBranch && matchesCollege && matchesType;
    });

    // Sort the filtered data
    if (sortBy === 'Merit No.') {
      filteredData = filteredData.sort((a, b) => {
        const cutoffA = a.gujcetCutoff || a.jeeCutoff;
        const cutoffB = b.gujcetCutoff || b.jeeCutoff;
        return cutoffA - cutoffB;
      });
    } else if (sortBy === 'College Name') {
      filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
    }

    setResults(filteredData);
  };

  const handleReset = () => {
    setRank('');
    setCategory('OPEN');
    setCollegeType('ALL');
    setCity('All City');
    setBranch('All Branch');
    setCollege('ALL College');
    setSortBy('Merit No.');
    setResults([]);
  };

  const handleShowPreferred = () => {
    alert('Show Preferred feature not implemented yet.');
  };

  const handleSave = () => {
    alert('Save feature not implemented yet.');
  };

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Search Cut-off</h1>
        <p className="text-lg text-gray-600 dark:text-white">Find colleges based on your merit</p>
      </motion.div>

      {/* Container Box for Inner Data */}
      <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Controls */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 text-gray-400 dark:text-white" size={20} />
              <input
                type="number"
                placeholder="Enter Merit No."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-gray-900"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-gray-900"
            >
              <option value="OPEN">OPEN</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={collegeType}
              onChange={(e) => setCollegeType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-gray-900"
            >
              {collegeTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-gray-900"
            >
              <option value="All City">All City</option>
              {cities.map(cityOption => (
                <option key={cityOption} value={cityOption}>{cityOption}</option>
              ))}
            </select>

            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-gray-900"
            >
              <option value="All Branch">All Branch</option>
              {branches.map(branchOption => (
                <option key={branchOption} value={branchOption}>{branchOption}</option>
              ))}
            </select>

            <select
              value={collegeName}
              onChange={(e) => setCollege(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-gray-900"
            >
              <option value="ALL College">ALL College</option>
              {colleges.map(collegeOption => (
                <option key={collegeOption} value={collegeOption}>{collegeOption}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white text-gray-900"
            >
              <option value="Merit No.">Merit No.</option>
              <option value="College Name">College Name</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleShow}
                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                Show
              </button>
              <button
                onClick={handleReset}
                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="w-full md:w-1/2 space-y-6">
            {results.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Results ({results.length})
                </h2>
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {results.map(college => (
                    <motion.div
                      key={`${college.name}-${college.course}-${college.category}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {college.name}
                        </h3>
                        <p className="text-gray-600 dark:text-white mb-2">
                          Course: {college.course}
                        </p>
                        <p className="text-gray-600 dark:text-white mb-2">
                          City: {college.city}
                        </p>
                        <p className="text-gray-600 dark:text-white mb-2">
                          Category: {college.category}
                        </p>
                        <p className="text-gray-600 dark:text-white">
                          Cutoff: {college.gujcetCutoff || college.jeeCutoff}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="text-center text-gray-600 dark:text-white">
                No results found. Please adjust your filters and try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;
