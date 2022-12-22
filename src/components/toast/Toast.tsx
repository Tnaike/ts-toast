import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/toast-close.svg';
import { ReactComponent as CheckIcon } from '../../assets/toast-check.svg';
import { ReactComponent as CheckError } from '../../assets/toast-error.svg';
import { ReactComponent as CheckWarning } from '../../assets/toast-warning.svg';

type ToastType = 'success' | 'error' | 'warning';

interface ToastProps {
  type: ToastType;
  message: string;
  delay?: number;
  align?: string;
}

const backgroundColor: Record<ToastType, string> = {
  success: 'text-green-900 bg-green-200',
  error: 'text-red-500 bg-red-200',
  warning: 'text-yellow-900 bg-yellow-100',
};

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  delay = 10000,
  align = 'left',
}) => {
  const [showToast, setShowToast] = useState<boolean>(true);

  const toastIcon = () => {
    switch (type) {
      case 'success':
        return <CheckIcon className='mr-4' />;
      case 'error':
        return <CheckError className='mr-4' />;
      case 'warning':
        return <CheckWarning className='mr-4' />;
      default:
        return '';
    }
  };

  const handleClose = () => {
    setShowToast(false);
  };

  setTimeout(() => {
    setShowToast(false);
  }, delay);

  return showToast ? (
    <div
      data-testid='toast-id'
      className={`fixed flex top-[60px] left-0 items-center text-sm font-bold justify-center p-5 w-full ${backgroundColor[type]}`}
    >
      <div className='flex items-center'>
        {toastIcon()} {message}
      </div>

      <CloseIcon
        data-testid='close-toast'
        className='absolute cursor-pointer right-5'
        onClick={handleClose}
      />
    </div>
  ) : null;
};
export default Toast;
