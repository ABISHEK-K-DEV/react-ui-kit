import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ProgressProps } from '../../types';

const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = 'linear',
  size = 'md',
  color = 'primary',
  showLabel = false,
  label,
  animated = false,
  striped = false,
  className,
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const colorClasses = {
    primary: 'bg-primary-600',
    success: 'bg-success-600',
    warning: 'bg-warning-600',
    danger: 'bg-danger-600',
  };

  const sizeClasses = {
    linear: {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
      xl: 'h-6',
    },
    circular: {
      xs: 'w-8 h-8',
      sm: 'w-12 h-12',
      md: 'w-16 h-16',
      lg: 'w-20 h-20',
      xl: 'w-24 h-24',
    },
  };

  if (variant === 'circular') {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={clsx('relative inline-flex items-center justify-center', className)} {...props}>
        <svg
          className={clsx(sizeClasses.circular[size], 'transform -rotate-90')}
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200 dark:text-gray-700"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            className={colorClasses[color]}
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        
        {showLabel && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {label || `${Math.round(percentage)}%`}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={className} {...props}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label || 'Progress'}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      
      <div
        className={clsx(
          'w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700',
          sizeClasses.linear[size]
        )}
      >
        <motion.div
          className={clsx(
            'h-full rounded-full transition-all duration-300',
            colorClasses[color],
            {
              'ui-progress-striped': striped,
              'ui-progress-animated': animated && striped,
            }
          )}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

export default Progress;
