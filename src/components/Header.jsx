import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon, FiMail, FiGithub, FiMapPin, FiFileText } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const base = import.meta.env.BASE_URL

  // Determine which image to show: clicked > hovered > normal
  const getProfileImage = () => {
    if (isClicked) return `${base}projects/2x2-click.png`
    if (isHovered) return `${base}projects/2x2-shy.png`
    return `${base}projects/2x2-pic.png`
  }

  const handleClick = () => {
    setIsClicked(true)
    // Reset after a short delay
    setTimeout(() => setIsClicked(false), 500)
  }

  return (
    <motion.div 
      className={`card ${isDark ? 'card-dark' : 'card-light'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Profile Picture */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div 
            className={`relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden cursor-pointer ring-2 ${
              isDark 
                ? 'ring-zinc-600' 
                : 'ring-gray-200'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            {/* Office with Glass Wall Background */}
            <div className={`absolute inset-0 ${isDark ? 'bg-zinc-900' : 'bg-slate-100'}`}>
              {/* Upper half - Wall/Ceiling */}
              <div className={`absolute top-0 left-0 right-0 h-1/2 ${
                isDark 
                  ? 'bg-gradient-to-b from-zinc-800 to-zinc-700' 
                  : 'bg-gradient-to-b from-gray-200 to-gray-100'
              }`} />
              
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Glass partition frame */}
                <rect x="0" y="45" width="100" height="3" className={isDark ? 'fill-zinc-500' : 'fill-gray-400'} />
                <rect x="0" y="47" width="2" height="53" className={isDark ? 'fill-zinc-500' : 'fill-gray-400'} />
                <rect x="32" y="47" width="2" height="53" className={isDark ? 'fill-zinc-500' : 'fill-gray-400'} />
                <rect x="65" y="47" width="2" height="53" className={isDark ? 'fill-zinc-500' : 'fill-gray-400'} />
                <rect x="98" y="47" width="2" height="53" className={isDark ? 'fill-zinc-500' : 'fill-gray-400'} />
                
                {/* Glass panels - semi-transparent */}
                <rect x="2" y="48" width="30" height="52" className={isDark ? 'fill-cyan-900/20' : 'fill-blue-200/30'} />
                <rect x="34" y="48" width="31" height="52" className={isDark ? 'fill-cyan-900/20' : 'fill-blue-200/30'} />
                <rect x="67" y="48" width="31" height="52" className={isDark ? 'fill-cyan-900/20' : 'fill-blue-200/30'} />
                
                {/* Office floor behind glass */}
                <rect x="0" y="70" width="100" height="30" className={isDark ? 'fill-zinc-800/80' : 'fill-gray-300/80'} />
                
                {/* Computer workstations behind glass */}
                {/* Desk 1 */}
                <rect x="5" y="75" width="22" height="10" className={isDark ? 'fill-zinc-600' : 'fill-gray-400'} />
                <rect x="8" y="68" width="10" height="8" className={isDark ? 'fill-zinc-700' : 'fill-gray-500'} />
                <rect x="9" y="69" width="8" height="6" className={isDark ? 'fill-blue-900' : 'fill-blue-300'} />
                {isDark && <rect x="10" y="70" width="6" height="4" className="fill-blue-400/40" />}
                <rect x="19" y="72" width="5" height="3" className={isDark ? 'fill-zinc-600' : 'fill-gray-400'} />
                
                {/* Desk 2 */}
                <rect x="38" y="75" width="22" height="10" className={isDark ? 'fill-zinc-600' : 'fill-gray-400'} />
                <rect x="42" y="68" width="10" height="8" className={isDark ? 'fill-zinc-700' : 'fill-gray-500'} />
                <rect x="43" y="69" width="8" height="6" className={isDark ? 'fill-green-900' : 'fill-green-200'} />
                {isDark && <rect x="44" y="70" width="6" height="4" className="fill-green-400/40" />}
                <rect x="53" y="72" width="5" height="3" className={isDark ? 'fill-zinc-600' : 'fill-gray-400'} />
                
                {/* Desk 3 */}
                <rect x="72" y="75" width="22" height="10" className={isDark ? 'fill-zinc-600' : 'fill-gray-400'} />
                <rect x="76" y="68" width="10" height="8" className={isDark ? 'fill-zinc-700' : 'fill-gray-500'} />
                <rect x="77" y="69" width="8" height="6" className={isDark ? 'fill-purple-900' : 'fill-purple-200'} />
                {isDark && <rect x="78" y="70" width="6" height="4" className="fill-purple-400/40" />}
                <rect x="87" y="72" width="5" height="3" className={isDark ? 'fill-zinc-600' : 'fill-gray-400'} />
                
                {/* Office chairs */}
                <ellipse cx="16" cy="88" rx="5" ry="3" className={isDark ? 'fill-zinc-700' : 'fill-gray-500'} />
                <ellipse cx="50" cy="88" rx="5" ry="3" className={isDark ? 'fill-zinc-700' : 'fill-gray-500'} />
                <ellipse cx="84" cy="88" rx="5" ry="3" className={isDark ? 'fill-zinc-700' : 'fill-gray-500'} />
                
                {/* Glass reflection lines */}
                <line x1="5" y1="50" x2="28" y2="65" className={isDark ? 'stroke-white/5' : 'stroke-white/20'} strokeWidth="1" />
                <line x1="38" y1="52" x2="60" y2="68" className={isDark ? 'stroke-white/5' : 'stroke-white/20'} strokeWidth="1" />
                <line x1="70" y1="50" x2="95" y2="67" className={isDark ? 'stroke-white/5' : 'stroke-white/20'} strokeWidth="1" />
                
                {/* Ceiling lights in upper area */}
                <rect x="15" y="8" width="20" height="4" rx="1" className={isDark ? 'fill-zinc-600' : 'fill-gray-300'} />
                <rect x="65" y="8" width="20" height="4" rx="1" className={isDark ? 'fill-zinc-600' : 'fill-gray-300'} />
                {isDark && (
                  <>
                    <rect x="17" y="9" width="16" height="2" className="fill-yellow-100/30" />
                    <rect x="67" y="9" width="16" height="2" className="fill-yellow-100/30" />
                  </>
                )}
              </svg>
            </div>
            
            <img 
              src={getProfileImage()}
              alt="Sean Richard Sakamoto"
              className="relative w-full h-full object-cover transition-all duration-300"
            />
          </div>
        </motion.div>

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
                Sean Richard D. Sakamoto
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
            
            {/* Theme Toggle Switch */}
            <motion.div
              className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors ${
                isDark ? 'bg-zinc-700' : 'bg-gray-200'
              }`}
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
            >
              {/* Switch Track Icons */}
              <div className="absolute inset-0 flex items-center justify-between px-1.5">
                <FiMoon className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-blue-300' : 'text-gray-400'}`} />
                <FiSun className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-zinc-500' : 'text-yellow-400'}`} />
              </div>
              {/* Switch Knob */}
              <motion.div
                className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center ${
                  isDark ? 'bg-zinc-900' : 'bg-white'
                }`}
                animate={{ x: isDark ? 2 : 28 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {isDark ? (
                  <FiMoon className="w-3.5 h-3.5 text-blue-300" />
                ) : (
                  <FiSun className="w-3.5 h-3.5 text-yellow-400" />
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="mailto:seamdesagun@gmail.com"
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
            <motion.a
              href={`${base}SakamotoSR_CV.pdf`}
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
              <FiFileText className="w-4 h-4" />
              View Full CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header
