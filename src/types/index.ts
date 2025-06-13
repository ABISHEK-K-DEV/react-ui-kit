import { ReactNode, CSSProperties, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

// Base types
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'outline';
export type Position = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'right';
export type Theme = 'light' | 'dark' | 'auto';

// Common props interface
export interface BaseProps {
  className?: string;
  children?: ReactNode;
  id?: string;
  'data-testid'?: string;
}

// Button Component
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
  target?: string;
}

// Input Field Component
export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: 'outline' | 'filled' | 'ghost';
  size?: Size;
  fullWidth?: boolean;
}

// Select Component
export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>, BaseProps {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
  size?: Size;
  variant?: 'outline' | 'filled' | 'ghost';
  fullWidth?: boolean;
}

// Modal Component
export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: Size | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  footer?: ReactNode;
  centered?: boolean;
}

// Alert Component
export interface AlertProps extends BaseProps {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode | boolean;
}

// Tooltip Component
export interface TooltipProps extends BaseProps {
  content: ReactNode;
  position?: Position;
  trigger?: 'hover' | 'click' | 'focus';
  delay?: number;
  arrow?: boolean;
  disabled?: boolean;
}

// Avatar Component
export interface AvatarProps extends BaseProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: Size;
  variant?: 'circle' | 'square' | 'rounded';
  fallbackIcon?: ReactNode;
  status?: 'online' | 'offline' | 'away' | 'busy';
}

// Badge Component
export interface BadgeProps extends BaseProps {
  variant?: Variant;
  size?: Size;
  dot?: boolean;
  count?: number;
  max?: number;
  showZero?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

// Tabs Component
export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface TabsProps extends BaseProps {
  items: TabItem[];
  defaultTab?: string;
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  variant?: 'line' | 'enclosed' | 'soft-rounded' | 'solid-rounded';
  size?: Size;
  orientation?: 'horizontal' | 'vertical';
}

// Accordion Component
export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface AccordionProps extends BaseProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  variant?: 'default' | 'bordered' | 'separated';
}

// Pagination Component
export interface PaginationProps extends BaseProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  siblingCount?: number;
  size?: Size;
  variant?: 'default' | 'outlined' | 'ghost';
}

// Breadcrumbs Component
export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  current?: boolean;
}

export interface BreadcrumbsProps extends BaseProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
}

// Progress Component
export interface ProgressProps extends BaseProps {
  value: number;
  max?: number;
  variant?: 'linear' | 'circular';
  size?: Size;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  striped?: boolean;
}

// Skeleton Component
export interface SkeletonProps extends BaseProps {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  lines?: number;
  animation?: 'pulse' | 'wave' | 'none';
}

// Loader Component
export interface LoaderProps extends BaseProps {
  variant?: 'spinner' | 'dots' | 'bars' | 'pulse';
  size?: Size;
  color?: string;
  overlay?: boolean;
  text?: string;
}

// Switch Component
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseProps {
  label?: string;
  description?: string;
  size?: Size;
  color?: 'primary' | 'success' | 'warning' | 'danger';
}

// Checkbox Component
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseProps {
  label?: string;
  description?: string;
  size?: Size;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  indeterminate?: boolean;
}

// Radio Component
export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends BaseProps {
  name: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: Size;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  orientation?: 'horizontal' | 'vertical';
}

// Confirm Dialog Component
export interface ConfirmDialogProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'default' | 'danger';
  loading?: boolean;
}

// Date Picker Component
export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>, BaseProps {
  label?: string;
  error?: string;
  helperText?: string;
  value?: Date;
  onChange?: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  size?: Size;
  variant?: 'outline' | 'filled' | 'ghost';
  format?: string;
  showTodayButton?: boolean;
  showClearButton?: boolean;
}
