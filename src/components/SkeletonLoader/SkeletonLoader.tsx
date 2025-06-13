import React from 'react';
import clsx from 'clsx';
import { SkeletonProps } from '../../types';

const SkeletonLoader: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  lines = 1,
  animation = 'pulse',
  className,
  ...props
}) => {
  const baseClasses = clsx(
    'ui-skeleton rounded',
    {
      'animate-pulse': animation === 'pulse',
      'animate-none': animation === 'none',
    },
    className
  );

  const getSkeletonStyle = () => {
    const style: React.CSSProperties = {};
    if (width) style.width = typeof width === 'number' ? `${width}px` : width;
    if (height) style.height = typeof height === 'number' ? `${height}px` : height;
    return style;
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2" {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              baseClasses,
              'h-4',
              index === lines - 1 ? 'w-3/4' : 'w-full'
            )}
            style={getSkeletonStyle()}
          />
        ))}
      </div>
    );
  }

  const variantClasses = {
    text: 'h-4',
    rectangular: 'h-24',
    circular: 'rounded-full w-12 h-12',
  };

  return (
    <div
      className={clsx(
        baseClasses,
        variantClasses[variant],
        { 'w-full': !width && variant !== 'circular' }
      )}
      style={getSkeletonStyle()}
      {...props}
    />
  );
};

export default SkeletonLoader;
