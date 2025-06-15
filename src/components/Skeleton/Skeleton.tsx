import React from 'react';
import clsx from 'clsx';
import { SkeletonProps } from '../../types';

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  lines = 1,
  animation = 'pulse',
  className,
  ...props
}) => {
  const baseClasses = clsx(
    'bg-gray-200 dark:bg-gray-700',
    {
      'animate-pulse': animation === 'pulse',
      'ui-skeleton': animation === 'wave',
      'ui-skeleton-shimmer': animation === 'shimmer',
    }
  );

  const variantClasses = {
    text: 'rounded',
    rectangular: 'rounded-md',
    circular: 'rounded-full',
  };

  const getDefaultDimensions = () => {
    switch (variant) {
      case 'text':
        return { width: '100%', height: '1rem' };
      case 'circular':
        return { width: '3rem', height: '3rem' };
      case 'rectangular':
        return { width: '100%', height: '8rem' };
      default:
        return { width: '100%', height: '1rem' };
    }
  };

  const defaultDimensions = getDefaultDimensions();
  const finalWidth = width || defaultDimensions.width;
  const finalHeight = height || defaultDimensions.height;

  if (variant === 'text' && lines > 1) {
    return (
      <div className={clsx('space-y-2', className)} {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              baseClasses,
              variantClasses[variant],
              index === lines - 1 ? 'w-3/4' : 'w-full'
            )}
            style={{
              width: index === lines - 1 ? '75%' : finalWidth,
              height: finalHeight,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={{
        width: finalWidth,
        height: finalHeight,
      }}
      {...props}
    />
  );
};

export default Skeleton;
