import { useEffect } from 'react';

const useModalClose = (isOpen, onClose) => {
  

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose(false);
      }
    };

    const handleClick = (event) => {
      if (event.target.classList.contains('modal')) {
        onClose(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);
};

export { useModalClose };
