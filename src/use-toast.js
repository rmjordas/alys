import { useContext } from 'react';

import { ToastContext } from './toast-context';

/** useToast returns the methods provided to the toast context */
export const useToast = () => {
  const { add, remove } = useContext(ToastContext);

  return { add, remove };
};
