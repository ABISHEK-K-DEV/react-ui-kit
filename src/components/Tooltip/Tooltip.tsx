import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { TooltipProps } from '../../types';

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  trigger = 'hover',
  delay = 0,
  arrow = true,
  disabled = false,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const showTooltip = () => {
    if (disabled) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const toggleTooltip = () => {
    if (disabled) return;
    setIsVisible(!isVisible);
  };

  const getPositionClasses = (pos: string) => {
    const baseClasses = 'absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded-md shadow-lg dark:bg-gray-700 dark:text-gray-200';

    switch (pos) {
      case 'top':
        return clsx(baseClasses, 'bottom-full left-1/2 transform -translate-x-1/2 mb-2');
      case 'top-start':
        return clsx(baseClasses, 'bottom-full left-0 mb-2');
      case 'top-end':
        return clsx(baseClasses, 'bottom-full right-0 mb-2');
      case 'bottom':
        return clsx(baseClasses, 'top-full left-1/2 transform -translate-x-1/2 mt-2');
      case 'bottom-start':
        return clsx(baseClasses, 'top-full left-0 mt-2');
      case 'bottom-end':
        return clsx(baseClasses, 'top-full right-0 mt-2');
      case 'left':
        return clsx(baseClasses, 'right-full top-1/2 transform -translate-y-1/2 mr-2');
      case 'right':
        return clsx(baseClasses, 'left-full top-1/2 transform -translate-y-1/2 ml-2');
      default:
        return baseClasses;
    }
  };

  const getArrowClasses = (pos: string) => {
    const baseClasses = 'absolute w-2 h-2 bg-gray-900 dark:bg-gray-700 transform rotate-45';

    switch (pos) {
      case 'top':
      case 'top-start':
      case 'top-end':
        return clsx(baseClasses, 'top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2');
      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        return clsx(baseClasses, 'bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2');
      case 'left':
        return clsx(baseClasses, 'left-full top-1/2 transform -translate-y-1/2 -translate-x-1/2');
      case 'right':
        return clsx(baseClasses, 'right-full top-1/2 transform -translate-y-1/2 translate-x-1/2');
      default:
        return baseClasses;
    }
  };

  const triggerProps = {
    ...(trigger === 'hover' && {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    }),
    ...(trigger === 'click' && {
      onClick: toggleTooltip,
    }),
    ...(trigger === 'focus' && {
      onFocus: showTooltip,
      onBlur: hideTooltip,
    }),
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={clsx('relative inline-block', className)} ref={triggerRef} {...props}>
      <div {...triggerProps}>
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className={getPositionClasses(position)}
            role="tooltip"
          >
            {content}
            {arrow && (
              <div className={getArrowClasses(position)} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
