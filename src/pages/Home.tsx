import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  Palette, 
  Shield, 
  Smartphone, 
  Code, 
  Download,
  Star,
  Users,
  Package,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'

const Home: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for performance with minimal bundle size impact and tree-shaking support.'
    },
    {
      icon: Palette,
      title: 'Fully Customizable',
      description: 'Style with CSS or Tailwind CSS. Built-in dark mode and theme support.'
    },
    {
      icon: Shield,
      title: 'Accessibility First',
      description: 'WCAG compliant with proper ARIA support and keyboard navigation.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach with responsive breakpoints for all devices.'
    },
    {
      icon: Code,
      title: 'TypeScript Ready',
      description: 'Full type safety out of the box with comprehensive TypeScript support.'
    },
    {
      icon: Sparkles,
      title: 'Modern Animations',
      description: 'Smooth animations powered by Framer Motion with glassmorphism effects.'
    }
  ]

  const stats = [
    { label: 'Components', value: '19', icon: Package },
    { label: 'Bundle Size', value: '~25KB', icon: Zap },
    { label: 'TypeScript', value: '100%', icon: Code },
    { label: 'Accessibility', value: 'WCAG', icon: Shield }
  ]

  const componentCategories = [
    {
      title: 'Core Components',
      count: 1,
      description: 'Essential UI elements like buttons and inputs',
      components: ['Button']
    },
    {
      title: 'Form Components',
      count: 6,
      description: 'Complete form controls and validation',
      components: ['InputField', 'Select', 'Checkbox', 'RadioGroup', 'Switch', 'DatePicker']
    },
    {
      title: 'Navigation',
      count: 3,
      description: 'Navigation and wayfinding components',
      components: ['Tabs', 'Breadcrumbs', 'Pagination']
    },
    {
      title: 'Display & Feedback',
      count: 9,
      description: 'Visual feedback and content display',
      components: ['Modal', 'Alert', 'Tooltip', 'Avatar', 'Badge', 'Progress', 'Skeleton', 'Loader', 'Accordion']
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="hero-gradient rounded-3xl p-12 mb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">v1.2.0 - Latest Release</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            React UI Kit
            <span className="block text-4xl font-normal text-white/80 mt-2">
              19 Essential Components
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            A lightweight, customizable component library for modern React applications. 
            Built with accessibility, performance, and developer experience in mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/installation"
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Get Started</span>
            </Link>
            
            <Link
              to="/components/Button"
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <span>View Components</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="stats-card rounded-2xl p-6 text-center">
              <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          )
        })}
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose React UI Kit?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Built for modern React applications with a focus on developer experience and user accessibility.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="feature-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Component Categories */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Component Categories</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Organized into logical groups for easy discovery and implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {componentCategories.map((category, index) => (
            <div key={index} className="feature-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {category.count} component{category.count > 1 ? 's' : ''}
                </div>
              </div>
              <p className="text-white/70 mb-6">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.components.map((component) => (
                  <Link
                    key={component}
                    to={`/components/${component}`}
                    className="inline-flex items-center space-x-1 bg-white/10 hover:bg-white/20 text-white/90 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                  >
                    <span>{component}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Start */}
      <div className="feature-highlight rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-white/80 mb-6 text-lg">
          Install the package and start building beautiful UIs in minutes.
        </p>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 mb-6 text-left max-w-2xl mx-auto">
          <div className="text-gray-400 text-sm mb-2">Terminal</div>
          <code className="text-green-400 font-mono">npm install @abisheks238/react-ui-kit</code>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/installation"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Installation Guide</span>
          </Link>
          
          <Link
            to="/components/Button"
            className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/20"
          >
            <span>Browse Components</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home