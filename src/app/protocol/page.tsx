import { Metadata } from 'next'
import Link from 'next/link'
import { Section, FadeIn } from '@/components/Layout'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'The Protocol - AI That Gets Things Done',
  description: 'Industrial-grade AI agents built on the Nirva Protocol. Reason, Act, Observe - delivering measurable results.',
}

export default function ProtocolPage() {
  return (
    <>
      {/* Header Section */}
      <Section spacing="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-500/5" />
        <div className="relative">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-hero text-white mb-6">
                AI That Gets <span className="text-accent-500">Things Done</span>
              </h1>
              <h2 className="heading-section text-gray-300 mb-8 font-normal">
                The Nirva Protocol is a Digital Workforce built on an{' '}
                <span className="text-accent-500">industrial-grade foundation</span>{' '}
                to solve your most expensive operational challenges.
              </h2>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ReAct Framework Section */}
      <Section background="subtle" spacing="lg">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="heading-section text-white mb-6">
              Agents That Get Things Done
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Built on the proven ReAct framework, our agents think, act, and learn from real-world results.
            </p>
          </div>
        </FadeIn>
        
        {/* ReAct Flow */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-8 bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Reason</h3>
                <p className="text-sm text-gray-400">Analyze & Plan</p>
              </div>
              
              <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Act</h3>
                <p className="text-sm text-gray-400">Execute & Implement</p>
              </div>
              
              <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Observe</h3>
                <p className="text-sm text-gray-400">Learn & Adapt</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.3}>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-accent-500/50 transition-all duration-200 ease-out">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Logistics Agent</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Optimizes supply chain operations, manages inventory, and coordinates shipping logistics with real-time decision making.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-accent-500/50 transition-all duration-200 ease-out">
              <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sales Admin Agent</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Automates proposal generation, manages pipeline data, and handles administrative tasks that consume valuable sales time.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-accent-500/50 transition-all duration-200 ease-out">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collection Agent</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Manages accounts receivable, automates payment follow-ups, and maintains customer relationships during collection processes.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-accent-500/50 transition-all duration-200 ease-out">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">CX Agent</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Provides 24/7 customer support, resolves common issues autonomously, and escalates complex cases with full context.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Problems Solved Section */}
      <Section spacing="lg">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="heading-section text-white mb-6">
              Real-World Problems Our AI Agents Solve
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Measurable impact across core business operations with quantifiable ROI from day one.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.2}>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-accent-500 mb-4">Sales Admin Automation</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated proposal generation
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pipeline data management
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Follow-up automation
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
                <div className="text-2xl font-bold text-accent-500">75%</div>
                <div className="text-sm text-gray-400">Admin hours/order ↓</div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-accent-500 mb-4">Logistics Optimization</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Route optimization
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Inventory management
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Predictive maintenance
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
                <div className="text-2xl font-bold text-accent-500">30%</div>
                <div className="text-sm text-gray-400">Operational costs ↓</div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-accent-500 mb-4">Collections Efficiency</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated payment reminders
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Risk assessment
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Payment plan optimization
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
                <div className="text-2xl font-bold text-accent-500">45%</div>
                <div className="text-sm text-gray-400">Collection time ↓</div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-accent-500 mb-4">Customer Experience</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 support availability
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Instant issue resolution
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Proactive communication
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
                <div className="text-2xl font-bold text-accent-500">85%</div>
                <div className="text-sm text-gray-400">Satisfaction score ↑</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Live Agent Activity */}
      <Section background="subtle" spacing="lg">
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <div>
              <h2 className="heading-section text-white mb-6">
                Live Agent Activity
              </h2>
              <p className="body-large text-gray-300 mb-8">
                Watch our agents work in real-time, processing orders and optimizing operations.
              </p>
              
              {/* Customer Journey Status */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-white font-medium">Initial Contact</span>
                  <span className="text-xs text-gray-400">(4 operations complete)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-white font-medium">Order Processing</span>
                  <span className="text-xs text-gray-400">(7 operations complete)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white font-medium">Route Optimization</span>
                  <span className="text-xs text-gray-400">(5 operations active)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <span className="text-sm text-gray-400 font-medium">Delivery Execution</span>
                  <span className="text-xs text-gray-500">(pending)</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live Activity Log
              </h3>
              <div className="space-y-3 text-sm max-h-80 overflow-y-auto">
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-gray-500 font-mono mt-1 flex-shrink-0">22:10:39</span>
                  <div>
                    <span className="text-blue-400 font-medium">[Enhanced Route Agent]</span>
                    <p className="text-gray-300 text-xs">Analyzing delivery requirements: Customer location, vehicle capacity, schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-gray-500 font-mono mt-1 flex-shrink-0">22:10:38</span>
                  <div>
                    <span className="text-green-400 font-medium">[Enhanced Pricing Agent]</span>
                    <p className="text-gray-300 text-xs">Optimal price determined: €3.47/gal (15% volume discount applied)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-gray-500 font-mono mt-1 flex-shrink-0">22:10:37</span>
                  <div>
                    <span className="text-purple-400 font-medium">[Inventory Agent]</span>
                    <p className="text-gray-300 text-xs">Inventory check: 12,400 gal diesel available. Allocation approved</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-gray-500 font-mono mt-1 flex-shrink-0">22:10:36</span>
                  <div>
                    <span className="text-blue-400 font-medium">[Enhanced Order Agent]</span>
                    <p className="text-gray-300 text-xs">NLP parsing complete. Product: Diesel, Quantity: 5000 gal, Timeline: 7 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-gray-500 font-mono mt-1 flex-shrink-0">22:10:34</span>
                  <div>
                    <span className="text-yellow-400 font-medium">[Customer Intelligence Agent]</span>
                    <p className="text-gray-300 text-xs">Customer classification: Mid-market retailer. Confidence: 94%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-gray-500 font-mono mt-1 flex-shrink-0">22:10:32</span>
                  <div>
                    <span className="text-yellow-400 font-medium">[Customer Intelligence Agent]</span>
                    <p className="text-gray-300 text-xs">New customer inquiry detected. Initiating profile analysis...</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="accent" spacing="md">
        <FadeIn>
          <div className="text-center">
            <h2 className="heading-section text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your operations with industrial-grade AI that delivers measurable results from day one.
            </p>
            <Link href="/partnership">
              <Button size="lg">
                Explore the Partnership
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}