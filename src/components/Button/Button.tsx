import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ButtonProps } from '../../types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      href,
      target,
      ...props
    },
    ref
  ) => {
    const baseClasses = clsx(
      'inline-flex items-center justify-center font-medium rounded-lg',
      'transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'relative overflow-hidden',
      {
        'w-full': fullWidth,
        'cursor-not-allowed': disabled || loading,
      }
    );

    const variantClasses = {
      primary: clsx(
        'bg-primary-600 text-white border border-primary-600',
        'hover:bg-primary-700 hover:border-primary-700',
        'focus:ring-primary-500',
        'active:bg-primary-800'
      ),
      secondary: clsx(
        'bg-gray-600 text-white border border-gray-600',
        'hover:bg-gray-700 hover:border-gray-700',
        'focus:ring-gray-500',
        'active:bg-gray-800'
      ),
      success: clsx(
        'bg-success-600 text-white border border-success-600',
        'hover:bg-success-700 hover:border-success-700',
        'focus:ring-success-500',
        'active:bg-success-800'
      ),
      warning: clsx(
        'bg-warning-600 text-white border border-warning-600',
        'hover:bg-warning-700 hover:border-warning-700',
        'focus:ring-warning-500',
        'active:bg-warning-800'
      ),
      danger: clsx(
        'bg-danger-600 text-white border border-danger-600',
        'hover:bg-danger-700 hover:border-danger-700',
        'focus:ring-danger-500',
        'active:bg-danger-800'
      ),
      ghost: clsx(
        'bg-transparent text-gray-700 border border-transparent',
        'hover:bg-gray-100 hover:text-gray-900',
        'focus:ring-gray-500',
        'dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100'
      ),
      outline: clsx(
        'bg-transparent text-primary-600 border border-primary-600',
        'hover:bg-primary-50 hover:text-primary-700',
        'focus:ring-primary-500',
        'dark:text-primary-400 dark:border-primary-400',
        'dark:hover:bg-primary-900/20 dark:hover:text-primary-300'
      ),
    };

    const sizeClasses = {
      xs: 'px-2.5 py-1.5 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg',
    };

    const LoadingSpinner = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    const buttonContent = (
      <>
        {loading && <LoadingSpinner />}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    const buttonClasses = clsx(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const MotionButton = motion.button;

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          className={buttonClasses}
          whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
          whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
          {...(props as any)}
        >
          {buttonContent}
        </motion.a>
      );
    }

    return (
      <MotionButton
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        {...(props as any)}
      >
        {buttonContent}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
