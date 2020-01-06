/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useToast } from '../use-toast';

export const ToastExample = () => {
  const toast = useToast();

  const show = () => toast.add('Toasty at ' + new Date().getMilliseconds().toString() + ' Kelvin');

  return <button onClick={show}>Show toast</button>;
};
