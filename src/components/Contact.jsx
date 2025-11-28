import { useTheme } from '../context/ThemeContext'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Contact() {
  const { isDark } = useTheme()

  const links = [
    { icon: FiMail, label: 'Email', value: 'seanrichard1022@gmail.com', href: 'mailto:seanrichard1022@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '0917 102 5899', href: 'tel:09171025899' },
  ]

  const socials = [
    { icon: FiGithub, href: 'https://github.com/SeannyBoyyy', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <motion.div 
      className={`card ${isDark ? 'card-dark' : 'card-light'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.h2 
        className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <span className="text-xl">📧</span> Contact
      </motion.h2>
      
      <div className="space-y-3">
        {links.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isDark 
                ? 'bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 text-zinc-200' 
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <link.icon className="w-4 h-4" />
            <span className="text-xs truncate">{link.value}</span>
          </motion.a>
        ))}
      </div>

      {/* Social Links */}
      <motion.div 
        className="flex gap-2 mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        {socials.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg text-xs font-medium transition-colors ${
              isDark 
                ? 'bg-zinc-800 border border-zinc-600 text-zinc-200 hover:bg-zinc-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-4 h-4" />
            {social.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Contact
