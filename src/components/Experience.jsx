import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

function Experience() {
  const { isDark } = useTheme()

  const experiences = [
    {
      title: 'BS Information Technology',
      place: 'Lyceum of Subic Bay',
      period: '2022 — Present',
      current: true,
    },
    {
      title: 'Senior High School - STEM',
      place: 'St. Joseph College Inc.',
      period: '2020 — 2022',
    },
  ]

  return (
    <motion.div 
      className={`card ${isDark ? 'card-dark' : 'card-light'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <motion.h2 
        className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <span className="text-xl">🎓</span> Education
      </motion.h2>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="flex gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className={`w-2.5 h-2.5 rounded-full mt-1.5 ${
                  exp.current ? 'bg-green-500' : isDark ? 'bg-zinc-400' : 'bg-gray-300'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.15 }}
              ></motion.div>
              {index !== experiences.length - 1 && (
                <motion.div 
                  className={`w-px flex-1 mt-1 ${
                    isDark ? 'bg-zinc-500' : 'bg-gray-200'
                  }`}
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.15 }}
                ></motion.div>
              )}
            </div>
            <div className="pb-2">
              <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {exp.title}
              </h3>
              <p className={`text-xs ${isDark ? 'text-zinc-300' : 'text-gray-500'}`}>
                {exp.place}
              </p>
              <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-400'}`}>
                {exp.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
