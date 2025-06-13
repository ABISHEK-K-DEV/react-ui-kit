import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { SelectProps } from '../../types';

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      options,
      placeholder,
      size = 'md',
      variant = 'outline',
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    const baseClasses = clsx(
      'block appearance-none transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'bg-no-repeat bg-right',
      {
        'w-full': fullWidth,
      }
    );

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

    const sizeClasses = {
      xs: 'px-2.5 py-1.5 pr-8 text-xs rounded',
      sm: 'px-3 py-2 pr-10 text-sm rounded-md',
      md: 'px-3 py-2.5 pr-10 text-sm rounded-lg',
      lg: 'px-4 py-3 pr-12 text-base rounded-lg',
      xl: 'px-4 py-4 pr-12 text-lg rounded-xl',
    };

    const getIconSize = () => {
      switch (size) {
        case 'xs': return 'w-3 h-3';
        case 'sm': return 'w-4 h-4';
        case 'md': return 'w-5 h-5';
        case 'lg': return 'w-6 h-6';
        case 'xl': return 'w-7 h-7';
        default: return 'w-5 h-5';
      }
    };

    return (
      <div className={clsx('space-y-1', { 'w-full': fullWidth })}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={clsx(
              baseClasses,
              variantClasses[variant],
              sizeClasses[size],
              'text-gray-900 dark:text-gray-100',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className={clsx(getIconSize(), 'text-gray-400 dark:text-gray-500')}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
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

Select.displayName = 'Select';

export default Select;
