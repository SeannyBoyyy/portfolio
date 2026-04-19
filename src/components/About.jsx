import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

function About() {
  const { isDark } = useTheme()

  return (
    <motion.div 
      className={`card ${isDark ? 'card-dark' : 'card-light'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.h2 
        className={`text-lg font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="text-xl">👋</span> About
      </motion.h2>
      
      <motion.div 
        className={`text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p>
          I am a fresh BS Information Technology graduate with hands-on experience building real-world web and
          software projects. I enjoy solving problems, learning modern technologies, and turning ideas into practical,
          user-friendly solutions. I am currently seeking an entry-level opportunity where I can contribute to a team,
          grow as a developer, and continue improving through meaningful projects and collaboration.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default About
