'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', description: 'Vision & Results' },
  { name: 'Protocol', href: '/protocol', description: 'Technical Foundation' },
  { name: 'Partnership', href: '/partnership', description: 'Strategic Alliance' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname])

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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden relative z-50 bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50"
            >
              <div className="px-2 pt-6 pb-8 space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          'block px-4 py-4 rounded-xl transition-all duration-200 border',
                          isActive
                            ? 'bg-accent-500/10 border-accent-500/20 text-accent-500'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50 border-transparent hover:border-gray-700/50'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <div className="flex flex-col">
                          <span className={cn(
                            'text-base font-semibold mb-1',
                            isActive ? 'text-accent-500' : 'text-white'
                          )}>
                            {item.name}
                          </span>
                          <span className={cn(
                            'text-sm font-medium',
                            isActive ? 'text-accent-400/80' : 'text-gray-400'
                          )}>
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}