import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { CheckboxProps } from '../../types';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      size = 'md',
      color = 'primary',
      indeterminate = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const sizeClasses = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-7 h-7',
    };

    const colorClasses = {
      primary: 'text-primary-600 focus:ring-primary-500',
      success: 'text-success-600 focus:ring-success-500',
      warning: 'text-warning-600 focus:ring-warning-500',
      danger: 'text-danger-600 focus:ring-danger-500',
    };

    const iconSize = {
      xs: 'w-2 h-2',
      sm: 'w-2.5 h-2.5',
      md: 'w-3 h-3',
      lg: 'w-4 h-4',
      xl: 'w-5 h-5',
    };

    return (
      <div className={clsx('flex items-start', className)}>
        <div className="flex items-center h-5">
          <div className="relative">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              className={clsx(
                'appearance-none border-2 border-gray-300 rounded',
                'checked:bg-current checked:border-current',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'transition-all duration-200 cursor-pointer',
                sizeClasses[size],
                colorClasses[color]
              )}
              {...props}
            />
            
            {/* Check mark */}
            <motion.div
              className={clsx(
                'absolute inset-0 flex items-center justify-center pointer-events-none',
                'text-white'
              )}
              initial={false}
              animate={{
                scale: props.checked || indeterminate ? 1 : 0,
                opacity: props.checked || indeterminate ? 1 : 0,
              }}
              transition={{ duration: 0.15 }}
            >
              {indeterminate ? (
                <svg
                  className={iconSize[size]}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  className={iconSize[size]}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </motion.div>
          </div>
        </div>
        
        {(label || description) && (
          <div className="ml-3">
            {label && (
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
