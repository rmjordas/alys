import { useContext } from 'react';

import { ToastContext } from './toast-context';

export const useToast = () => {
  const { add, remove } = useContext(ToastContext);

  return { add, remove };
};
