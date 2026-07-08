import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

function WorkExperience() {
  const { isDark } = useTheme()

  const experiences = [
    {
      title: 'AI & IT Programmer Intern',
      company: 'Tailin Abrasives Corporation',
      period: 'Nov 2025 — Mar 2026',
      hours: '486 Hours',
      description: [
        [
          'Designed and deployed 5 AI-generated video orientations across different departments, reducing onboarding time from 1-2 hours down to 15–45 minutes per session, cutting orientation delivery time by up to ',
          { bold: '75%' },
          '.',
        ],
        [
          'Created a process optimization solution using Microsoft Excel with advanced formulas, reducing per-task processing time from 9:49 minutes to 4:41 minutes (',
          { bold: '52% faster' },
          '), saving approximately ',
          { bold: '3 hours per day' },
          ' off the total daily workload.',
        ],
        [
          'Built ',
          { bold: 'TAC Ledger' },
          ', a full-featured General Ledger system handling dual-currency (PHP/USD) bookkeeping, journal entries, Excel import/export, trial balance, subledger tracking, and team collaboration. Built with Next.js, TypeScript, PostgreSQL, and Prisma.',
        ],
      ],
    },
  ]

  return (
    <motion.div 
      className={`card ${isDark ? 'card-dark' : 'card-light'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.h2 
        className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <FiBriefcase className="w-4 h-4" /> Experience
      </motion.h2>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="flex gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className={`w-2.5 h-2.5 rounded-full mt-1.5 ${
                  exp.current ? 'bg-green-500' : isDark ? 'bg-zinc-400' : 'bg-gray-300'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.15 }}
              ></motion.div>
              {index !== experiences.length - 1 && (
                <motion.div 
                  className={`w-px flex-1 mt-1 ${
                    isDark ? 'bg-zinc-500' : 'bg-gray-200'
                  }`}
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.15 }}
                ></motion.div>
              )}
            </div>
            <div className="pb-2 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {exp.title}
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                }`}>
                  {exp.hours}
                </span>
              </div>
              <p className={`text-xs ${isDark ? 'text-zinc-300' : 'text-gray-500'}`}>
                {exp.company}
              </p>
              <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-400'}`}>
                {exp.period}
              </span>
              {exp.description && (
                <ul className={`mt-2 space-y-1.5 text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                      <span>
                        {Array.isArray(item)
                          ? item.map((segment, j) =>
                              typeof segment === 'string' ? (
                                <span key={j}>{segment}</span>
                              ) : (
                                <strong
                                  key={j}
                                  className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
                                >
                                  {segment.bold}
                                </strong>
                              )
                            )
                          : item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
