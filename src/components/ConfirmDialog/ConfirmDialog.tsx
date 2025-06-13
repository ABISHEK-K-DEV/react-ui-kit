import React from 'react';
import { ConfirmDialogProps } from '../../types';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to perform this action?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'default',
  loading = false,
  className,
  ...props
}) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const getIcon = () => {
    if (variant === 'danger') {
      return (
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full dark:bg-red-900/20">
          <svg
            className="w-6 h-6 text-red-600 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full dark:bg-blue-900/20">
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    );
  };

  const footer = (
    <div className="flex space-x-3">
      <Button
        variant="outline"
        onClick={onClose}
        disabled={loading}
        className="flex-1"
      >
        {cancelText}
      </Button>
      <Button
        variant={variant === 'danger' ? 'danger' : 'primary'}
        onClick={handleConfirm}
        loading={loading}
        className="flex-1"
      >
        {confirmText}
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      footer={footer}
      className={className}
      {...props}
    >
      <div className="text-center">
        {getIcon()}
        <p className="text-gray-600 dark:text-gray-400">
          {message}
        </p>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
