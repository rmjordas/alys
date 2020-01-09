/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

import { VisuallyHidden } from './visually-hidden';
import { generateUeid } from './utils';

export const Checkbox = forwardRef(
  ({ label: ownLabel, showLabel, checked: ownChecked, disabled, ...inputProps }, ref) => {
    const theme = useTheme().default;
    const [checked, setChecked] = useState(ownChecked);

    const labelledby = `${inputProps.id || generateUeid()}-label`;

    let check = (e) => setChecked(e.target.checked);

    return (
      <label
        css={{
          position: 'relative',
          paddingLeft: 35,
          cursor: 'pointer',
          color: theme.color.description,
          fontFamily: theme.typography.fonts.base,
          fontWeight: theme.typography.weight.medium,
          fontSize: theme.typography.size.s2,
          userSelect: 'none',
          height: 25,
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',

          '@media (hover: hover)': {
            '&:hover input ~ span:first-of-type': {
              backgroundColor: '#ccc',
            },
          },

          '& input:checked ~ span:first-of-type': {
            background: theme.color.accent,
          },

          '& input:checked ~ span:first-of-type:after': {
            display: 'block',
          },
        }}
        htmlFor={inputProps.id}
      >
        <input
          css={{
            position: 'absolute',
            opacity: 0,
            height: 0,
            width: 0,
          }}
          type="checkbox"
          {...inputProps}
          checked={checked}
          aria-checked={checked}
          onChange={check}
          tabIndex="0"
          ref={ref}
        />
        <span
          css={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 25,
            width: 25,
            backgroundColor: '#eee',
            transition: `all 0.2s ${theme.easing.rubber}`,
            borderRadius: '0.25em',

            '&:after': {
              content: '""',
              position: 'absolute',
              display: 'none',

              left: 9,
              top: 5,
              width: 5,
              height: 10,
              border: 'solid white',
              borderWidth: '0 3px 3px 0',
              transform: 'rotate(45deg)',
            },
          }}
        />
        {showLabel ? (
          <span
            css={{
              position: 'relative',
              color: disabled ? theme.color.textSubtle : theme.color.description,
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

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  showLabel: true,
  disabled: false,
  checked: false,
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};
