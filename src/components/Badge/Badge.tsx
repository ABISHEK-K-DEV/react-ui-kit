import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { BadgeProps } from '../../types';

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  count,
  max = 99,
  showZero = false,
  position = 'top-right',
  className,
  ...props
}) => {
  const shouldShow = () => {
    if (count === undefined && !dot) return true;
    if (dot) return true;
    if (count === 0) return showZero;
    return count !== undefined && count > 0;
  };

  const shouldShowCount = () => {
    if (dot) return false;
    if (count === undefined || count === null) return false;
    return count !== undefined && count > 0;
  };

  const getDisplayCount = () => {
    if (count === undefined || dot) return '';
    if (count > max) return `${max}+`;
    return count.toString();
  };

  const variantClasses = {
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-gray-600 text-white',
    success: 'bg-success-600 text-white',
    warning: 'bg-warning-600 text-white',
    danger: 'bg-danger-600 text-white',
    ghost: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600',
  };

  const sizeClasses = {
    xs: dot ? 'w-2 h-2' : 'min-w-[1rem] h-4 px-1 text-xs',
    sm: dot ? 'w-2.5 h-2.5' : 'min-w-[1.25rem] h-5 px-1.5 text-xs',
    md: dot ? 'w-3 h-3' : 'min-w-[1.5rem] h-6 px-2 text-sm',
    lg: dot ? 'w-3.5 h-3.5' : 'min-w-[1.75rem] h-7 px-2.5 text-sm',
    xl: dot ? 'w-4 h-4' : 'min-w-[2rem] h-8 px-3 text-base',
  };

  const positionClasses = {
    'top-right': '-top-1 -right-1',
    'top-left': '-top-1 -left-1',
    'bottom-right': '-bottom-1 -right-1',
    'bottom-left': '-bottom-1 -left-1',
  };

  if (!shouldShow()) return <>{children}</>;

  const badgeElement = (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded-full',
        variantClasses[variant],
        sizeClasses[size],
        children ? clsx('absolute', positionClasses[position]) : 'relative',
        className
      )}
      {...props}
    >
      {!dot && getDisplayCount()}
    </motion.span>
  );

  if (children) {
    return (
      <div className="relative inline-block">
        {children}
        {badgeElement}
      </div>
    );
  }

  return badgeElement;
};

export default Badge;
