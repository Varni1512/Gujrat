import React from 'react';
import { Globe, ExternalLink } from 'lucide-react';
import { importantWebsites } from '../data/website';

const ImportantWebsites = () => {
  const categories = [...new Set(importantWebsites.map(site => site.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
            <Globe className="w-8 h-8 text-blue-600 dark:text-blue-300" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Important Websites
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category}
                </h2>
                <div className="space-y-4">
                  {importantWebsites
                    .filter(site => site.category === category)
                    .map(site => (
                      <a
                        key={site.id}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                              {site.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {site.description}
                            </p>
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400" />
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantWebsites;