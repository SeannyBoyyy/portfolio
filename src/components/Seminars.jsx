import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

function Seminars() {
  const { isDark } = useTheme()

  const seminars = [
    {
      title: 'Beyond the Basics: APIs',
      org: 'Lyceum of Subic Bay',
      year: '2025',
    },
    {
      title: 'Web Development Essentials',
      org: 'Lyceum of Subic Bay',
      year: '2024',
    },
    {
      title: 'AI Nexus Conference',
      org: 'PSITE Central Luzon',
      year: '2023',
    },
  ]

  return (
    <motion.div 
      className={`card ${isDark ? 'card-dark' : 'card-light'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.h2 
        className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <span className="text-xl">📜</span> Seminars
      </motion.h2>
      
      <div className="space-y-3">
        {seminars.map((seminar, index) => (
          <motion.div 
            key={index}
            className={`p-3 rounded-lg ${
              isDark ? 'bg-zinc-800 border border-zinc-600' : 'bg-gray-50'
            }`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className={`font-medium text-sm truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {seminar.title}
                </h3>
                <p className={`text-xs ${isDark ? 'text-zinc-300' : 'text-gray-500'}`}>
                  {seminar.org}
                </p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                isDark ? 'bg-zinc-700 border border-zinc-500 text-zinc-200' : 'bg-gray-200 text-gray-600'
              }`}>
                {seminar.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Seminars
