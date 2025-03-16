import { motion } from 'framer-motion';
import {
  ClipboardList,
  FileText,
  CheckCircle,
  Building2,
  GraduationCap
} from 'lucide-react';

export default function AdmissionSteps() {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Registration",
      description: "Complete online registration on ACPC portal with personal details",
      substeps: [
        "Create account on ACPC website",
        "Fill personal information",
        "Upload required documents"
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Verification",
      description: "Visit help center for physical document verification",
      substeps: [
        "Book verification slot",
        "Carry original documents",
        "Get documents verified"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Choice Filling",
      description: "Fill choices of colleges and branches in order of preference",
      substeps: [
        "Research colleges and branches",
        "Arrange preferences",
        "Lock final choices"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Seat Allocation",
      description: "Wait for seat allocation based on merit and choices",
      substeps: [
        "Check allocation result",
        "Download allocation letter",
        "Pay admission fees"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "College Admission",
      description: "Report to allocated college for final admission",
      substeps: [
        "Visit allocated college",
        "Submit required documents",
        "Complete admission process"
      ]
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
          Admission Process
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Complete guide to ACPC admission process
        </p>
      </motion.div>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {index !== steps.length - 1 && (
              <div className="absolute left-8 top-20 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="relative flex items-start">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                {step.icon}
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.substeps.map((substep, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {substep}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}