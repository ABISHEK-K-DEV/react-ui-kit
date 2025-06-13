# @abisheks238/react-ui-kit

[![npm version](https://img.shields.io/npm/v/@abisheks238/react-ui-kit.svg)](https://www.npmjs.com/package/@abisheks238/react-ui-kit)
[![npm downloads](https://img.shields.io/npm/dm/@abisheks238/react-ui-kit.svg)](https://www.npmjs.com/package/@abisheks238/react-ui-kit)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ABISHEK-K-DEV/react-ui-kit/blob/main/LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@abisheks238/react-ui-kit)](https://bundlephobia.com/package/@abisheks238/react-ui-kit)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

🎨 **A lightweight, customizable component library for modern React applications**

Includes **19 essential UI elements** designed with accessibility and performance in mind. Easy to integrate with any React project — fully styleable using CSS or Tailwind.

## ✨ Features

- 🎯 **19 Essential Components** - Everything you need for modern UIs
- 🎨 **Fully Customizable** - Style with CSS or Tailwind CSS
- ♿ **Accessibility First** - WCAG compliant with proper ARIA support
- 🌗 **Dark Mode Ready** - Built-in dark mode support
- 📱 **Responsive Design** - Mobile-first approach
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🔧 **TypeScript Support** - Full type safety out of the box
- 📦 **Lightweight** - Minimal bundle size impact
- 🚀 **Performance Optimized** - Tree-shakeable components
- 🎪 **Storybook Ready** - Interactive component documentation

## 📦 Components Included

### Core Components
- 🔘 **Button** - Multiple variants, sizes, and states
- 🪟 **Modal** - Accessible dialog with focus management
- ⚠️ **Alert** - Contextual notifications with dismissal
- 💬 **Tooltip** - Positioning-aware hover information

### Form Components
- 📝 **InputField** - Text inputs with validation states
- 📋 **Select** - Dropdown selection with search
- ☑️ **Checkbox** - Individual and group checkboxes
- 🔘 **RadioGroup** - Radio button groups
- 🔄 **Switch** - Toggle switches with labels
- 📅 **DatePicker** - Date selection with calendar

### Navigation Components
- 📖 **Breadcrumbs** - Navigation hierarchy
- 📄 **Pagination** - Page navigation controls
- 📑 **Tabs** - Tabbed content organization
- 🪗 **Accordion** - Collapsible content sections

### Display Components
- 👤 **Avatar** - User profile images with fallbacks
- 🏷️ **Badge** - Count indicators and status badges
- 📊 **Progress** - Linear and circular progress indicators
- 💀 **SkeletonLoader** - Loading state placeholders
- ⏳ **Loader** - Various loading animations

## 🚀 Quick Start

### Installation

```bash
# npm
npm install @abisheks238/react-ui-kit

# yarn
yarn add @abisheks238/react-ui-kit

# pnpm
pnpm add @abisheks238/react-ui-kit
```

### Basic Usage

```tsx
import React from 'react';
import { Button, Modal, Alert } from '@abisheks238/react-ui-kit';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="p-8">
      {/* Button Component */}
      <Button 
        variant="primary" 
        size="lg"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </Button>

      {/* Alert Component */}
      <Alert 
        variant="success" 
        title="Success!" 
        dismissible
        className="mt-4"
      >
        Your changes have been saved successfully.
      </Alert>

      {/* Modal Component */}
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
}

export default App;
```

### With Tailwind CSS (Recommended)

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@abisheks238/react-ui-kit/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Custom Styling

```tsx
import { Button } from '@abisheks238/react-ui-kit';

// Using className
<Button 
  className="bg-purple-600 hover:bg-purple-700 text-white"
  variant="ghost"
>
  Custom Styled Button
</Button>

// Using inline styles
<Button 
  style={{ 
    backgroundColor: '#6366f1', 
    borderRadius: '12px' 
  }}
>
  Styled Button
</Button>
```

## 📚 Component Documentation

### Button

```tsx
import { Button } from '@abisheks238/react-ui-kit';

<Button
  variant="primary"        // primary | secondary | success | warning | danger | ghost | outline
  size="md"               // xs | sm | md | lg | xl
  loading={false}         // Show loading spinner
  disabled={false}        // Disable button
  fullWidth={false}       // Take full width
  leftIcon={<Icon />}     // Left side icon
  rightIcon={<Icon />}    // Right side icon
  href="/link"           // Render as link
  onClick={() => {}}     // Click handler
>
  Button Text
</Button>
```

### InputField

```tsx
import { InputField } from '@abisheks238/react-ui-kit';

<InputField
  label="Email Address"
  placeholder="Enter your email"
  variant="outline"       // outline | filled | ghost
  size="md"              // xs | sm | md | lg | xl
  error="Invalid email"   // Error message
  helperText="We'll never share your email"
  leftIcon={<EmailIcon />}
  rightIcon={<ValidationIcon />}
  fullWidth={true}
/>
```

### Modal

```tsx
import { Modal, Button } from '@abisheks238/react-ui-kit';

function ModalExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleConfirm = () => {
    // Handle confirmation logic
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Confirm Action"
      size="md"                    // xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | full
      closeOnOverlayClick={true}   // Close when clicking backdrop
      closeOnEscape={true}         // Close with Escape key
      showCloseButton={true}       // Show X button
      centered={true}              // Center vertically
      footer={
        <div className="flex space-x-3">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </div>
      }
    >
      <p>Are you sure you want to perform this action?</p>
    </Modal>
  );
}
```

### Alert

```tsx
import { Alert } from '@abisheks238/react-ui-kit';

<Alert
  variant="success"        // info | success | warning | danger
  title="Success!"         // Optional title
  dismissible={true}       // Show dismiss button
  onDismiss={() => {}}     // Dismiss handler
  icon={true}             // Show/hide icon or custom icon
>
  Your changes have been saved successfully.
</Alert>
```

## 🎨 Theming

### CSS Custom Properties

```css
:root {
  --ui-kit-primary: #3b82f6;
  --ui-kit-primary-hover: #2563eb;
  --ui-kit-border-radius: 0.5rem;
  --ui-kit-font-family: 'Inter', sans-serif;
}
```

### Dark Mode

```tsx
// Automatic dark mode detection
<div className="dark">
  <Button variant="primary">Dark Mode Button</Button>
</div>
```

## 🔧 Advanced Usage

### Form Integration

```tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputField, Button, Alert } from '@abisheks238/react-ui-kit';

interface FormData {
  name: string;
  email: string;
}

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      setSubmitStatus('success');
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {submitStatus === 'success' && (
        <Alert variant="success" className="mb-4" dismissible onDismiss={() => setSubmitStatus('idle')}>
          Form submitted successfully!
        </Alert>
      )}
      
      {submitStatus === 'error' && (
        <Alert variant="danger" className="mb-4" dismissible onDismiss={() => setSubmitStatus('idle')}>
          Failed to submit form. Please try again.
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Name"
          placeholder="Enter your name"
          {...register('name', { required: 'Name is required' })}
          error={errors.name?.message}
        />
        
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          error={errors.email?.message}
        />
        
        <Button type="submit" variant="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
}
```

### Custom Component Composition

```tsx
import React from 'react';
import { Button, Badge, Avatar } from '@abisheks238/react-ui-kit';

interface User {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  status: 'online' | 'offline' | 'away';
  notifications: number;
}

interface UserCardProps {
  user: User;
  onMessage: (userId: string) => void;
}

function UserCard({ user, onMessage }: UserCardProps) {
  const MessageIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Avatar
            src={user.avatar}
            name={user.name}
            size="lg"
            status={user.status}
          />
          {user.notifications > 0 && (
            <Badge
              count={user.notifications}
              position="top-right"
              variant="danger"
            />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.role}</p>
        </div>
        
        <Button
          variant="primary"
          size="sm"
          onClick={() => onMessage(user.id)}
          leftIcon={<MessageIcon />}
        >
          Message
        </Button>
      </div>
    </div>
  );
}
```

## 🧪 Testing

Components include built-in test IDs for easy testing:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@abisheks238/react-ui-kit';

test('renders button with text', () => {
  const handleClick = jest.fn();
  
  render(
    <Button data-testid="submit-button" onClick={handleClick}>
      Submit
    </Button>
  );
  
  const button = screen.getByTestId('submit-button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Submit');
  
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## 📖 Storybook

Explore all components interactively:

```bash
npm run storybook
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/ABISHEK-K-DEV/react-ui-kit/blob/main/CONTRIBUTING.md).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Bundle Size

| Component | Size (gzipped) |
|-----------|---------------|
| Button | ~2KB |
| Modal | ~4KB |
| InputField | ~3KB |
| All Components | ~25KB |

## 🔄 Migration Guide

### From v0.x to v1.x

- Component names remain the same
- Props have been standardized
- CSS classes follow new naming convention

## 📋 Roadmap

- [ ] 🎨 Theme Builder Tool
- [ ] 📱 React Native Support  
- [ ] 🔧 CLI for Component Generation
- [ ] 🎪 Advanced Storybook Addons
- [ ] 📚 Video Tutorials

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ABISHEK-K-DEV/react-ui-kit/blob/main/LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ by [Abishek](https://github.com/ABISHEK-K-DEV)
- Inspired by modern design systems
- Powered by React, TypeScript, and Tailwind CSS

---

**Made for the React community with ❤️**

[![NPM](https://nodei.co/npm/@abisheks238/react-ui-kit.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@abisheks238/react-ui-kit)