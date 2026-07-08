import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { FiUser } from 'react-icons/fi'

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
        <FiUser className="w-4 h-4" /> About
      </motion.h2>
      
      <motion.div 
        className={`text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p>
          I'm a BS Information Technology graduate (Lyceum of Subic Bay, April 2026) with a habit of shipping things
          instead of just prototyping them. Everything on this page is live and actually used, not a coursework
          demo. I like finding the slow, manual part of a workflow and rebuilding it to be faster, usually with AI
          worked in as a tool rather than a gimmick. Right now I'm looking for an entry-level role where I can keep
          doing that on a team.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default About
