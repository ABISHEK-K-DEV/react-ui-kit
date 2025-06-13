import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { InputFieldProps } from '../../types';

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      variant = 'outline',
      size = 'md',
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const sizeClasses = {
      xs: 'px-2.5 py-1.5 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-3 py-2.5 text-sm',
      lg: 'px-4 py-3 text-base',
      xl: 'px-4 py-4 text-lg',
    };

    const variantClasses = {
      outline: clsx(
        'border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600',
        'focus:border-primary-500 dark:focus:border-primary-400',
        error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
      ),
      filled: clsx(
        'border-0 bg-gray-100 dark:bg-gray-700',
        'focus:bg-white dark:focus:bg-gray-800',
        error ? 'bg-red-50 dark:bg-red-900/20 focus:ring-red-500' : ''
      ),
      ghost: clsx(
        'border-0 bg-transparent',
        'hover:bg-gray-50 dark:hover:bg-gray-800',
        'focus:bg-white dark:focus:bg-gray-800',
        error ? 'focus:ring-red-500' : ''
      ),
    };

    return (
      <div className={clsx('space-y-1', { 'w-full': fullWidth })}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="text-gray-400 dark:text-gray-500">
                {leftIcon}
              </div>
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={clsx(
              'block w-full rounded-lg transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'text-gray-900 dark:text-gray-100',
              'placeholder-gray-500 dark:placeholder-gray-400',
              sizeClasses[size],
              variantClasses[variant],
              {
                'pl-10': leftIcon,
                'pr-10': rightIcon,
              },
              className
            )}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <div className="text-gray-400 dark:text-gray-500">
                {rightIcon}
              </div>
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p
            className={clsx(
              'text-xs',
              error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;