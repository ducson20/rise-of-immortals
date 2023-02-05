import { useState } from 'react';

export function useNotification() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };

  const onError = (errors: any) => {
    setIsOpen(false);
    if (errors) setIsOpen(true);
  };

  return { isOpen, onClose, onError };
}
