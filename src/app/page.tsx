import { Metadata } from 'next'
import Link from 'next/link'
import { Section, FadeIn } from '@/components/Layout'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Vision - Strategic AI Solutions',
  description: 'The AI Hype Bubble is Over. The Industry Demands Strategic Advantage. Discover the Nirva Protocol.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="relative overflow-hidden py-24 lg:py-32 xl:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-500/5" />
        <div className="relative container-wide">
          <FadeIn>
            <div className="text-center max-w-6xl mx-auto">
              <h1 className="heading-hero text-white mb-8 lg:mb-12">
                The AI Hype Bubble is <span className="text-accent-500">Over</span>.
              </h1>
              <h2 className="heading-section text-gray-300 mb-12 lg:mb-16 font-normal max-w-5xl mx-auto">
                The Industry&apos;s Reality Demands a Strategic Advantage. This is the{' '}
                <span className="text-accent-500 font-semibold">Nirva Protocol</span>.
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link href="/protocol">
                  <Button size="lg" className="w-full sm:w-auto px-12 py-6 text-xl">
                    Discover The Protocol
                  </Button>
                </Link>
                <Link href="/partnership">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto px-12 py-6 text-xl">
                    Explore Partnership
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Three-Step Journey Section - Enhanced for Prominence */}
      <Section spacing="lg" className="py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-500/10">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-24 lg:mb-32 xl:mb-40">
              <h2 className="heading-section text-white mb-12 lg:mb-16">
                Understanding the <span className="text-accent-500">Nirva Advantage</span>
              </h2>
              <p className="body-large text-gray-300 max-w-5xl mx-auto mb-16 lg:mb-20">
                Navigate the complexity of AI implementation through our proven three-stage approach.
                Each step builds upon the last to create transformative business value.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-20 xl:gap-24 mb-16 lg:mb-20 xl:mb-24">
            {/* Step 1: Vision */}
            <FadeIn delay={0.2}>
              <div className="text-center group bg-gray-800/40 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-700/60 hover:border-accent-500/60 hover:bg-gray-800/60 transition-all duration-500 shadow-xl">
                <div className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-br from-accent-400 to-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-10 lg:mb-12 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <span className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">01</span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 lg:mb-10">Vision & Results</h3>
                <p className="text-xl lg:text-2xl xl:text-3xl text-gray-200 mb-10 lg:mb-12 leading-relaxed max-w-lg mx-auto">
                  See real-world performance metrics from our Isle of Wight deployment. 
                  Understand the measurable impact of strategic AI implementation.
                </p>
                <Link href="/" className="inline-flex items-center text-accent-400 hover:text-accent-300 font-bold text-xl lg:text-2xl transition-colors group-hover:scale-105 transform duration-300">
                  View Performance Data
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
            
            {/* Step 2: Protocol */}
            <FadeIn delay={0.4}>
              <div className="text-center group bg-gray-800/40 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-700/60 hover:border-blue-500/60 hover:bg-gray-800/60 transition-all duration-500 shadow-xl">
                <div className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-10 lg:mb-12 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <span className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">02</span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 lg:mb-10">The Protocol</h3>
                <p className="text-xl lg:text-2xl xl:text-3xl text-gray-200 mb-10 lg:mb-12 leading-relaxed max-w-lg mx-auto">
                  Dive deep into our ReAct framework and RAG architecture. 
                  Discover the technical foundation that makes reliable AI possible.
                </p>
                <Link href="/protocol" className="inline-flex items-center text-blue-300 hover:text-blue-200 font-bold text-xl lg:text-2xl transition-colors group-hover:scale-105 transform duration-300">
                  Explore Technology
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
            
            {/* Step 3: Partnership */}
            <FadeIn delay={0.6}>
              <div className="text-center group bg-gray-800/40 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-700/60 hover:border-purple-500/60 hover:bg-gray-800/60 transition-all duration-500 shadow-xl">
                <div className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-10 lg:mb-12 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <span className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">03</span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 lg:mb-10">Strategic Partnership</h3>
                <p className="text-xl lg:text-2xl xl:text-3xl text-gray-200 mb-10 lg:mb-12 leading-relaxed max-w-lg mx-auto">
                  Ready to transform your operations? 
                  Begin your strategic AI journey with our proven implementation pathway.
                </p>
                <Link href="/partnership" className="inline-flex items-center text-purple-300 hover:text-purple-200 font-bold text-xl lg:text-2xl transition-colors group-hover:scale-105 transform duration-300">
                  Start Partnership
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section spacing="lg" className="py-32 lg:py-40 xl:py-48">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-24 lg:mb-32 xl:mb-40">
              <h2 className="heading-section text-white mb-12 lg:mb-16">
                Proven Results: Real-World Performance
              </h2>
              <p className="body-large text-gray-200 max-w-5xl mx-auto">
                Our Isle of Wight deployment delivers measurable ROI and operational excellence.
                These aren't projections – they're documented results from live operations.
              </p>
            </div>
          </FadeIn>
          
          {/* Performance Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 xl:gap-20 mb-24 lg:mb-32 xl:mb-40">
          <FadeIn delay={0.2}>
            <div className="bg-gray-800/60 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-600 text-center hover:border-accent-500/60 hover:bg-gray-800/80 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-accent-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8 lg:mb-10">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-accent-400 mb-4 lg:mb-6">+35%</div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Vehicle Utilization</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 lg:mb-8">68% → 92%</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed">AI-driven route optimization dramatically increased fleet efficiency</div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="bg-gray-800/60 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-600 text-center hover:border-blue-500/60 hover:bg-gray-800/80 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8 lg:mb-10">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-300 mb-4 lg:mb-6">-98%</div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Processing Time</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 lg:mb-8">12 min → 7.3 sec</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed">Autonomous agents process orders instantly from email and web forms</div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="bg-gray-800/50 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-700 text-center hover:border-green-500/50 hover:bg-gray-800/70 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 lg:mb-10">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-green-400 mb-4 lg:mb-6">+35%</div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Pricing Accuracy</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-400 mb-6 lg:mb-8">73% → 98.7%</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">Dynamic pricing considers customer tier, market conditions, and volume</div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <div className="bg-gray-800/50 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-700 text-center hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 lg:mb-10">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-purple-400 mb-4 lg:mb-6">+50%</div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Customer Satisfaction</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-400 mb-6 lg:mb-8">3.2/5.0 → 4.8/5.0</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">Intelligent, proactive service and faster resolution times</div>
            </div>
          </FadeIn>
        </div>
        
        {/* Business Impact Summary */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 xl:gap-20">
          <FadeIn delay={0.6}>
            <div className="bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-3xl p-10 lg:p-12 xl:p-16 border border-accent-500/20 text-center hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="text-6xl lg:text-7xl xl:text-8xl font-bold text-accent-500 mb-6 lg:mb-8">$2.4M</div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Annual Revenue Increase</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-400">New efficiencies & proactive sales</div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.7}>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-3xl p-10 lg:p-12 xl:p-16 border border-green-500/20 text-center hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="text-6xl lg:text-7xl xl:text-8xl font-bold text-green-400 mb-6 lg:mb-8">87%</div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Efficiency Gains</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-400">Process automation achieved</div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-3xl p-10 lg:p-12 xl:p-16 border border-blue-500/20 text-center hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-400 mb-6 lg:mb-8">94%</div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">Error Reduction</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-400">Fewer manual mistakes</div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.9}>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-3xl p-10 lg:p-12 xl:p-16 border border-purple-500/20 text-center hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="text-6xl lg:text-7xl xl:text-8xl font-bold text-purple-400 mb-6 lg:mb-8">340%</div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">ROI Achievement</div>
              <div className="text-lg lg:text-xl xl:text-2xl text-gray-400">Within first 18 months</div>
            </div>
          </FadeIn>
        </div>
        </div>
      </Section>

      {/* AI Intelligence Metrics */}
      <Section background="subtle" spacing="lg" className="py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-gray-900/50 via-transparent to-primary-900/20">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-24 lg:mb-32 xl:mb-40">
              <h2 className="heading-section text-white mb-12 lg:mb-16">
                AI Intelligence & System Reliability
              </h2>
              <p className="body-large text-gray-200 max-w-5xl mx-auto">
                Our agents demonstrate industry-leading accuracy and dependability in real-world operations.
                These metrics showcase the sophisticated intelligence behind our autonomous systems.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 xl:gap-24">
            <FadeIn delay={0.2}>
              <div className="text-center group">
                <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-accent-500/30 rounded-full flex items-center justify-center mx-auto mb-10 lg:mb-12 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <span className="text-5xl lg:text-6xl xl:text-7xl font-bold text-accent-400">94.7%</span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8">Prediction Accuracy</h3>
                <p className="text-gray-200 text-xl lg:text-2xl xl:text-3xl leading-relaxed">Market forecasting and demand prediction reliability</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="text-center group">
                <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-10 lg:mb-12 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <span className="text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-300">91.2%</span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8">Decision Confidence</h3>
                <p className="text-gray-200 text-xl lg:text-2xl xl:text-3xl leading-relaxed">AI system confidence in autonomous decisions</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="text-center group">
                <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-10 lg:mb-12 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <span className="text-5xl lg:text-6xl xl:text-7xl font-bold text-green-300">87.3%</span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8">Learning Rate</h3>
                <p className="text-gray-200 text-xl lg:text-2xl xl:text-3xl leading-relaxed">Continuous improvement and adaptation speed</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.8}>
              <div className="text-center group">
                <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-10 lg:mb-12 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <span className="text-5xl lg:text-6xl xl:text-7xl font-bold text-purple-300">99.8%</span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8">System Reliability</h3>
                <p className="text-gray-200 text-xl lg:text-2xl xl:text-3xl leading-relaxed">Uptime and operational consistency</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Blueprint Section */}
      <Section spacing="lg" className="py-32 lg:py-40 xl:py-48">
        <div className="container-wide">
        <FadeIn>
          <div className="text-center mb-20 lg:mb-28 xl:mb-36">
            <h2 className="heading-section text-white mb-12 lg:mb-16">
              Our Blueprint for Success
            </h2>
            <p className="body-large text-gray-200 max-w-5xl mx-auto">
              Three core pillars that transform AI from expensive experimentation into strategic advantage.
              This is the foundation of every successful deployment.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-16 lg:gap-20 xl:gap-24">
          <FadeIn delay={0.2}>
            <div className="text-center group bg-gray-800/30 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-700/50 hover:border-accent-500/50 hover:bg-gray-800/50 transition-all duration-500">
              <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-accent-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 lg:mb-10 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 lg:mb-8">Autonomous Action</h3>
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed">
                ReAct framework enables AI that reasons, acts, and observes - delivering results without constant oversight.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="text-center group bg-gray-800/30 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-700/50 hover:border-accent-500/50 hover:bg-gray-800/50 transition-all duration-500">
              <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-accent-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 lg:mb-10 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 lg:mb-8">Industrial-Grade Reliability</h3>
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed">
                Built with Rust for memory safety, performance, and the kind of reliability that enterprise operations demand.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="text-center group bg-gray-800/30 rounded-3xl p-10 lg:p-12 xl:p-16 border border-gray-700/50 hover:border-accent-500/50 hover:bg-gray-800/50 transition-all duration-500">
              <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-accent-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 lg:mb-10 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 lg:mb-8">Grounded Intelligence</h3>
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed">
                RAG architecture grounds responses in trusted data sources, eliminating hallucinations and ensuring accuracy.
              </p>
            </div>
          </FadeIn>
        </div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section background="accent" spacing="lg" className="py-32 lg:py-40 xl:py-48">
        <div className="container-wide">
        <FadeIn>
          <div className="text-center mb-16 lg:mb-20 xl:mb-24">
            <h2 className="heading-section text-white mb-12 lg:mb-16">
              From Internal ROI to Scalable SaaS
            </h2>
            <p className="body-large text-gray-300 max-w-5xl mx-auto">
              Our strategic roadmap transforms proven internal success into industry-wide advantage.
              This is how we scale AI excellence.
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 xl:gap-20">
            <FadeIn delay={0.2}>
              <div className="text-center bg-primary-900/30 rounded-3xl p-10 lg:p-12 xl:p-16 border border-primary-500/20 hover:border-primary-500/50 transition-all duration-500">
                <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-primary-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 lg:mb-10">
                  <span className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-300">1</span>
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 lg:mb-8">Nirva Protocol</h3>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                  Industrial-grade AI framework with autonomous agents, grounded intelligence, and measurable outcomes.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="text-center bg-accent-900/30 rounded-3xl p-10 lg:p-12 xl:p-16 border border-accent-500/20 hover:border-accent-500/50 transition-all duration-500">
                <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-accent-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 lg:mb-10">
                  <span className="text-3xl lg:text-4xl xl:text-5xl font-bold text-accent-500">2</span>
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 lg:mb-8">Nirva Energy</h3>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                  Operational validation and ROI demonstration through our Isle of Wight energy optimization deployment.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="text-center bg-green-900/30 rounded-3xl p-10 lg:p-12 xl:p-16 border border-green-500/20 hover:border-green-500/50 transition-all duration-500">
                <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 lg:mb-10">
                  <span className="text-3xl lg:text-4xl xl:text-5xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 lg:mb-8">Licensable SaaS</h3>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                  Proven framework scaled to transform operations across industries through strategic partnerships.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.8}>
            <div className="text-center mt-16 lg:mt-20 xl:mt-24">
              <Link href="/partnership">
                <Button size="lg" className="px-16 py-8 text-2xl lg:text-3xl">
                  Join Our Strategic Vision
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
        </div>
      </Section>
    </>
  )
}
