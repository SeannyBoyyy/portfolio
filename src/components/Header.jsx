import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon, FiMail, FiGithub, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Header() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.div 
      className={`card ${isDark ? 'card-dark' : 'card-light'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-4">
        {/* Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <motion.h1 
                className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Sean Richard Sakamoto
              </motion.h1>
              <motion.p 
                className={`text-sm mt-0.5 ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Full Stack Developer • Student
              </motion.p>
              <motion.div 
                className={`flex items-center gap-1.5 mt-1.5 text-xs ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FiMapPin className="w-3 h-3" />
                Subic, Zambales, Philippines
              </motion.div>
            </div>
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-colors ${
                isDark 
                  ? 'bg-zinc-800 text-zinc-400 hover:text-white' 
                  : 'bg-gray-100 text-gray-500 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </motion.button>
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="mailto:seanrichard1022@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="w-4 h-4" />
              Send Email
            </motion.a>
            <motion.a
              href="https://github.com/SeannyBoyyy"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                isDark 
                  ? 'bg-zinc-800 text-white hover:bg-zinc-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header
