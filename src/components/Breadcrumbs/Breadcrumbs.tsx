import React from 'react';
import clsx from 'clsx';
import { BreadcrumbsProps } from '../../types';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator,
  maxItems,
  className,
  ...props
}) => {
  const defaultSeparator = (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const displayItems = React.useMemo(() => {
    if (!maxItems || items.length <= maxItems) return items;

    const firstItem = items[0];
    const lastItems = items.slice(-(maxItems - 1));
    
    return [
      firstItem,
      { label: '...', href: undefined, onClick: undefined, current: false },
      ...lastItems
    ];
  }, [items, maxItems]);

  return (
    <nav className={clsx('flex', className)} aria-label="Breadcrumb" {...props}>
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isEllipsis = item.label === '...';

          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">
                  {separator || defaultSeparator}
                </span>
              )}
              
              <div className="flex items-center">
                {item.icon && !isEllipsis && (
                  <span className="mr-2 text-gray-400">
                    {item.icon}
                  </span>
                )}
                
                {isEllipsis ? (
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.label}
                  </span>
                ) : item.href || item.onClick ? (
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className={clsx(
                      'text-sm font-medium transition-colors duration-200',
                      item.current || isLast
                        ? 'text-gray-500 dark:text-gray-400 cursor-default'
                        : 'text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300'
                    )}
                    aria-current={item.current || isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={clsx(
                      'text-sm font-medium',
                      item.current || isLast
                        ? 'text-gray-500 dark:text-gray-400'
                        : 'text-gray-700 dark:text-gray-300'
                    )}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
