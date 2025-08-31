import { Metadata } from 'next'
import { Section, FadeIn } from '@/components/Layout'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Partnership - Strategic AI Alliance',
  description: 'Join our strategic partnership to build the next decade advantage through industrial-grade AI solutions.',
}

export default function PartnershipPage() {
  return (
    <>
      {/* Header Section */}
      <Section spacing="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-500/5" />
        <div className="relative">
          <FadeIn>
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="heading-hero text-white mb-6">
                A Strategic Partnership to Build Our{' '}
                <span className="text-accent-500">Next Decade's Advantage</span>
              </h1>
              <h2 className="heading-section text-gray-300 mb-8 font-normal">
                We are investing in leadership, not just headcount, to augment our team with a{' '}
                <span className="text-accent-500">powerful digital workforce</span>.
              </h2>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Team Section */}
      <Section background="subtle" spacing="lg">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="heading-section text-white mb-6">
              The Strategic Partnership: The Team We Need to Build the Future
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Three key leadership roles that will transform our operational capacity and competitive advantage.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <FadeIn delay={0.2}>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 text-center hover:border-accent-500/50 transition-all duration-200 ease-out">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Operations Manager</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Strategic leader to oversee AI agent deployment across all operational domains, ensuring seamless integration and maximum ROI.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Process optimization & automation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Cross-functional team coordination</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Performance metrics & ROI tracking</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 text-center hover:border-accent-500/50 transition-all duration-200 ease-out">
              <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Key Sales Manager</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Revenue-focused leader to scale our client acquisition through strategic partnerships and enterprise sales excellence.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Enterprise client relationship management</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Strategic partnership development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Revenue growth & market expansion</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 text-center hover:border-accent-500/50 transition-all duration-200 ease-out">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic AI Architect</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Technical visionary to drive our AI innovation roadmap and ensure our solutions remain at the cutting edge of industrial AI.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">AI system architecture & scalability</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Research & development leadership</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Technical strategy & innovation</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section spacing="lg">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="heading-section text-white mb-6">
              Timeline & Progression Ladder
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              A strategic roadmap with clear milestones and measurable outcomes at each phase.
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-accent-500/30"></div>
            
            <div className="space-y-12">
              <FadeIn delay={0.2}>
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-gray-900 font-bold text-lg">90</span>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-3">Days: Foundation & Integration</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-accent-500 mb-2">Team Assembly</h4>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          <li>• Key leadership recruitment</li>
                          <li>• Strategic planning workshops</li>
                          <li>• Process mapping & analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-accent-500 mb-2">Initial Deployment</h4>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          <li>• First agent implementation</li>
                          <li>• System integration testing</li>
                          <li>• Performance baseline establishment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-lg">180</span>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-3">Days: Optimization & Scale</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">Full Agent Suite</h4>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          <li>• Complete operational coverage</li>
                          <li>• Cross-agent coordination</li>
                          <li>• Advanced automation workflows</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">Performance Metrics</h4>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          <li>• 40-60% efficiency gains</li>
                          <li>• Measurable cost reductions</li>
                          <li>• Enhanced customer satisfaction</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.6}>
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-gray-900 font-bold text-lg">360</span>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-3">Days: Strategic Advantage</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-2">Market Leadership</h4>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          <li>• Industry-leading efficiency</li>
                          <li>• Competitive differentiation</li>
                          <li>• Revenue growth acceleration</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-2">SaaS Foundation</h4>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          <li>• Proven operational model</li>
                          <li>• Scalable technology platform</li>
                          <li>• Strategic partnership pipeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="accent" spacing="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="heading-section text-white mb-6">
                Become a Strategic Partner
              </h2>
              <p className="body-large text-gray-300 mb-8">
                Join us in building the next generation of industrial AI solutions. Together, we'll create sustainable competitive advantages that transform entire industries.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Comprehensive Technical Assessment</h4>
                    <p className="text-gray-300 text-sm">Deep-dive analysis of your operational requirements and AI readiness</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Strategic Roadmap Development</h4>
                    <p className="text-gray-300 text-sm">Customized implementation plan with clear milestones and ROI projections</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ongoing Partnership & Support</h4>
                    <p className="text-gray-300 text-sm">Continuous optimization and strategic guidance throughout implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Request a Strategic Briefing</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-200 ease-out"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-200 ease-out"
                    placeholder="Company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-200 ease-out"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-200 ease-out resize-none"
                    placeholder="Tell us about your operational challenges and strategic goals..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full justify-center"
                >
                  Request Strategic Briefing
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}