import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

function Skills() {
  const { isDark } = useTheme()

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML/CSS', 'React Native', 'JavaScript', 'Bootstraps']
    },
    {
      title: 'Backend',
      skills: ['PHP', 'Node.js', 'MySQL', 'Firebase']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Figma', 'Expo Go']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className={`card ${isDark ? 'card-dark' : 'card-light'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h2 
        className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <span className="text-xl">⚡</span> Tech Stack
      </motion.h2>
      
      <motion.div 
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            variants={itemVariants}
            transition={{ delay: 0.3 + categoryIndex * 0.1 }}
          >
            <h3 className={`text-xs font-medium uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-400' : 'text-gray-400'}`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                    isDark 
                      ? 'bg-zinc-700 text-zinc-200 border border-zinc-600' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills
