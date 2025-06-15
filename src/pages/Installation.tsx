import React, { useState } from 'react'
import { Copy, Check, Download, Code, Palette, Zap } from 'lucide-react'

const Installation: React.FC = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  const installationSteps = [
    {
      title: 'Install the Package',
      description: 'Add React UI Kit to your project using your preferred package manager.',
      commands: [
        { label: 'npm', command: 'npm install @abisheks238/react-ui-kit' },
        { label: 'yarn', command: 'yarn add @abisheks238/react-ui-kit' },
        { label: 'pnpm', command: 'pnpm add @abisheks238/react-ui-kit' }
      ]
    },
    {
      title: 'Configure Tailwind CSS (Recommended)',
      description: 'Update your Tailwind configuration to include the component styles.',
      code: `// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@abisheks238/react-ui-kit/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`
    },
    {
      title: 'Import and Use Components',
      description: 'Start using components in your React application.',
      code: `import React from 'react';
import { Button, Modal, Alert } from '@abisheks238/react-ui-kit';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="p-8">
      <Button 
        variant="primary" 
        size="lg"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </Button>
      
      <Alert 
        variant="success" 
        title="Success!" 
        dismissible
        className="mt-4"
      >
        Your changes have been saved successfully.
      </Alert>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to React UI Kit"
        size="md"
      >
        <p>This is a beautiful, accessible modal component!</p>
      </Modal>
    </div>
  );
}`
    }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Zero Configuration',
      description: 'Works out of the box with sensible defaults. No complex setup required.'
    },
    {
      icon: Palette,
      title: 'Customizable Themes',
      description: 'Built-in dark mode support and easy theme customization with CSS variables.'
    },
    {
      icon: Code,
      title: 'TypeScript Support',
      description: 'Full TypeScript definitions included for the best developer experience.'
    }
  ]

  return (
    <div className="animate-fade-in max-w-4xl">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Installation</h1>
        <p className="text-xl text-white/70 leading-relaxed">
          Get started with React UI Kit in just a few simple steps. 
          Follow this guide to install and configure the component library in your React project.
        </p>
      </div>

      {/* Quick Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="feature-card rounded-xl p-6 text-center">
              <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          )
        })}
      </div>

      {/* Installation Steps */}
      <div className="space-y-8">
        {installationSteps.map((step, index) => (
          <div key={index} className="installation-step">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <h2 className="text-2xl font-bold text-white">{step.title}</h2>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">{step.description}</p>
            
            {step.commands && (
              <div className="space-y-3">
                {step.commands.map((cmd, cmdIndex) => (
                  <div key={cmdIndex} className="flex items-center space-x-3">
                    <span className="text-white/60 text-sm font-medium w-12">{cmd.label}</span>
                    <div className="flex-1 flex items-center space-x-3">
                      <div className="installation-command flex-1">
                        <code>{cmd.command}</code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(cmd.command, cmd.label)}
                        className={`copy-button ${copiedCommand === cmd.label ? 'copy-success' : ''}`}
                      >
                        {copiedCommand === cmd.label ? (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-1" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {step.code && (
              <div className="relative">
                <div className="code-preview">
                  <button
                    onClick={() => copyToClipboard(step.code!, 'code')}
                    className="absolute top-4 right-4 copy-button"
                  >
                    {copiedCommand === 'code' ? (
                      <>
                        <Check className="w-4 h-4 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </>
                    )}
                  </button>
                  <pre><code>{step.code}</code></pre>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-12 space-y-8">
        <div className="feature-highlight rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-3">📦 Package Information</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-white/60">Package Name:</span>
              <span className="text-white ml-2 font-mono">@abisheks238/react-ui-kit</span>
            </div>
            <div>
              <span className="text-white/60">Current Version:</span>
              <span className="text-white ml-2 font-mono">1.2.0</span>
            </div>
            <div>
              <span className="text-white/60">Bundle Size:</span>
              <span className="text-white ml-2">~25KB (gzipped)</span>
            </div>
            <div>
              <span className="text-white/60">Dependencies:</span>
              <span className="text-white ml-2">React 18+, Framer Motion</span>
            </div>
          </div>
        </div>

        <div className="feature-highlight rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-3">🎨 Styling Options</h3>
          <div className="space-y-3 text-white/80">
            <p>
              <strong>Tailwind CSS (Recommended):</strong> The components are designed to work seamlessly with Tailwind CSS. 
              Make sure to include the component paths in your Tailwind configuration.
            </p>
            <p>
              <strong>Custom CSS:</strong> You can also style components using custom CSS by targeting the component classes 
              or using the className prop.
            </p>
            <p>
              <strong>CSS Variables:</strong> Customize the theme using CSS custom properties for colors, spacing, and other design tokens.
            </p>
          </div>
        </div>

        <div className="feature-highlight rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-3">🚀 Next Steps</h3>
          <div className="space-y-2 text-white/80">
            <p>• Explore the component documentation to learn about available props and customization options</p>
            <p>• Check out the interactive examples to see components in action</p>
            <p>• Join our community on GitHub for support and contributions</p>
            <p>• Follow the changelog for updates and new features</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Installation