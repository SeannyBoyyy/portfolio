import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { isDark } = useTheme()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/SeannyBoyyy', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:seanrichard1022@gmail.com', label: 'Email' },
  ]

  return (
    <footer className={`pt-16 pb-8 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-semibold">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Sean</span>
              <span className="text-blue-500">.</span>
            </a>
            <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Building digital experiences with passion and precision. 
              Always eager to learn and create something meaningful.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg transition-all duration-200 ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className={`mt-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              seanrichard1022@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px mb-8 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            © {currentYear} Sean Richard Sakamoto. All rights reserved.
          </p>
          
          <p className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Made with <FaHeart className="w-3 h-3 text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
