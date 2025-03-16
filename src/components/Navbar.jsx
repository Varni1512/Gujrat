import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Finder', href: '/finder' },
    { title: 'College', href: '/college-finder' },
    { title: 'University', href: '/university' },
    { title: 'Rank Calculator', href: '/rank-predictor' },
    { title: 'News', href: '/news' },
    { title: 'Key Dates', href: '/dates' },
    { title: 'Scholarships', href: '/scholarships' },
    { title: 'Admission Steps', href: '/admission' },
    { title: 'Cyberspace', href: '/cyberspace' },
    { title: 'Websites', href: '/iws' },
    { title: 'Community', href: '/community' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900"
    >
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ACPC Guru
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${location.pathname === item.href
                    ? 'bg-white/10 dark:bg-gray-800/50'
                    : ''
                  }`}
              >
                {item.title}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="text-gray-700 dark:text-gray-300" size={20} />
              ) : (
                <Moon className="text-gray-700 dark:text-gray-300" size={20} />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.href
                      ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                >
                  {item.title}
                </Link>
              ))}
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {darkMode ? (
                  <>
                    <Sun size={20} className="mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={20} className="mr-2" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}