import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { SwitchProps } from '../../types';

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      description,
      size = 'md',
      color = 'primary',
      className,
      id,
      checked,
      ...props
    },
    ref
  ) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    const sizeClasses = {
      xs: {
        track: 'w-8 h-4',
        thumb: 'w-3 h-3',
        translate: 'translate-x-4',
      },
      sm: {
        track: 'w-10 h-5',
        thumb: 'w-4 h-4',
        translate: 'translate-x-5',
      },
      md: {
        track: 'w-12 h-6',
        thumb: 'w-5 h-5',
        translate: 'translate-x-6',
      },
      lg: {
        track: 'w-14 h-7',
        thumb: 'w-6 h-6',
        translate: 'translate-x-7',
      },
      xl: {
        track: 'w-16 h-8',
        thumb: 'w-7 h-7',
        translate: 'translate-x-8',
      },
    };

    const colorClasses = {
      primary: 'bg-primary-600',
      success: 'bg-success-600',
      warning: 'bg-warning-600',
      danger: 'bg-danger-600',
    };

    return (
      <div className={clsx('flex items-start', className)}>
        <div className="flex items-center h-5">
          <div className="relative">
            <input
              ref={ref}
              id={switchId}
              type="checkbox"
              checked={checked}
              className="sr-only"
              {...props}
            />
            
            <label
              htmlFor={switchId}
              className={clsx(
                'relative inline-flex items-center rounded-full transition-colors duration-200 cursor-pointer',
                'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500',
                sizeClasses[size].track,
                checked
                  ? colorClasses[color]
                  : 'bg-gray-200 dark:bg-gray-700'
              )}
            >
              <motion.span
                className={clsx(
                  'inline-block bg-white rounded-full shadow transform transition-transform duration-200',
                  sizeClasses[size].thumb
                )}
                animate={{
                  x: checked ? sizeClasses[size].translate.replace('translate-x-', '') + 'px' : '1px',
                }}
                transition={{ duration: 0.2 }}
              />
            </label>
          </div>
        </div>
        
        {(label || description) && (
          <div className="ml-3">
            {label && (
              <label
                htmlFor={switchId}
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

Switch.displayName = 'Switch';

export default Switch;
