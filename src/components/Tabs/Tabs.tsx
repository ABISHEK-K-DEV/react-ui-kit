import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { TabsProps } from '../../types';

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  activeTab: controlledActiveTab,
  onTabChange,
  variant = 'line',
  size = 'md',
  orientation = 'horizontal',
  className,
  ...props
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultTab || items[0]?.id || ''
  );

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleTabChange = (tabId: string) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    onTabChange?.(tabId);
  };

  const activeTabContent = items.find(item => item.id === activeTab)?.content;

  const variantClasses = {
    line: 'border-b border-gray-200 dark:border-gray-700',
    enclosed: 'border border-gray-200 dark:border-gray-700 rounded-lg',
    'soft-rounded': 'bg-gray-100 dark:bg-gray-800 rounded-lg p-1',
    'solid-rounded': 'bg-white dark:bg-gray-800 shadow-soft rounded-lg',
  };

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  const getTabClasses = (item: any, isActive: boolean) => {
    const baseClasses = clsx(
      'relative inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50',
      sizeClasses[size],
      {
        'disabled:opacity-50 disabled:cursor-not-allowed': item.disabled,
        'cursor-pointer': !item.disabled,
      }
    );

    switch (variant) {
      case 'line':
        return clsx(
          baseClasses,
          'px-4 py-2 border-b-2 border-transparent',
          isActive
            ? 'text-primary-600 border-primary-600 dark:text-primary-400'
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
        );
      case 'enclosed':
        return clsx(
          baseClasses,
          'px-4 py-2 border-b border-transparent',
          isActive
            ? 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-primary-600 dark:text-primary-400'
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
        );
      case 'soft-rounded':
        return clsx(
          baseClasses,
          'px-3 py-1.5 rounded-md',
          isActive
            ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
        );
      case 'solid-rounded':
        return clsx(
          baseClasses,
          'px-4 py-2 rounded-lg',
          isActive
            ? 'bg-primary-600 text-white shadow-sm'
            : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400'
        );
      default:
        return baseClasses;
    }
  };

  return (
    <div
      className={clsx(
        'w-full',
        { 'flex': orientation === 'horizontal', 'flex-col': orientation === 'vertical' },
        className
      )}
      {...props}
    >
      {/* Tab List */}
      <div
        className={clsx(
          variantClasses[variant],
          {
            'flex overflow-x-auto': orientation === 'horizontal',
            'flex flex-col w-64': orientation === 'vertical',
          }
        )}
        role="tablist"
        aria-orientation={orientation}
      >
        {items.map((item) => {
          const isActive = item.id === activeTab;
          
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              disabled={item.disabled}
              className={getTabClasses(item, isActive)}
              onClick={() => !item.disabled && handleTabChange(item.id)}
            >
              <div className="flex items-center space-x-2">
                {item.icon && (
                  <span className="flex-shrink-0">
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
              </div>
              
              {variant === 'line' && isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                  layoutId="activeTab"
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div
        className={clsx(
          'flex-1',
          orientation === 'horizontal' ? 'mt-4' : 'ml-4'
        )}
      >
        {items.map((item) => (
          <div
            key={item.id}
            id={`tabpanel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
            className={clsx(
              item.id === activeTab ? 'block' : 'hidden'
            )}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
