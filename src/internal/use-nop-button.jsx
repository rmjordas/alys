/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState, useCallback, useEffect, useRef } from 'react';

export const useNopButton = (message, ok) => {
  const [isOk, setIsOk] = useState(ok);
  const timerRef = useRef();

  const setok = useCallback((ok) => () => setIsOk(ok), []);

  useEffect(() => {
    if (isOk) {
      timerRef.current = setTimeout(setok(false), 2000);
    }

    return timerRef.current ? () => clearTimeout(timerRef.current) : undefined;
  }, [isOk, setok]);

  const NopButton = (buttonProps) => (
    <Fragment>
      <button
        css={{
          position: 'relative',
        }}
        {...buttonProps}
        onClick={setok(true)}
      >
        {message}
      </button>{' '}
      {isOk ? <span css={{ position: 'absolute', paddingLeft: 10 }}>NOP</span> : null}
    </Fragment>
  );

  return [isOk, NopButton, setIsOk];
};
