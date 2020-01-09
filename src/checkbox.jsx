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

    let checkboxBgColor = 'transparent';
    let labelColor = theme.color.description;
    let cursor = 'pointer';
    let checkedBgColor = theme.color.accent;
    let checkedBorderColor = theme.color.accent;

    if (disabled) {
      check = undefined;
      checkboxBgColor = theme.color.subtle;
      labelColor = theme.color.textSubtle;
      cursor = 'default';
      checkedBgColor = theme.color.subtle;
      checkedBorderColor = theme.color.subtle;
    }

    return (
      <label
        css={{
          cursor,
          position: 'relative',
          paddingLeft: '2.1875em',
          color: labelColor,
          fontFamily: theme.typography.fonts.base,
          fontWeight: theme.typography.weight.medium,
          fontSize: theme.typography.size.s2,
          userSelect: 'none',
          height: '1.5625em',
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',

          '@media (hover: hover)': {
            '&:hover input ~ span:first-of-type': {
              backgroundColor: theme.color.subtle,
            },
          },

          '& input:checked ~ span:first-of-type': {
            background: checkedBgColor,
            border: `0.0625em solid ${checkedBorderColor}`,
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

            '&:focus + span': disabled
              ? undefined
              : {
                  boxShadow: '0 0 0 0.25em lightskyblue',
                },
          }}
          type="checkbox"
          {...inputProps}
          disabled={disabled}
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
            height: '1.5625em',
            width: '1.5625em',
            backgroundColor: checkboxBgColor,
            border: `0.0625em solid ${theme.color.subtle}`,
            transition: `all 0.2s ${theme.easing.rubber}`,
            borderRadius: '0.25em',

            '&:after': {
              content: '""',
              position: 'absolute',
              display: 'none',

              left: '0.5625em',
              top: '0.3125em',
              width: '0.3125em',
              height: '0.625em',
              border: `solid ${theme.color.baseInvert}`,
              borderWidth: '0 0.1875em 0.1875em 0',
              transform: 'rotate(45deg)',
            },
          }}
        />
        {showLabel ? (
          <span
            css={{
              position: 'relative',
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
