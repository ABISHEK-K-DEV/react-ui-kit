import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { RadioGroupProps } from '../../types';

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  defaultValue,
  onChange,
  size = 'md',
  color = 'primary',
  orientation = 'vertical',
  className,
  ...props
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || '');
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (optionValue: string) => {
    if (value === undefined) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
  };

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

  const dotSize = {
    xs: 'w-1 h-1',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
    xl: 'w-3 h-3',
  };

  return (
    <div
      className={clsx(
        'space-y-3',
        {
          'flex flex-col space-y-3': orientation === 'vertical',
          'flex flex-row space-x-6 space-y-0': orientation === 'horizontal',
        },
        className
      )}
      role="radiogroup"
      {...props}
    >
      {options.map((option) => {
        const isSelected = currentValue === option.value;
        const radioId = `${name}-${option.value}`;

        return (
          <div key={option.value} className="flex items-start">
            <div className="flex items-center h-5">
              <div className="relative">
                <input
                  id={radioId}
                  name={name}
                  type="radio"
                  value={option.value}
                  checked={isSelected}
                  disabled={option.disabled}
                  onChange={() => !option.disabled && handleChange(option.value)}
                  className={clsx(
                    'appearance-none border-2 border-gray-300 rounded-full',
                    'checked:bg-current checked:border-current',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    'transition-all duration-200 cursor-pointer',
                    sizeClasses[size],
                    colorClasses[color]
                  )}
                />
                
                {/* Radio dot */}
                <motion.div
                  className={clsx(
                    'absolute inset-0 flex items-center justify-center pointer-events-none'
                  )}
                  initial={false}
                  animate={{
                    scale: isSelected ? 1 : 0,
                    opacity: isSelected ? 1 : 0,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  <div
                    className={clsx(
                      'bg-white rounded-full',
                      dotSize[size]
                    )}
                  />
                </motion.div>
              </div>
            </div>
            
            <div className="ml-3">
              <label
                htmlFor={radioId}
                className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
              >
                {option.label}
              </label>
              {option.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {option.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
