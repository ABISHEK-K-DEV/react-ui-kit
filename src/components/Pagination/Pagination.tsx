import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { PaginationProps } from '../../types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  siblingCount = 1,
  size = 'md',
  variant = 'default',
  className,
  ...props
}) => {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 2 + 2 * siblingCount;
      for (let i = 1; i <= leftItemCount; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      pages.push(1);
      pages.push('...');
      const rightItemCount = 2 + 2 * siblingCount;
      for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (shouldShowLeftDots && shouldShowRightDots) {
      pages.push(1);
      pages.push('...');
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2 text-base',
    xl: 'px-5 py-3 text-lg',
  };

  const getButtonClasses = (isActive = false, isDisabled = false) => {
    const baseClasses = clsx(
      'inline-flex items-center justify-center font-medium rounded-lg',
      'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500',
      sizeClasses[size],
      {
        'cursor-not-allowed opacity-50': isDisabled,
        'cursor-pointer': !isDisabled,
      }
    );

    if (variant === 'outlined') {
      return clsx(
        baseClasses,
        isActive
          ? 'bg-primary-600 border border-primary-600 text-white'
          : 'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
      );
    } else if (variant === 'ghost') {
      return clsx(
        baseClasses,
        isActive
          ? 'bg-primary-600 text-white'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
      );
    } else {
      return clsx(
        baseClasses,
        isActive
          ? 'bg-primary-600 text-white shadow-sm'
          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
      );
    }
  };

  const pages = generatePageNumbers();

  return (
    <nav
      className={clsx('flex items-center space-x-1', className)}
      aria-label="Pagination"
      {...props}
    >
      {/* First Page */}
      {showFirstLast && currentPage > 1 && (
        <button
          type="button"
          onClick={() => onPageChange(1)}
          className={getButtonClasses(false, false)}
          aria-label="Go to first page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Previous Page */}
      {showPrevNext && (
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={getButtonClasses(false, currentPage === 1)}
          aria-label="Go to previous page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Page Numbers */}
      {pages.map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className={clsx(
                'inline-flex items-center justify-center',
                sizeClasses[size],
                'text-gray-500 dark:text-gray-400'
              )}
            >
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
          <motion.button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            className={getButtonClasses(isActive, false)}
            aria-label={`Go to page ${pageNumber}`}
            aria-current={isActive ? 'page' : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {pageNumber}
          </motion.button>
        );
      })}

      {/* Next Page */}
      {showPrevNext && (
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={getButtonClasses(false, currentPage === totalPages)}
          aria-label="Go to next page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Last Page */}
      {showFirstLast && currentPage < totalPages && (
        <button
          type="button"
          onClick={() => onPageChange(totalPages)}
          className={getButtonClasses(false, false)}
          aria-label="Go to last page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </nav>
  );
};

export default Pagination;
