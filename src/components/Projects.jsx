import { useTheme } from '../context/ThemeContext'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Projects() {
  const { isDark } = useTheme()

  const projects = [
    {
      title: 'CraveSense',
      description: 'AI-powered food discovery app',
      link: 'https://github.com/SeannyBoyyy',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'MLBB Studies',
      description: 'Gaming analytics platform',
      link: 'https://mlbb-studies.great-site.net',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'LSB WebProj',
      description: 'LSB ads promotional website',
      link: 'https://lsb-webproj.great-site.net',
      color: 'from-green-500 to-teal-500',
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
        <span className="text-xl">💻</span> Recent Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-4 rounded-xl transition-all ${
              isDark 
                ? 'bg-zinc-800 border border-zinc-600 hover:bg-zinc-700' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start justify-between">
              <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <FiArrowUpRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                isDark ? 'text-zinc-400' : 'text-gray-400'
              }`} />
            </div>
            <p className={`text-xs mt-1 ${isDark ? 'text-zinc-300' : 'text-gray-500'}`}>
              {project.description}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
