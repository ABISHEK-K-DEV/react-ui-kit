import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { AccordionProps } from '../../types';

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  variant = 'default',
  className,
  ...props
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.indexOf(itemId) !== -1
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setOpenItems(prev =>
        prev.indexOf(itemId) !== -1 ? [] : [itemId]
      );
    }
  };

  const variantClasses = {
    default: 'space-y-2',
    bordered: 'border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden',
    separated: 'space-y-4',
  };

  return (
    <div className={clsx(variantClasses[variant], className)} {...props}>
      {items.map((item, index) => {
        const isOpen = openItems.indexOf(item.id) !== -1;
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.id}
            className={clsx(
              'bg-white dark:bg-gray-800',
              {
                'rounded-lg border border-gray-200 dark:border-gray-700': variant === 'default' || variant === 'separated',
                'border-b border-gray-200 dark:border-gray-700': variant === 'bordered' && !isLast,
              }
            )}
          >
            <button
              type="button"
              className={clsx(
                'w-full px-4 py-4 text-left flex items-center justify-between',
                'hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50',
                {
                  'disabled:opacity-50 disabled:cursor-not-allowed': item.disabled,
                  'rounded-t-lg': variant === 'bordered' && index === 0,
                  'rounded-b-lg': variant === 'bordered' && isLast && !isOpen,
                  'rounded-lg': variant !== 'bordered',
                }
              )}
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div className="flex items-center space-x-3">
                {item.icon && (
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.icon}
                  </span>
                )}
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {item.title}
                </span>
              </div>
              
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
