import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Download, 
  Package, 
  Palette, 
  MousePointer, 
  Type, 
  Layout as LayoutIcon,
  Navigation,
  BarChart3,
  Settings,
  Zap,
  Github,
  ExternalLink
} from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const components = [
  { name: 'Button', icon: MousePointer, category: 'Core' },
  { name: 'InputField', icon: Type, category: 'Form' },
  { name: 'Select', icon: Settings, category: 'Form' },
  { name: 'Checkbox', icon: Settings, category: 'Form' },
  { name: 'RadioGroup', icon: Settings, category: 'Form' },
  { name: 'Switch', icon: Settings, category: 'Form' },
  { name: 'DatePicker', icon: Settings, category: 'Form' },
  { name: 'Modal', icon: LayoutIcon, category: 'Overlay' },
  { name: 'Alert', icon: Zap, category: 'Feedback' },
  { name: 'Tooltip', icon: Zap, category: 'Overlay' },
  { name: 'ConfirmDialog', icon: LayoutIcon, category: 'Overlay' },
  { name: 'Avatar', icon: Palette, category: 'Display' },
  { name: 'Badge', icon: Palette, category: 'Display' },
  { name: 'Progress', icon: BarChart3, category: 'Feedback' },
  { name: 'Skeleton', icon: LayoutIcon, category: 'Feedback' },
  { name: 'Loader', icon: Zap, category: 'Feedback' },
  { name: 'Tabs', icon: Navigation, category: 'Navigation' },
  { name: 'Accordion', icon: LayoutIcon, category: 'Display' },
  { name: 'Breadcrumbs', icon: Navigation, category: 'Navigation' },
  { name: 'Pagination', icon: Navigation, category: 'Navigation' },
]

const categories = {
  'Core': components.filter(c => c.category === 'Core'),
  'Form': components.filter(c => c.category === 'Form'),
  'Navigation': components.filter(c => c.category === 'Navigation'),
  'Display': components.filter(c => c.category === 'Display'),
  'Overlay': components.filter(c => c.category === 'Overlay'),
  'Feedback': components.filter(c => c.category === 'Feedback'),
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  return (
    <div className="ui-kit-showcase">
      <div className="content-wrapper flex">
        {/* Sidebar */}
        <div className="sidebar-glass w-80 flex-shrink-0">
          <div className="p-6">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">React UI Kit</h1>
                <p className="text-sm text-white/70">19 Components</p>
              </div>
            </Link>

            <div className="sidebar-content">
              <nav className="space-y-1">
                <Link
                  to="/"
                  className={`nav-item flex items-center space-x-3 text-white/90 hover:text-white ${
                    location.pathname === '/' ? 'active' : ''
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span>Overview</span>
                </Link>

                <Link
                  to="/installation"
                  className={`nav-item flex items-center space-x-3 text-white/90 hover:text-white ${
                    location.pathname === '/installation' ? 'active' : ''
                  }`}
                >
                  <Download className="w-5 h-5" />
                  <span>Installation</span>
                </Link>

                <div className="pt-6">
                  {Object.entries(categories).map(([category, items]) => (
                    <div key={category} className="mb-6">
                      <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                        {category}
                      </h3>
                      <div className="space-y-1">
                        {items.map((component) => {
                          const Icon = component.icon
                          const isActive = location.pathname === `/components/${component.name}`
                          
                          return (
                            <Link
                              key={component.name}
                              to={`/components/${component.name}`}
                              className={`nav-item flex items-center space-x-3 text-white/80 hover:text-white ${
                                isActive ? 'active' : ''
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              <span className="text-sm">{component.name}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <a
                    href="https://github.com/ABISHEK-K-DEV/react-ui-kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-item flex items-center space-x-3 text-white/80 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </a>
                  
                  <a
                    href="https://www.npmjs.com/package/@abisheks238/react-ui-kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-item flex items-center space-x-3 text-white/80 hover:text-white"
                  >
                    <Package className="w-4 h-4" />
                    <span className="text-sm">NPM Package</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 main-content">
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout