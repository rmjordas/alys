/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const Switch = forwardRef(({ label, ...inputProps }, ref) => {
  const theme = useTheme().default;

  return (
    <label
      css={{
        position: 'relative',
        display: 'inline-block',
        width: '3.25em',
        height: '2em',
      }}
    >
      <input
        css={{
          opacity: 0,
          width: 0,
          height: 0,

          '&:checked': {
            '+ span': {
              backgroundColor: theme.color.success,
            },

            '+ span::before': {
              transform: 'translateX(1.25em)',
            },
          },

          '&:focus + span': {
            boxShadow: '0 0 0.0625em #2196f3',
          },
        }}
        type="checkbox"
        {...inputProps}
        ref={ref}
      />
      <span
        css={{
          position: 'absolute',
          cursor: 'pointer',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ccc',
          borderRadius: '2.5em',
          transition: `all .4s ${theme.easing.rubber}`,

          '&:before': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            height: '1.625em',
            width: '1.625em',
            top: '0.1875em',
            left: '0.1875em',
            backgroundColor: theme.color.baseInvert,
            transition: `all .4s ${theme.easing.rubber}`,
          },
        }}
      />
    </label>
  );
});

Switch.displayName = 'Switch';

Switch.defaultProps = {
  label: '',
  size: 'big',
  disabled: false,
};

Switch.propTypes = {
  /** Text to display beside the Switch */
  label: PropTypes.string,
  /** Determines the size of the Switch */
  size: PropTypes.oneOf(['big', 'small']),
  /** If true, will disable the Switch */
  disabled: PropTypes.bool,
};
