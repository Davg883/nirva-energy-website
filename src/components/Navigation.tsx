'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', description: 'Vision & Results' },
  { name: 'Protocol', href: '/protocol', description: 'Technical Foundation' },
  { name: 'Partnership', href: '/partnership', description: 'Strategic Alliance' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800/50 shadow-lg"
    >
      <nav className="container-wide py-6 lg:py-8" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-2 group"
              aria-label="Nirva Energy Home"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
                <span className="text-gray-900 font-bold text-lg lg:text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-accent-500 transition-colors duration-200">
                  Nirva Energy
                </span>
                <span className="text-xs lg:text-sm text-gray-400 font-medium">
                  Strategic AI Solutions
                </span>
              </div>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative group flex flex-col items-center px-4 lg:px-6 py-3 lg:py-4 rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900',
                      isActive
                        ? 'bg-accent-500/10 border border-accent-500/20 text-accent-500'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className={cn(
                      'text-sm lg:text-base font-semibold mb-1',
                      isActive ? 'text-accent-500' : 'text-white group-hover:text-accent-400'
                    )}>
                      {item.name}
                    </span>
                    <span className={cn(
                      'text-xs lg:text-sm font-medium',
                      isActive ? 'text-accent-400/80' : 'text-gray-400 group-hover:text-gray-300'
                    )}>
                      {item.description}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-2 right-2 h-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile Menu Button - for future mobile menu implementation */}
          <div className="md:hidden">
            <button className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}