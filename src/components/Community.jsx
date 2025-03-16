import { motion } from 'framer-motion';

export default function Community() {
  const groups = [
    {
      id: 1,
      name: "WhatsApp Group",
      platform: "WhatsApp",
      description: "Peer discussion and doubt solving community",
      members: "25,000+",
      link: "https://whatsapp.com/group-link-placeholder"
    },
    {
      id: 2,
      name: "Telegram Group",
      platform: "Telegram",
      description: "Official updates and notifications",
      members: "50,000+",
      link: "https://t.me/group-link-placeholder"
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
          Join Admission Groups
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Connect with fellow engineering aspirants
        </p>
      </motion.div>

      {/* Groups Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {group.platform === "WhatsApp" ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h-2v2h2m-2 4h2m-6-8h2v2H9m-2 4h2v2H7m4-8h2v2h-2m2 4h-2v2h2m-6-8h6m-6 4h6m-6 4h6m-2-8v8m-4-8v8m4-8v8"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.65c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.68.48C19.13 20.17 22 16.41 22 12c0-5.52-4.48-10-10-10z"
                      />
                    )}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {group.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {group.platform}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {group.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Members: {group.members}
              </p>
            </div>
            <a
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Join Group
            </a>
            
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Community Guidelines
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Be respectful to all members</li>
            <li>• No spam or promotional content</li>
            <li>• Keep discussions relevant to admissions</li>
            <li>• Follow platform-specific rules</li>
            <li>• Report any inappropriate behavior</li>
          </ul>
        </div>
    </div>
  );
}