import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { 
  Button, 
  InputField, 
  Select, 
  Modal, 
  Alert, 
  Tooltip, 
  Avatar, 
  Badge, 
  Tabs, 
  Accordion, 
  Progress, 
  Skeleton, 
  Loader, 
  Switch, 
  Checkbox, 
  RadioGroup, 
  Breadcrumbs, 
  Pagination,
  DatePicker,
  ConfirmDialog
} from '@abisheks238/react-ui-kit'
import { Copy, Check, Play, Code, Eye, Settings } from 'lucide-react'

const ComponentPage: React.FC = () => {
  const { componentName } = useParams<{ componentName: string }>()
  const [copiedCode, setCopiedCode] = useState(false)
  const [activeTab, setActiveTab] = useState('demo')

  // Demo states
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [alertVisible, setAlertVisible] = useState(true)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioValue, setRadioValue] = useState('option1')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [progressValue, setProgressValue] = useState(65)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const getComponentDemo = () => {
    switch (componentName) {
      case 'Button':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        )

      case 'InputField':
        return (
          <div className="space-y-6 max-w-md">
            <InputField
              label="Email Address"
              placeholder="Enter your email"
              type="email"
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              type="password"
              helperText="Must be at least 8 characters"
            />
            <InputField
              label="Error Example"
              placeholder="This field has an error"
              error="This field is required"
            />
            <InputField
              label="Disabled Field"
              placeholder="This field is disabled"
              disabled
            />
          </div>
        )

      case 'Select':
        return (
          <div className="space-y-6 max-w-md">
            <Select
              label="Country"
              placeholder="Select a country"
              options={[
                { value: 'us', label: 'United States' },
                { value: 'ca', label: 'Canada' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'de', label: 'Germany' },
                { value: 'fr', label: 'France' }
              ]}
            />
            <Select
              label="Priority"
              options={[
                { value: 'low', label: 'Low Priority' },
                { value: 'medium', label: 'Medium Priority' },
                { value: 'high', label: 'High Priority' },
                { value: 'urgent', label: 'Urgent', disabled: true }
              ]}
              helperText="Select the priority level"
            />
          </div>
        )

      case 'Modal':
        return (
          <div className="space-y-4">
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
              size="md"
              footer={
                <div className="flex space-x-3">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                    Save Changes
                  </Button>
                </div>
              }
            >
              <p className="text-gray-600">
                This is an example modal with a header, body content, and footer actions.
                You can customize the size, behavior, and styling to fit your needs.
              </p>
            </Modal>
          </div>
        )

      case 'Alert':
        return (
          <div className="space-y-4">
            {alertVisible && (
              <Alert
                variant="success"
                title="Success!"
                dismissible
                onDismiss={() => setAlertVisible(false)}
              >
                Your changes have been saved successfully.
              </Alert>
            )}
            <Alert variant="info" title="Information">
              This is an informational alert with some helpful content.
            </Alert>
            <Alert variant="warning" title="Warning">
              Please review your settings before proceeding.
            </Alert>
            <Alert variant="danger" title="Error">
              There was an error processing your request.
            </Alert>
            {!alertVisible && (
              <Button size="sm" onClick={() => setAlertVisible(true)}>
                Show Success Alert
              </Button>
            )}
          </div>
        )

      case 'Tooltip':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Tooltip content="This is a top tooltip" position="top">
                <Button>Top</Button>
              </Tooltip>
              <Tooltip content="This is a bottom tooltip" position="bottom">
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip content="This is a left tooltip" position="left">
                <Button>Left</Button>
              </Tooltip>
              <Tooltip content="This is a right tooltip" position="right">
                <Button>Right</Button>
              </Tooltip>
            </div>
            <div className="flex space-x-4">
              <Tooltip content="Click to trigger" trigger="click">
                <Button variant="outline">Click Trigger</Button>
              </Tooltip>
              <Tooltip content="Focus to trigger" trigger="focus">
                <Button variant="ghost">Focus Trigger</Button>
              </Tooltip>
            </div>
          </div>
        )

      case 'Avatar':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                name="John Doe"
                size="xs"
              />
              <Avatar
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                name="John Doe"
                size="sm"
              />
              <Avatar
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                name="John Doe"
                size="md"
              />
              <Avatar
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                name="John Doe"
                size="lg"
              />
              <Avatar
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                name="John Doe"
                size="xl"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Avatar name="John Doe" size="md" />
              <Avatar name="Jane Smith" size="md" status="online" />
              <Avatar name="Bob Wilson" size="md" status="away" />
              <Avatar name="Alice Brown" size="md" status="busy" />
            </div>
            <div className="flex items-center space-x-4">
              <Avatar name="John Doe" variant="square" size="md" />
              <Avatar name="Jane Smith" variant="rounded" size="md" />
              <Avatar name="Bob Wilson" variant="circle" size="md" />
            </div>
          </div>
        )

      case 'Badge':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Badge count={5}>
                <Button>Messages</Button>
              </Badge>
              <Badge count={99}>
                <Button>Notifications</Button>
              </Badge>
              <Badge count={1000} max={999}>
                <Button>Items</Button>
              </Badge>
              <Badge dot>
                <Button>Status</Button>
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Badge size="xs">Extra Small</Badge>
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </div>
        )

      case 'Progress':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Progress value={progressValue} showLabel />
              <Progress value={75} color="success" showLabel />
              <Progress value={45} color="warning" showLabel />
              <Progress value={25} color="danger" showLabel />
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" onClick={() => setProgressValue(Math.max(0, progressValue - 10))}>
                Decrease
              </Button>
              <Button size="sm" onClick={() => setProgressValue(Math.min(100, progressValue + 10))}>
                Increase
              </Button>
            </div>
            <div className="flex items-center space-x-8">
              <Progress value={75} variant="circular" showLabel />
              <Progress value={50} variant="circular" color="success" showLabel />
              <Progress value={25} variant="circular" color="warning" showLabel />
            </div>
          </div>
        )

      case 'Skeleton':
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <Skeleton variant="text" lines={3} />
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton variant="circular" width="3rem" height="3rem" />
              <div className="flex-1">
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="40%" />
              </div>
            </div>
            <Skeleton variant="rectangular" height="8rem" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton variant="rectangular" height="6rem" />
              <Skeleton variant="rectangular" height="6rem" />
              <Skeleton variant="rectangular" height="6rem" />
            </div>
          </div>
        )

      case 'Loader':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Loader variant="spinner" />
                <p className="text-sm text-gray-600 mt-2">Spinner</p>
              </div>
              <div>
                <Loader variant="dots" />
                <p className="text-sm text-gray-600 mt-2">Dots</p>
              </div>
              <div>
                <Loader variant="bars" />
                <p className="text-sm text-gray-600 mt-2">Bars</p>
              </div>
              <div>
                <Loader variant="pulse" />
                <p className="text-sm text-gray-600 mt-2">Pulse</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div>
                <Loader variant="orbit" />
                <p className="text-sm text-gray-600 mt-2">Orbit</p>
              </div>
              <div>
                <Loader variant="ripple" />
                <p className="text-sm text-gray-600 mt-2">Ripple</p>
              </div>
              <div>
                <Loader variant="morphing" />
                <p className="text-sm text-gray-600 mt-2">Morphing</p>
              </div>
            </div>
            <div className="flex justify-center space-x-8">
              <Loader variant="spinner" size="sm" color="success" />
              <Loader variant="dots" size="md" color="warning" />
              <Loader variant="bars" size="lg" color="danger" />
            </div>
          </div>
        )

      case 'Switch':
        return (
          <div className="space-y-6">
            <Switch
              label="Enable notifications"
              description="Receive email notifications for important updates"
              checked={switchChecked}
              onChange={(e) => setSwitchChecked(e.target.checked)}
            />
            <Switch label="Dark mode" defaultChecked />
            <Switch label="Auto-save" disabled />
            <div className="flex items-center space-x-6">
              <Switch size="sm" label="Small" />
              <Switch size="md" label="Medium" />
              <Switch size="lg" label="Large" />
            </div>
            <div className="flex items-center space-x-6">
              <Switch color="primary" label="Primary" defaultChecked />
              <Switch color="success" label="Success" defaultChecked />
              <Switch color="warning" label="Warning" defaultChecked />
              <Switch color="danger" label="Danger" defaultChecked />
            </div>
          </div>
        )

      case 'Checkbox':
        return (
          <div className="space-y-6">
            <Checkbox
              label="I agree to the terms and conditions"
              description="Please read our terms and conditions carefully"
              checked={checkboxChecked}
              onChange={(e) => setCheckboxChecked(e.target.checked)}
            />
            <Checkbox label="Subscribe to newsletter" defaultChecked />
            <Checkbox label="Disabled option" disabled />
            <Checkbox label="Indeterminate state" indeterminate />
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Checkbox Sizes</h4>
              <div className="space-y-2">
                <Checkbox size="sm" label="Small checkbox" />
                <Checkbox size="md" label="Medium checkbox" />
                <Checkbox size="lg" label="Large checkbox" />
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Checkbox Colors</h4>
              <div className="space-y-2">
                <Checkbox color="primary" label="Primary" defaultChecked />
                <Checkbox color="success" label="Success" defaultChecked />
                <Checkbox color="warning" label="Warning" defaultChecked />
                <Checkbox color="danger" label="Danger" defaultChecked />
              </div>
            </div>
          </div>
        )

      case 'RadioGroup':
        return (
          <div className="space-y-6">
            <RadioGroup
              name="payment"
              options={[
                { value: 'credit', label: 'Credit Card', description: 'Pay with your credit or debit card' },
                { value: 'paypal', label: 'PayPal', description: 'Pay with your PayPal account' },
                { value: 'bank', label: 'Bank Transfer', description: 'Direct bank transfer' }
              ]}
              value={radioValue}
              onChange={setRadioValue}
            />
            <RadioGroup
              name="size"
              options={[
                { value: 'xs', label: 'Extra Small' },
                { value: 's', label: 'Small' },
                { value: 'm', label: 'Medium' },
                { value: 'l', label: 'Large' },
                { value: 'xl', label: 'Extra Large' }
              ]}
              orientation="horizontal"
              defaultValue="m"
            />
            <RadioGroup
              name="priority"
              options={[
                { value: 'low', label: 'Low Priority' },
                { value: 'medium', label: 'Medium Priority' },
                { value: 'high', label: 'High Priority' },
                { value: 'urgent', label: 'Urgent', disabled: true }
              ]}
              color="danger"
              defaultValue="medium"
            />
          </div>
        )

      case 'DatePicker':
        return (
          <div className="space-y-6 max-w-md">
            <DatePicker
              label="Select Date"
              placeholder="Choose a date"
              value={selectedDate}
              onChange={setSelectedDate}
            />
            <DatePicker
              label="Birth Date"
              placeholder="Enter your birth date"
              maxDate={new Date()}
              helperText="You must be 18 or older"
            />
            <DatePicker
              label="Future Date"
              placeholder="Select a future date"
              minDate={new Date()}
              showTodayButton
              showClearButton
            />
            <DatePicker
              label="Disabled Date Picker"
              placeholder="This is disabled"
              disabled
            />
          </div>
        )

      case 'ConfirmDialog':
        return (
          <div className="space-y-4">
            <Button onClick={() => setIsConfirmOpen(true)}>
              Open Confirm Dialog
            </Button>
            <ConfirmDialog
              isOpen={isConfirmOpen}
              onClose={() => setIsConfirmOpen(false)}
              onConfirm={() => {
                setIsConfirmOpen(false)
                alert('Action confirmed!')
              }}
              title="Confirm Action"
              message="Are you sure you want to delete this item? This action cannot be undone."
              confirmText="Delete"
              cancelText="Cancel"
              variant="danger"
            />
          </div>
        )

      case 'Tabs':
        return (
          <Tabs
            items={[
              {
                id: 'overview',
                label: 'Overview',
                content: (
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Overview Content</h3>
                    <p className="text-gray-600">This is the overview tab content with some example text and information.</p>
                  </div>
                )
              },
              {
                id: 'details',
                label: 'Details',
                content: (
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Detailed Information</h3>
                    <p className="text-gray-600">Here you can find more detailed information about the selected item.</p>
                  </div>
                )
              },
              {
                id: 'settings',
                label: 'Settings',
                content: (
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Settings Panel</h3>
                    <p className="text-gray-600">Configure your preferences and settings in this tab.</p>
                  </div>
                )
              }
            ]}
            variant="line"
          />
        )

      case 'Accordion':
        return (
          <Accordion
            items={[
              {
                id: 'item1',
                title: 'What is React UI Kit?',
                content: (
                  <p>React UI Kit is a comprehensive component library designed for modern React applications. It provides 19 essential UI components with built-in accessibility, responsive design, and customization options.</p>
                )
              },
              {
                id: 'item2',
                title: 'How do I install it?',
                content: (
                  <div>
                    <p>You can install React UI Kit using npm, yarn, or pnpm:</p>
                    <code className="block mt-2 p-2 bg-gray-100 rounded">npm install @abisheks238/react-ui-kit</code>
                  </div>
                )
              },
              {
                id: 'item3',
                title: 'Is it customizable?',
                content: (
                  <p>Yes! React UI Kit is fully customizable. You can style components using Tailwind CSS, custom CSS, or CSS-in-JS solutions. The library also supports dark mode and custom themes.</p>
                )
              },
              {
                id: 'item4',
                title: 'Browser Support',
                content: (
                  <p>React UI Kit supports all modern browsers including Chrome, Firefox, Safari, and Edge. It requires React 18 or higher.</p>
                )
              }
            ]}
            allowMultiple
            defaultOpen={['item1']}
          />
        )

      case 'Breadcrumbs':
        return (
          <div className="space-y-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Components', href: '/components' },
                { label: 'Breadcrumbs', current: true }
              ]}
            />
            <Breadcrumbs
              items={[
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Projects', href: '/projects' },
                { label: 'Web App', href: '/projects/webapp' },
                { label: 'Settings', current: true }
              ]}
              maxItems={3}
            />
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Very Long Category Name', href: '/category' },
                { label: 'Subcategory', href: '/subcategory' },
                { label: 'Another Level', href: '/another' },
                { label: 'Current Page', current: true }
              ]}
              maxItems={4}
            />
          </div>
        )

      case 'Pagination':
        return (
          <div className="space-y-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Default Pagination</h4>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Outlined Variant</h4>
              <Pagination
                currentPage={3}
                totalPages={15}
                onPageChange={() => {}}
                variant="outlined"
                siblingCount={2}
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Ghost Variant</h4>
              <Pagination
                currentPage={5}
                totalPages={20}
                onPageChange={() => {}}
                variant="ghost"
                size="lg"
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Compact (No First/Last)</h4>
              <Pagination
                currentPage={7}
                totalPages={12}
                onPageChange={() => {}}
                showFirstLast={false}
                size="sm"
              />
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">Component demo not available</p>
          </div>
        )
    }
  }

  const getComponentCode = () => {
    switch (componentName) {
      case 'Button':
        return `import { Button } from '@abisheks238/react-ui-kit';

function MyComponent() {
  return (
    <div className="space-x-4">
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button loading>Loading</Button>
      <Button size="lg">Large Button</Button>
    </div>
  );
}`

      case 'InputField':
        return `import { InputField } from '@abisheks238/react-ui-kit';

function MyComponent() {
  return (
    <div className="space-y-4">
      <InputField
        label="Email Address"
        placeholder="Enter your email"
        type="email"
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        type="password"
        helperText="Must be at least 8 characters"
      />
    </div>
  );
}`

      case 'Modal':
        return `import { Modal, Button } from '@abisheks238/react-ui-kit';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
        size="md"
      >
        <p>Modal content goes here...</p>
      </Modal>
    </>
  );
}`

      default:
        return `import { ${componentName} } from '@abisheks238/react-ui-kit';

function MyComponent() {
  return (
    <${componentName}>
      // Component usage example
    </${componentName}>
  );
}`
    }
  }

  const getComponentProps = () => {
    // This would typically come from a data source or API
    const propsData: Record<string, any[]> = {
      Button: [
        { name: 'variant', type: 'string', default: 'primary', required: false, description: 'Button style variant' },
        { name: 'size', type: 'string', default: 'md', required: false, description: 'Button size' },
        { name: 'loading', type: 'boolean', default: 'false', required: false, description: 'Show loading state' },
        { name: 'disabled', type: 'boolean', default: 'false', required: false, description: 'Disable the button' },
        { name: 'fullWidth', type: 'boolean', default: 'false', required: false, description: 'Make button full width' },
        { name: 'leftIcon', type: 'ReactNode', default: '-', required: false, description: 'Icon to show on the left' },
        { name: 'rightIcon', type: 'ReactNode', default: '-', required: false, description: 'Icon to show on the right' },
        { name: 'onClick', type: 'function', default: '-', required: false, description: 'Click event handler' }
      ],
      InputField: [
        { name: 'label', type: 'string', default: '-', required: false, description: 'Input field label' },
        { name: 'placeholder', type: 'string', default: '-', required: false, description: 'Placeholder text' },
        { name: 'error', type: 'string', default: '-', required: false, description: 'Error message to display' },
        { name: 'helperText', type: 'string', default: '-', required: false, description: 'Helper text below input' },
        { name: 'variant', type: 'string', default: 'outline', required: false, description: 'Input style variant' },
        { name: 'size', type: 'string', default: 'md', required: false, description: 'Input size' },
        { name: 'fullWidth', type: 'boolean', default: 'false', required: false, description: 'Make input full width' },
        { name: 'leftIcon', type: 'ReactNode', default: '-', required: false, description: 'Icon to show on the left' },
        { name: 'rightIcon', type: 'ReactNode', default: '-', required: false, description: 'Icon to show on the right' }
      ],
      Modal: [
        { name: 'isOpen', type: 'boolean', default: '-', required: true, description: 'Whether the modal is open' },
        { name: 'onClose', type: 'function', default: '-', required: true, description: 'Function to close the modal' },
        { name: 'title', type: 'string', default: '-', required: false, description: 'Modal title' },
        { name: 'size', type: 'string', default: 'md', required: false, description: 'Modal size' },
        { name: 'closeOnOverlayClick', type: 'boolean', default: 'true', required: false, description: 'Close when clicking overlay' },
        { name: 'closeOnEscape', type: 'boolean', default: 'true', required: false, description: 'Close when pressing escape' },
        { name: 'showCloseButton', type: 'boolean', default: 'true', required: false, description: 'Show close button' },
        { name: 'footer', type: 'ReactNode', default: '-', required: false, description: 'Modal footer content' },
        { name: 'centered', type: 'boolean', default: 'true', required: false, description: 'Center the modal vertically' }
      ]
    }

    return propsData[componentName!] || []
  }

  if (!componentName) {
    return <div>Component not found</div>
  }

  const tabItems = [
    {
      id: 'demo',
      label: 'Demo',
      icon: <Play className="w-4 h-4" />,
      content: (
        <div className="tab-content">
          <div className="demo-output">
            {getComponentDemo()}
          </div>
        </div>
      )
    },
    {
      id: 'code',
      label: 'Code',
      icon: <Code className="w-4 h-4" />,
      content: (
        <div className="tab-content">
          <div className="relative">
            <button
              onClick={() => copyToClipboard(getComponentCode())}
              className="absolute top-4 right-4 copy-button z-10"
            >
              {copiedCode ? (
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
            <div className="code-preview">
              <pre><code>{getComponentCode()}</code></pre>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'props',
      label: 'Props',
      icon: <Settings className="w-4 h-4" />,
      content: (
        <div className="tab-content">
          <div className="props-table">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Required</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {getComponentProps().map((prop, index) => (
                  <tr key={index}>
                    <td className="font-mono text-sm">{prop.name}</td>
                    <td className="font-mono text-sm text-blue-600">{prop.type}</td>
                    <td className="font-mono text-sm text-gray-500">{prop.default}</td>
                    <td>
                      <span className={`badge ${prop.required ? 'required' : 'optional'}`}>
                        {prop.required ? 'Required' : 'Optional'}
                      </span>
                    </td>
                    <td className="text-sm">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="animate-fade-in max-w-6xl">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white mb-4 capitalize">{componentName}</h1>
        <p className="text-xl text-white/70">
          Interactive examples and documentation for the {componentName} component.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <Tabs
          items={tabItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="line"
          size="lg"
        />
      </div>
    </div>
  )
}

export default ComponentPage