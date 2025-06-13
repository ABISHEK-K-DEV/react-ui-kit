import React, { useState } from 'react';
import clsx from 'clsx';
import { AvatarProps } from '../../types';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  variant = 'circle',
  fallbackIcon,
  status,
  className,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };

  const variantClasses = {
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded-lg',
  };

  const statusClasses = {
    online: 'bg-green-400',
    offline: 'bg-gray-400',
    away: 'bg-yellow-400',
    busy: 'bg-red-400',
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getStatusSize = () => {
    switch (size) {
      case 'xs': return 'w-2 h-2';
      case 'sm': return 'w-2.5 h-2.5';
      case 'md': return 'w-3 h-3';
      case 'lg': return 'w-3.5 h-3.5';
      case 'xl': return 'w-4 h-4';
      default: return 'w-3 h-3';
    }
  };

  const avatarContent = () => {
    if (src && !imageError) {
      return (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className={clsx(
            'w-full h-full object-cover',
            variantClasses[variant]
          )}
          onError={() => setImageError(true)}
        />
      );
    }

    if (name) {
      return (
        <div
          className={clsx(
            'w-full h-full flex items-center justify-center font-medium',
            'bg-gradient-to-br from-primary-500 to-primary-600 text-white',
            variantClasses[variant]
          )}
        >
          {getInitials(name)}
        </div>
      );
    }

    if (fallbackIcon) {
      return (
        <div
          className={clsx(
            'w-full h-full flex items-center justify-center',
            'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400',
            variantClasses[variant]
          )}
        >
          {fallbackIcon}
        </div>
      );
    }

    return (
      <div
        className={clsx(
          'w-full h-full flex items-center justify-center',
          'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400',
          variantClasses[variant]
        )}
      >
        <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </div>
    );
  };

  return (
    <div
      className={clsx(
        'relative inline-block',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {avatarContent()}
      
      {status && (
        <span
          className={clsx(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-gray-800',
            getStatusSize(),
            statusClasses[status]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
};

export default Avatar;
