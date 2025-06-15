import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { DatePickerProps } from '../../types';
import { useClickOutside } from '../../hooks/useClickOutside';

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  error,
  helperText,
  value,
  onChange,
  minDate,
  maxDate,
  placeholder = 'Select date',
  size = 'md',
  variant = 'outline',
  format = 'MM/DD/YYYY',
  showTodayButton = true,
  showClearButton = true,
  className,
  id,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const datePickerId = id || `datepicker-${Math.random().toString(36).substr(2, 9)}`;
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedDate(null);
    onChange?.(null);
    setIsOpen(false);
  };

  const handleToday = () => {
    const today = new Date();
    handleDateSelect(today);
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days: (Date | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
    }

    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(newMonth.getMonth() - 1);
      } else {
        newMonth.setMonth(newMonth.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs rounded',
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-3 py-2.5 text-sm rounded-lg',
    lg: 'px-4 py-3 text-base rounded-lg',
    xl: 'px-4 py-4 text-lg rounded-xl',
  };

  const variantClasses = {
    outline: clsx(
      'border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600',
      'focus:border-primary-500 dark:focus:border-primary-400',
      error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
    ),
    filled: clsx(
      'border-0 bg-gray-100 dark:bg-gray-700',
      'focus:bg-white dark:focus:bg-gray-800',
      error ? 'bg-red-50 dark:bg-red-900/20 focus:ring-red-500' : ''
    ),
    ghost: clsx(
      'border-0 bg-transparent',
      'hover:bg-gray-50 dark:hover:bg-gray-800',
      'focus:bg-white dark:focus:bg-gray-800',
      error ? 'focus:ring-red-500' : ''
    ),
  };

  const calendar = generateCalendar();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className={clsx('relative', className)}>
      {label && (
        <label
          htmlFor={datePickerId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      
      <div ref={containerRef} className="relative">
        <input
          id={datePickerId}
          type="text"
          readOnly
          value={formatDate(selectedDate)}
          placeholder={placeholder}
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            'w-full cursor-pointer',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'text-gray-900 dark:text-gray-100',
            'pr-10',
            sizeClasses[size],
            variantClasses[variant]
          )}
          {...props}
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.16, 1, 0.3, 1],
                scale: { type: "spring", damping: 25, stiffness: 400 }
              }}
              className="ui-calendar absolute z-50 mt-2 p-6 min-w-[320px] shadow-2xl"
            >
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <motion.button
                  type="button"
                  onClick={() => navigateMonth('prev')}
                  className="p-2 rounded-lg hover:bg-white/20 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                
                <motion.button
                  type="button"
                  onClick={() => navigateMonth('next')}
                  className="p-2 rounded-lg hover:bg-white/20 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((day) => (
                  <div key={day} className="text-xs font-medium text-center text-gray-500 dark:text-gray-400 py-1">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendar.map((date, index) => {
                  if (!date) {
                    return <div key={index} className="w-8 h-8" />;
                  }

                  const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                  const isToday = date.toDateString() === new Date().toDateString();
                  const isDisabled = isDateDisabled(date);

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => !isDisabled && handleDateSelect(date)}
                      disabled={isDisabled}
                      className={clsx(
                        'w-8 h-8 text-sm rounded-md transition-colors duration-200',
                        'hover:bg-gray-100 dark:hover:bg-gray-700',
                        'focus:outline-none focus:ring-2 focus:ring-primary-500',
                        {
                          'bg-primary-600 text-white': isSelected,
                          'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400': isToday && !isSelected,
                          'text-gray-400 cursor-not-allowed': isDisabled,
                          'text-gray-900 dark:text-gray-100': !isDisabled && !isSelected && !isToday,
                        }
                      )}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>

              {/* Footer Actions */}
              {(showTodayButton || showClearButton) && (
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    {showTodayButton && (
                      <button
                        type="button"
                        onClick={handleToday}
                        className="text-xs text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        Today
                      </button>
                    )}
                    {showClearButton && selectedDate && (
                      <button
                        type="button"
                        onClick={handleClear}
                        className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {(error || helperText) && (
        <p
          className={clsx(
            'text-xs mt-1',
            error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
