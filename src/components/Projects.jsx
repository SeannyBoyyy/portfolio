import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiCalendar } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

function Projects() {
  const { isDark } = useTheme()
  const base = import.meta.env.BASE_URL
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: 'FitFusion360',
      description: 'AI-powered fitness & nutrition app with Gemini AI meal plans, food vision recognition, personalized 28-day workouts, and clinical-grade nutrition algorithms. Backed by 12+ peer-reviewed studies.',
      link: 'https://fitfusion360.online/',
      image: `${base}projects/fitfusion360.png`,
      year: '2026',
      tech: ['React Native', 'Expo Go', 'Firebase'],
    },
    {
      title: 'Hotel Minima Booking',
      description: 'Japanese minimalist hotel booking system with real-time availability, PayMongo payments, AI chatbot assistant, receptionist dashboard, and walk-in booking support.',
      link: 'https://hotel-minima-booking.vercel.app/',
      image: `${base}projects/hotel-minima.png`,
      year: '2026',
      tech: ['Next.js', 'React', 'Firebase', 'Tailwind CSS', 'PayMongo'],
    },
    {
      title: 'Instant Pick',
      description: 'Professional spin-the-wheel app for events and giveaways. Features 6 color themes, dark mode, sound effects, confetti, winner history, and PWA offline support.',
      link: 'https://seannyboyyy.github.io/instantpick/',
      image: `${base}projects/instantpick.png`,
      year: '2025',
      tech: ['React', 'Vite', 'Tailwind CSS', 'PWA'],
    },
    {
      title: 'CraveSense',
      description: 'Mood-based food discovery app. Pick your mood (stressed, happy, tired, excited) and get personalized recipe recommendations from 500+ dishes with AI chat support.',
      link: 'https://seannyboyyy.github.io/CraveSense/',
      image: `${base}projects/cravesense.png`,
      year: '2025',
      tech: ['React Native', 'Expo Go', 'Firebase'],
    },
    {
      title: 'MLBB Studies',
      description: 'Gaming analytics platform for Mobile Legends with team draft analysis, hero statistics, meta insights, and build recommendations.',
      link: 'https://mlbb-studies.great-site.net',
      image: `${base}projects/mlbb-studies.png`,
      year: '2025',
      tech: ['PHP', 'Bootstrap', 'MySQL', 'Chart.js'],
    },
    {
      title: 'LSB WebProj',
      description: 'Promotional website for Lyceum of Subic Bay with dynamic content management and event announcements.',
      link: 'https://lsb-webproj.great-site.net',
      image: `${base}projects/lsb-webproj.png`,
      year: '2024',
      tech: ['PHP', 'Bootstrap', 'MySQL'],
    },
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 4)
  const hasMoreProjects = projects.length > 4

  return (
    <motion.div 
      className={`card h-full ${isDark ? 'card-dark' : 'card-light'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-between mb-4"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h2 className={`text-lg font-semibold flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <span className="text-xl">🎓</span> Academic Projects
        </h2>
        <span className={`text-xs px-2 py-1 rounded-full ${
          isDark ? 'bg-zinc-700 text-zinc-300' : 'bg-gray-100 text-gray-600'
        }`}>
          {projects.length} projects
        </span>
      </motion.div>

      {/* Preload all images */}
      <div className="hidden">
        {projects.map((project) => (
          <img key={project.title} src={project.image} alt="" />
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-xl overflow-hidden transition-all ${
                isDark 
                  ? 'bg-zinc-800 border border-zinc-600 hover:border-zinc-500 hover:bg-zinc-700' 
                  : 'bg-gray-50 border border-gray-200 hover:border-gray-300 hover:bg-gray-100'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              layout
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-28 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  loading="eager"
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark ? 'bg-gradient-to-t from-black/40 to-transparent' : 'bg-gradient-to-t from-white/40 to-transparent'
                }`} />
                {/* Year Badge */}
                <div className={`absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium backdrop-blur-sm ${
                  isDark 
                    ? 'bg-black/60 text-white border border-white/20' 
                    : 'bg-white/80 text-gray-700 border border-gray-200'
                }`}>
                  <FiCalendar className="w-3 h-3" />
                  {project.year}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                      {project.description}
                    </p>
                  </div>
                  {/* Visit Link Button */}
                  <div className={`flex-shrink-0 p-1.5 rounded-full transition-all duration-300 group-hover:scale-110 ${
                    isDark 
                      ? 'bg-zinc-700 group-hover:bg-zinc-600' 
                      : 'bg-gray-200 group-hover:bg-gray-300'
                  }`}>
                    <FiArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isDark ? 'text-zinc-300' : 'text-gray-600'
                    }`} />
                  </div>
                </div>

                {/* Tech Stack - Always Visible */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 text-[10px] font-medium rounded-md ${
                        isDark 
                          ? 'bg-zinc-700 text-zinc-300 border border-zinc-600' 
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* View More/Less Button */}
      {hasMoreProjects && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className={`w-full mt-4 py-2.5 px-4 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
            isDark 
              ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-600 hover:border-zinc-500' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 border border-gray-200 hover:border-gray-300'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {showAll ? (
            <>
              <FiChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <FiChevronDown className="w-4 h-4" />
              View More ({projects.length - 4} more)
            </>
          )}
        </motion.button>
      )}
    </motion.div>
  )
}

export default Projects
