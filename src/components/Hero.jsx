import { useTheme } from '../context/ThemeContext'
import { FiArrowUpRight, FiSun, FiMoon } from 'react-icons/fi'

function Hero() {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <section className="pb-8">
      {/* Mobile profile image */}
      <div className="lg:hidden mb-6">
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold ${
          isDark ? 'bg-zinc-800 text-white' : 'bg-gray-200 text-gray-900'
        }`}>
          SR
        </div>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className={`text-3xl md:text-4xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Sean Richard Sakamoto
          </h1>
          <p className={`mt-2 text-lg ${
            isDark ? 'text-zinc-400' : 'text-gray-600'
          }`}>
            Full Stack Developer • Student
          </p>
          <p className={`mt-1 text-sm ${
            isDark ? 'text-zinc-500' : 'text-gray-500'
          }`}>
            Subic, Zambales, Philippines
          </p>
        </div>
        
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors ${
            isDark 
              ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' 
              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>
      </div>

      {/* Quick links */}
      <div className="flex flex-wrap gap-3 mt-6">
        <a 
          href="mailto:seanrichard1022@gmail.com"
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isDark 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          Send Email
        </a>
        <a 
          href="https://github.com/SeannyBoyyy" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isDark 
              ? 'bg-zinc-800 text-white hover:bg-zinc-700' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          GitHub <FiArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 mt-6">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className={`text-sm ${isDark ? 'text-zinc-500' : 'text-gray-500'}`}>
          Available for opportunities
        </span>
      </div>
    </section>
  )
}

export default Hero
