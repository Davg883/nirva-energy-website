'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Vision', href: '/' },
  { name: 'The Protocol', href: '/protocol' },
  { name: 'Partnership', href: '/partnership' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50"
    >
      <nav className="container-width py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
              aria-label="Nirva Energy Home"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-white">
                Nirva Energy
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-3 py-2 text-sm font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md',
                      isActive
                        ? 'text-accent-500'
                        : 'text-gray-300 hover:text-white'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500 rounded-full"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}