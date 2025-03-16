import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Search, Calendar, Award, BookOpen, Users, Building, Newspaper, Globe, Link2, ChevronRight } from 'lucide-react'; // Added ChevronRight

export default function Hero() {
  const features = [
    {
      icon: <Building size={32} />, 
      title: "College",
      description: "Find the best colleges",
      link: "/college-finder"
    },
    {
      icon: <GraduationCap size={32} />, 
      title: "University",
      description: "Find the best universities",
      link: "/university-finder"
    },
    {
      icon: <Search size={32} />, 
      title: "Rank Predictor",
      description: "Predict your admission chances",
      link: "/rank-predictor"
    },
    {
      icon: <Calendar size={32} />, 
      title: "Key Dates",
      description: "Never miss important deadlines",
      link: "/dates"
    },
    {
      icon: <Award size={32} />, 
      title: "Scholarships",
      description: "Explore financial aid options",
      link: "/scholarships"
    },
    {
      icon: <BookOpen size={32} />, 
      title: "Admission Guide",
      description: "Step by step admission process",
      link: "/admission"
    },
    {
      icon: <Users size={32} />, 
      title: "Community",
      description: "Connect with fellow aspirants",
      link: "/community"
    },
    {
      icon: <Newspaper size={32} />, 
      title: "News",
      description: "Stay updated with the latest news",
      link: "/news"
    },
    {
      icon: <Globe size={32} />, 
      title: "Cyberspace",
      description: "Explore cyberspace resources",
      link: "/cyberspace"
    },
    {
      icon: <Link2 size={32} />, 
      title: "Websites",
      description: "Find useful websites",
      link: "/websites"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Gateway to Engineering Education
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Navigate your engineering admission journey with ACPC Guru. Get comprehensive guidance, 
            college recommendations, and real-time updates all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              to="/college-finder"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Find Colleges
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/admission"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Start Application
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={feature.link}
                  className="block bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <div className="mb-4 text-blue-300 group-hover:text-blue-200 transition-colors duration-200">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}