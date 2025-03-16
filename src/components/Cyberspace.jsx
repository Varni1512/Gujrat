import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Cyberspace = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const districts = [
    {
      id: 1,
      name: "Ahmedabad",
      centers: [
        {
          id: 1,
          name: "Cyber Hub",
          address: "CG Road, Ahmedabad, Gujarat",
          contact: "9876543210",
          email: "cyberhub@gujarat.gov.in"
        },
        {
          id: 2,
          name: "Tech Zone",
          address: "Satellite, Ahmedabad, Gujarat",
          contact: "8765432109",
          email: "techzone@gujarat.gov.in"
        },
        {
          id: 3,
          name: "Digital Point",
          address: "Maninagar, Ahmedabad, Gujarat",
          contact: "7654321098",
          email: "digitalpoint@gujarat.gov.in"
        },
        {
          id: 4,
          name: "Net Cafe",
          address: "Vastrapur, Ahmedabad, Gujarat",
          contact: "6543210987",
          email: "netcafe@gujarat.gov.in"
        },
        {
          id: 5,
          name: "Cyber Link",
          address: "Bapunagar, Ahmedabad, Gujarat",
          contact: "5432109876",
          email: "cyberlink@gujarat.gov.in"
        },
        {
          id: 6,
          name: "Info Tech",
          address: "Paldi, Ahmedabad, Gujarat",
          contact: "4321098765",
          email: "infotech@gujarat.gov.in"
        },
        {
          id: 7,
          name: "Web World",
          address: "Navrangpura, Ahmedabad, Gujarat",
          contact: "3210987654",
          email: "webworld@gujarat.gov.in"
        },
        {
          id: 8,
          name: "Connect Zone",
          address: "Bodakdev, Ahmedabad, Gujarat",
          contact: "2109876543",
          email: "connectzone@gujarat.gov.in"
        },
        {
          id: 9,
          name: "Cyber Nest",
          address: "Thaltej, Ahmedabad, Gujarat",
          contact: "1098765432",
          email: "cybernest@gujarat.gov.in"
        },
        {
          id: 10,
          name: "Tech Spot",
          address: "Gandhi Nagar Highway, Ahmedabad, Gujarat",
          contact: "0987654321",
          email: "techspot@gujarat.gov.in"
        }
      ]
    },
    {
      id: 2,
      name: "Amreli",
      centers: [
        {
          id: 1,
          name: "Amreli Cyber",
          address: "Main Road, Amreli, Gujarat",
          contact: "9876543211",
          email: "amrelicyber@gujarat.gov.in"
        }
      ]
    },
    {
      id: 3,
      name: "Anand",
      centers: [
        {
          id: 1,
          name: "Anand Net",
          address: "Vallabh Vidyanagar, Anand, Gujarat",
          contact: "8765432110",
          email: "anandnet@gujarat.gov.in"
        },
        {
          id: 2,
          name: "Cyber Anand",
          address: "Karamsad, Anand, Gujarat",
          contact: "7654321109",
          email: "cyberanand@gujarat.gov.in"
        },
        {
          id: 3,
          name: "Tech Anand",
          address: "Anand City, Anand, Gujarat",
          contact: "6543211098",
          email: "techanand@gujarat.gov.in"
        },
        {
          id: 4,
          name: "Net Zone",
          address: "Borsad, Anand, Gujarat",
          contact: "5432110987",
          email: "netzone@gujarat.gov.in"
        },
        {
          id: 5,
          name: "Digital Anand",
          address: "Petlad, Anand, Gujarat",
          contact: "4321109876",
          email: "digitalanand@gujarat.gov.in"
        }
      ]
    },
    {
      id: 4,
      name: "Aravalli",
      centers: [
        {
          id: 1,
          name: "Aravalli Cyber",
          address: "Modasa, Aravalli, Gujarat",
          contact: "9876543212",
          email: "aravallicyber@gujarat.gov.in"
        }
      ]
    },
    {
      id: 5,
      name: "Bakrol",
      centers: [
        {
          id: 1,
          name: "Bakrol Net",
          address: "Bakrol, Gujarat",
          contact: "8765432108",
          email: "bakrolnet@gujarat.gov.in"
        }
      ]
    },
    {
      id: 6,
      name: "Bardoli",
      centers: [
        {
          id: 1,
          name: "Bardoli Cyber",
          address: "Main Road, Bardoli, Gujarat",
          contact: "7654321097",
          email: "bardolicyber@gujarat.gov.in"
        },
        {
          id: 2,
          name: "Tech Bardoli",
          address: "Station Road, Bardoli, Gujarat",
          contact: "6543210986",
          email: "techbardoli@gujarat.gov.in"
        },
        {
          id: 3,
          name: "Net Bardoli",
          address: "Bardoli Market, Gujarat",
          contact: "5432109875",
          email: "netbardoli@gujarat.gov.in"
        }
      ]
    },
    {
      id: 7,
      name: "Bharuch",
      centers: [
        {
          id: 1,
          name: "Bharuch Cyber",
          address: "Zadeshwar, Bharuch, Gujarat",
          contact: "4321098764",
          email: "bharuchcyber@gujarat.gov.in"
        },
        {
          id: 2,
          name: "Tech Bharuch",
          address: "Ankleshwar, Bharuch, Gujarat",
          contact: "3210987653",
          email: "techbharuch@gujarat.gov.in"
        }
      ]
    },
    {
      id: 8,
      name: "Bhavnagar",
      centers: [
        {
          id: 1,
          name: "Bhavnagar Net",
          address: "Waghawadi Road, Bhavnagar, Gujarat",
          contact: "2109876542",
          email: "bhavnagarnet@gujarat.gov.in"
        },
        {
          id: 2,
          name: "Cyber Bhav",
          address: "Ghogha Circle, Bhavnagar, Gujarat",
          contact: "1098765431",
          email: "cyberbhav@gujarat.gov.in"
        },
        {
          id: 3,
          name: "Tech Bhav",
          address: "Nilambag, Bhavnagar, Gujarat",
          contact: "0987654320",
          email: "techbhav@gujarat.gov.in"
        }
      ]
    },
    {
      id: 9,
      name: "Dahod",
      centers: [
        {
          id: 1,
          name: "Dahod Cyber",
          address: "Dahod City, Gujarat",
          contact: "9876543213",
          email: "dahodcyber@gujarat.gov.in"
        }
      ]
    },
    {
      id: 10,
      name: "Dharmaj",
      centers: [
        {
          id: 1,
          name: "Dharmaj Net",
          address: "Dharmaj, Gujarat",
          contact: "8765432107",
          email: "dharmajnet@gujarat.gov.in"
        }
      ]
    },
    {
      id: 11,
      name: "Dholka",
      centers: [
        {
          id: 1,
          name: "Dholka Cyber",
          address: "Dholka, Gujarat",
          contact: "7654321096",
          email: "dholkacyber@gujarat.gov.in"
        }
      ]
    },
    {
      id: 12,
      name: "Gandhinagar",
      centers: [
        {
          id: 1,
          name: "Gandhi Cyber",
          address: "Sector 17, Gandhinagar, Gujarat",
          contact: "6543210985",
          email: "gandhicyber@gujarat.gov.in"
        },
        {
          id: 2,
          name: "Tech Gandhi",
          address: "Sector 10, Gandhinagar, Gujarat",
          contact: "5432109874",
          email: "techgandhi@gujarat.gov.in"
        },
        {
          id: 3,
          name: "Net Gandhinagar",
          address: "Sector 21, Gandhinagar, Gujarat",
          contact: "4321098763",
          email: "netgandhinagar@gujarat.gov.in"
        },
        {
          id: 4,
          name: "Cyber Gandhi",
          address: "Sector 7, Gandhinagar, Gujarat",
          contact: "3210987652",
          email: "cybergandhi@gujarat.gov.in"
        },
        {
          id: 5,
          name: "Digital Gandhinagar",
          address: "Sector 15, Gandhinagar, Gujarat",
          contact: "2109876541",
          email: "digitalgandhinagar@gujarat.gov.in"
        },
        {
          id: 6,
          name: "Gandhi Tech",
          address: "Sector 25, Gandhinagar, Gujarat",
          contact: "1098765430",
          email: "gandhitech@gujarat.gov.in"
        },
        {
          id: 7,
          name: "Net Zone Gandhi",
          address: "Sector 9, Gandhinagar, Gujarat",
          contact: "0987654329",
          email: "netzonegandhi@gujarat.gov.in"
        },
        {
          id: 8,
          name: "Cyber Link Gandhinagar",
          address: "Sector 16, Gandhinagar, Gujarat",
          contact: "9876543209",
          email: "cyberlinkgandhinagar@gujarat.gov.in"
        },
        {
          id: 9,
          name: "Tech Spot Gandhi",
          address: "Sector 11, Gandhinagar, Gujarat",
          contact: "8765432098",
          email: "techspotgandhi@gujarat.gov.in"
        },
        {
          id: 10,
          name: "Gandhi Net",
          address: "Sector 20, Gandhinagar, Gujarat",
          contact: "7654320987",
          email: "gandhinet@gujarat.gov.in"
        }
      ]
    },
    {
      id: 13,
      name: "Godhra",
      centers: [
        {
          id: 1,
          name: "Godhra Cyber",
          address: "Godhra City, Gujarat",
          contact: "6543210984",
          email: "godhracyber@gujarat.gov.in"
        }
      ]
    },
    {
      id: 14,
      name: "Himmatnagar",
      centers: [
        {
          id: 1,
          name: "Himmat Cyber",
          address: "Himmatnagar, Gujarat",
          contact: "5432109873",
          email: "himmatcyber@gujarat.gov.in"
        }
      ]
    },
    {
      id: 15,
      name: "Jalalpore",
      centers: [
        {
          id: 1,
          name: "Jalalpore Net",
          address: "Jalalpore, Gujarat",
          contact: "4321098762",
          email: "jalalporenet@gujarat.gov.in"
        },
        {
          id: 2,
          name: "Cyber Jalalpore",
          address: "Navsari, Jalalpore, Gujarat",
          contact: "3210987651",
          email: "cyberjalalpore@gujarat.gov.in"
        }
      ]
    },
    {
      id: 16,
      name: "Jamnagar",
      centers: [
        {
          id: 1,
          name: "Jamnagar Cyber",
          address: "Jamnagar City, Gujarat",
          contact: "2109876540",
          email: "jamnagarcyber@gujarat.gov.in"
        },
        {
          id: 2,
          name: "Tech Jamnagar",
          address: "Ranjit Road, Jamnagar, Gujarat",
          contact: "1098765439",
          email: "techjamnagar@gujarat.gov.in"
        }
      ]
    }
  ];

  const selectedCenters = districts.find(d => d.name === selectedDistrict)?.centers || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          District-wise Cyberspace Centers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Select District
              </h2>
              <div className="space-y-2">
                {districts.map((district) => (
                  <button
                    key={district.id}
                    onClick={() => setSelectedDistrict(district.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedDistrict === district.name
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {district.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              {selectedDistrict ? (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Cyberspace Centers in {selectedDistrict}
                  </h2>
                  <div className="space-y-6">
                    {selectedCenters.map((center) => (
                      <div
                        key={center.id}
                        className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0"
                      >
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                          {center.name}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <MapPin size={18} />
                            <span>{center.address}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <Phone size={18} />
                            <span>{center.contact}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <Mail size={18} />
                            <span>{center.email}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                  Please select a district to view available cyberspace centers
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cyberspace;