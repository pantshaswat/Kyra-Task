'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Shield, 
  Brain, 
  Lock, 
  BarChart3, 
  Globe, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Eye,
  HeadphonesIcon
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-Time Monitoring',
      description: '24/7 automated surveillance with instant alerts for security incidents, unauthorized access, and unusual activities across campus.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced computer vision and machine learning for behavior analysis, crowd detection, and predictive security insights.',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Lock,
      title: 'Privacy Compliant',
      description: 'FERPA and GDPR compliant with data anonymization, privacy zones, and comprehensive consent management systems.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Operational Insights',
      description: 'Data-driven insights for facility utilization, foot traffic patterns, and resource optimization to improve campus efficiency.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Scalable Infrastructure',
      description: 'Cloud-native architecture that scales with your institution, from small colleges to large university campuses.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Responsive design with mobile-first approach for security teams, administrators, and facility managers on the go.',
      gradient: 'from-teal-500 to-green-500'
    }
  ]

  const stats = [
    { number: '500+', label: 'Educational Institutions', icon: Users },
    { number: '99.9%', label: 'Uptime Reliability', icon: CheckCircle },
    { number: '50M+', label: 'Hours Monitored', icon: Eye },
    { number: '24/7', label: 'Expert Support', icon: HeadphonesIcon }
  ]

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Support', href: '#support' },
    { name: 'About', href: '#about' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CW</span>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                CampusWatch
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="#demo"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              Request Demo
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Intelligent Campus
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Security & Analytics
                </span>
                Platform
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                Enhance campus safety with AI-powered monitoring, real-time alerts, and comprehensive analytics. 
                Trusted by educational institutions worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#demo"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="#features"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center space-x-8 text-blue-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">FERPA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">GDPR Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="group">
                    <div className="flex justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-200 group-hover:text-yellow-300 transition-colors" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 font-medium">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Advanced features designed for modern educational institutions, 
                ensuring safety while maintaining privacy and compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                    tabIndex={0}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Secure Your Campus?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of educational institutions already using CampusWatch 
              to enhance their security and operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#demo"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
              </Link>
              
              <Link
                href="#contact"
                className="bg-transparent border-2 border-gray-400 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CW</span>
                </div>
                <span className="text-xl font-bold">CampusWatch</span>
              </Link>
              <p className="text-gray-400 mb-4 max-w-md">
                Enhancing campus security through intelligent technology. 
                Trusted by educational institutions worldwide for comprehensive 
                safety and analytics solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
                <li><Link href="#api" className="text-gray-400 hover:text-white transition-colors">API Docs</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#training" className="text-gray-400 hover:text-white transition-colors">Training</Link></li>
                <li><Link href="#status" className="text-gray-400 hover:text-white transition-colors">System Status</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 CampusWatch. All rights reserved. Enhancing campus security through intelligent technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage