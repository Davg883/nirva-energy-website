'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'default' | 'subtle' | 'accent'
  spacing?: 'sm' | 'md' | 'lg'
  id?: string
}

export function Section({ 
  children, 
  className, 
  background = 'default', 
  spacing = 'lg',
  id 
}: SectionProps) {
  const backgrounds = {
    default: 'bg-gray-900',
    subtle: 'bg-gray-800/30',
    accent: 'bg-gradient-to-r from-primary-900/20 to-accent-500/5'
  }
  
  const spacings = {
    sm: 'py-12',
    md: 'py-16 lg:py-20',
    lg: 'py-16 lg:py-24'
  }
  
  return (
    <section 
      id={id}
      className={cn(
        backgrounds[background],
        spacings[spacing],
        className
      )}
    >
      <div className="container-width">
        {children}
      </div>
    </section>
  )
}

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className 
}: FadeInProps) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  }
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.4, 0, 0.2, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}