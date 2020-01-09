/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

import { VisuallyHidden } from './visually-hidden';
import { generateUeid } from './utils';

export const Switch = forwardRef(
  ({ label: ownLabel, showLabel, checked: ownChecked, disabled, ...inputProps }, ref) => {
    const theme = useTheme().default;
    const [checked, setChecked] = useState(ownChecked);

    const labelledby = `${inputProps.id || generateUeid()}-label`;

    let check = (e) => setChecked(e.target.checked);

    let checkedBackground = theme.color.success;
    let cursor = 'pointer';

    if (disabled) {
      check = undefined;
      checkedBackground = 'transparent';
      cursor = 'default';
    }

    return (
      <label
        css={{
          position: 'relative',
          display: 'inline-flex',
          height: '2em',
          fontFamily: theme.typography.fonts.base,
          fontWeight: theme.typography.weight.medium,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        htmlFor={inputProps.id}
      >
        <input
          css={{
            opacity: 0,
            width: 0,
            height: 0,

            '&:checked': {
              '+ span': {
                backgroundColor: checkedBackground,
              },

              '+ span::before': {
                transform: 'translateX(1.25em)',
              },
            },

            '&:focus + span': {
              boxShadow: '0 0 0.0625em #2196f3',
            },
          }}
          {...inputProps}
          checked={checked}
          role="switch"
          aria-checked={checked}
          onChange={check}
          tabIndex="0"
          aria-labelledby={labelledby}
          type="checkbox"
          ref={ref}
        />
        <span
          css={{
            cursor,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: disabled ? 'transparent' : '#ccc',
            border: disabled ? '0.0625em solid #ccc' : '0.0625em solid transparent',
            borderRadius: '2.5em',
            boxShadow: 'none',
            transition: `all .4s ${theme.easing.rubber}`,
            width: '3.25em',
            height: 'inherit',

            '&:before': {
              content: '""',
              position: 'absolute',
              borderRadius: '50%',
              height: '1.625em',
              width: '1.625em',
              top: '0.1875em',
              left: '0.1875em',
              backgroundColor: disabled ? '#ccc' : theme.color.baseInvert,
              transition: `all .4s ${theme.easing.rubber}`,
            },
          }}
        />
        {showLabel ? (
          <span
            css={{
              position: 'relative',
              left: '3.875em',
              color: disabled ? theme.color.textSubtle : theme.color.base,
            }}
            id={labelledby}
          >
            {ownLabel}
          </span>
        ) : (
          <VisuallyHidden id={labelledby}>{ownLabel}</VisuallyHidden>
        )}
      </label>
    );
  },
);

Switch.displayName = 'Switch';

Switch.defaultProps = {
  checked: false,
  showLabel: false,
  size: 'big',
  disabled: false,
};

Switch.propTypes = {
  /** Text to display beside the Switch */
  label: PropTypes.string.isRequired,
  /** If `true`, will display the toggle switch in an "on-state" */
  checked: PropTypes.bool,
  /**
   * If `true`, will add a label beside the toggle switch. Otherwise, it will hide the label using
   * the `VisuallyHidden` component.
   */
  showLabel: PropTypes.bool,
  /** Determines the size of the Switch */
  size: PropTypes.oneOf(['big', 'small']),
  /** If true, will disable the Switch */
  disabled: PropTypes.bool,
};
