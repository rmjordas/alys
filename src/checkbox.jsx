/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { VisuallyHidden } from './visually-hidden';
import { generateUeid } from './utils';

export const Checkbox = forwardRef(
  ({ label: ownLabel, showLabel, checked, disabled, onChange, ...inputProps }, ref) => {
    const theme = useTheme().default;

    const id = inputProps.id || generateUeid();
    const labelledby = `${id}-label`;

    let checkboxBgColor = 'transparent';
    let labelColor = theme.color.description;
    let cursor = 'pointer';
    let checkedBgColor = theme.color.accent;
    let checkedBorderColor = theme.color.accent;

    if (disabled) {
      onChange = undefined;
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
              // backgroundColor: theme.color.subtle,
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
        htmlFor={id}
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
                  boxShadow: '0 0 0 0.1875em lightskyblue',
                },
          }}
          {...inputProps}
          id={id}
          type="checkbox"
          defaultChecked={onChange ? undefined : checked}
          disabled={disabled}
          checked={onChange ? checked : undefined}
          aria-checked={checked}
          aria-labelledby={labelledby}
          onChange={onChange}
          tabIndex="0"
          ref={ref}
        />
        <span
          css={{
            position: 'absolute',
            left: 0,
            height: '1em',
            width: '1em',
            backgroundColor: checkboxBgColor,
            border: `0.0625em solid ${theme.color.subtle}`,
            transition: `all 0.2s ${theme.easing.rubber}`,
            borderRadius: '0.25em',

            '&:after': {
              content: '""',
              position: 'absolute',
              display: 'none',
              left: '0.3em',
              top: '0.075em',
              width: '0.2em',
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
  /** Text to display beside the check box */
  label: PropTypes.string.isRequired,
  /**
   * If `true`, will add a label beside the check box. Otherwise, it will hide the label using
   * the `VisuallyHidden` component.
   */
  showLabel: PropTypes.bool,
  /** If true, will disable the Checkbox */
  disabled: PropTypes.bool,
  /** If `true`, will display a check mark inside the check box */
  checked: PropTypes.bool,
  /** An onChange event handler for controlling the checkbox */
  onChange: PropTypes.func,
};
