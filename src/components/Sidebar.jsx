import { useTheme } from '../context/ThemeContext'
import { FiGithub, FiMail, FiMapPin } from 'react-icons/fi'

function Sidebar() {
  const { isDark } = useTheme()

  return (
    <div className="sticky top-12">
      {/* Profile Card */}
      <div className={`rounded-2xl p-6 ${
        isDark ? 'bg-zinc-900' : 'bg-white shadow-sm border border-gray-100'
      }`}>
        {/* Avatar */}
        <div className={`w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto ${
          isDark ? 'bg-zinc-800 text-white' : 'bg-gray-100 text-gray-900'
        }`}>
          SR
        </div>

        {/* Name */}
        <h2 className={`text-lg font-semibold text-center mt-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Sean Richard Sakamoto
        </h2>
        
        <p className={`text-sm text-center mt-1 ${
          isDark ? 'text-zinc-500' : 'text-gray-500'
        }`}>
          Full Stack Developer
        </p>

        {/* Location */}
        <div className={`flex items-center justify-center gap-1.5 mt-3 text-sm ${
          isDark ? 'text-zinc-500' : 'text-gray-500'
        }`}>
          <FiMapPin className="w-3.5 h-3.5" />
          Subic, Zambales
        </div>

        {/* Links */}
        <div className="mt-6 space-y-2">
          <a
            href="mailto:seanrichard1022@gmail.com"
            className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            <FiMail className="w-4 h-4" />
            Send Email
          </a>
          <a
            href="https://github.com/SeannyBoyyy"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isDark 
                ? 'bg-zinc-800 text-white hover:bg-zinc-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            <FiGithub className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* Quick Stats */}
      <div className={`rounded-2xl p-5 mt-4 ${
        isDark ? 'bg-zinc-900' : 'bg-white shadow-sm border border-gray-100'
      }`}>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              3+
            </div>
            <div className={`text-xs ${isDark ? 'text-zinc-500' : 'text-gray-500'}`}>
              Projects
            </div>
          </div>
          <div>
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              4th
            </div>
            <div className={`text-xs ${isDark ? 'text-zinc-500' : 'text-gray-500'}`}>
              Year Student
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className={`rounded-2xl p-4 mt-4 ${
        isDark ? 'bg-zinc-900' : 'bg-white shadow-sm border border-gray-100'
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className={`text-sm ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
            Available for work
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
