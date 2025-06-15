import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { LoaderProps } from '../../types';

const Loader: React.FC<LoaderProps> = ({
  variant = 'spinner',
  size = 'md',
  color = 'primary',
  overlay = false,
  text,
  speed = 'normal',
  gradient = false,
  className,
  ...props
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    primary: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
  };

  const colorValue = colorClasses[color];

  const SpinnerLoader = () => (
    <svg
      className={clsx('animate-spin', sizeClasses[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={colorValue}
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill={colorValue}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const DotsLoader = () => {
    const dotSizes = {
      xs: 'w-1 h-1',
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4',
    };

    return (
      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={clsx('rounded-full', dotSizes[size])}
            style={{ 
              background: gradient 
                ? `linear-gradient(135deg, ${colorValue}, ${colorValue}80)`
                : colorValue 
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
              y: [0, -10, 0],
            }}
            transition={{
              duration: speed === 'fast' ? 0.4 : speed === 'slow' ? 1.0 : 0.6,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  const BarsLoader = () => {
    const barWidths = {
      xs: 'w-0.5',
      sm: 'w-1',
      md: 'w-1.5',
      lg: 'w-2',
      xl: 'w-3',
    };

    const heightValues = {
      xs: { max: '16px', min: '4px' },
      sm: { max: '20px', min: '6px' },
      md: { max: '28px', min: '8px' },
      lg: { max: '36px', min: '12px' },
      xl: { max: '48px', min: '16px' },
    };

    return (
      <div className="flex items-end space-x-1">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className={clsx(barWidths[size], 'rounded-t-md')}
            style={{ 
              background: gradient 
                ? `linear-gradient(to top, ${colorValue}, ${colorValue}60)`
                : colorValue 
            }}
            animate={{
              height: [heightValues[size].min, heightValues[size].max, heightValues[size].min],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: speed === 'fast' ? 0.6 : speed === 'slow' ? 1.2 : 0.8,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  const PulseLoader = () => (
    <motion.div
      className={clsx('rounded-full', sizeClasses[size])}
      style={{ 
        background: gradient 
          ? `linear-gradient(135deg, ${colorValue}, ${colorValue}40)`
          : colorValue 
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: speed === 'fast' ? 0.8 : speed === 'slow' ? 1.6 : 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  const OrbitLoader = () => (
    <div className={clsx('relative', sizeClasses[size])}>
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        style={{ borderTopColor: colorValue }}
        animate={{ rotate: 360 }}
        transition={{
          duration: speed === 'fast' ? 0.8 : speed === 'slow' ? 2.0 : 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-1 rounded-full border-2 border-transparent"
        style={{ borderBottomColor: `${colorValue}60` }}
        animate={{ rotate: -360 }}
        transition={{
          duration: speed === 'fast' ? 1.2 : speed === 'slow' ? 3.0 : 1.8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );

  const RippleLoader = () => (
    <div className={clsx('relative', sizeClasses[size])}>
      {[0, 1].map((index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: colorValue }}
          animate={{
            scale: [0, 1],
            opacity: [1, 0],
          }}
          transition={{
            duration: speed === 'fast' ? 1.0 : speed === 'slow' ? 2.0 : 1.5,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );

  const MorphingLoader = () => (
    <motion.div
      className={clsx('rounded-full', sizeClasses[size])}
      style={{ 
        background: gradient 
          ? `linear-gradient(135deg, ${colorValue}, ${colorValue}40)`
          : colorValue 
      }}
      animate={{
        borderRadius: [
          "20% 80% 80% 20% / 20% 80% 20% 80%",
          "80% 20% 20% 80% / 80% 20% 80% 20%",
          "20% 80% 80% 20% / 80% 20% 80% 20%",
          "80% 20% 20% 80% / 20% 80% 20% 80%",
          "20% 80% 80% 20% / 20% 80% 20% 80%"
        ],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: speed === 'fast' ? 2.0 : speed === 'slow' ? 4.0 : 3.0,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return <DotsLoader />;
      case 'bars':
        return <BarsLoader />;
      case 'pulse':
        return <PulseLoader />;
      case 'orbit':
        return <OrbitLoader />;
      case 'ripple':
        return <RippleLoader />;
      case 'morphing':
        return <MorphingLoader />;
      case 'spinner':
      default:
        return <SpinnerLoader />;
    }
  };

  const loaderContent = (
    <div className={clsx('flex flex-col items-center justify-center', className)} {...props}>
      {renderLoader()}
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {text}
        </p>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          {loaderContent}
        </div>
      </div>
    );
  }

  return loaderContent;
};

export default Loader;
