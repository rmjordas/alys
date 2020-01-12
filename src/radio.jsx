/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';

import { VisuallyHidden } from './visually-hidden';
import { generateUeid } from './utils';

export const Radio = forwardRef(
  ({ label: ownLabel, showLabel, checked, disabled, onChange, ...inputProps }, ref) => {
    const theme = useTheme().default;

    const id = inputProps.id || useMemo(generateUeid, []);
    const labelledby = `${id}-label`;

    let cursor = 'pointer';
    let checkboxBgColor = 'transparent';
    let labelColor = theme.color.description;
    let checkedBgColor = theme.color.accent;
    let checkedBorderColor = theme.color.accent;

    if (disabled) {
      checkboxBgColor = theme.color.subtle;
      onChange = undefined;
      cursor = 'default';
      labelColor = theme.color.textSubtle;
      checkedBgColor = theme.color.subtle;
      checkedBorderColor = theme.color.subtle;
    }

    return (
      <label
        css={{
          cursor,
          color: labelColor,
          display: 'inline-flex',
          position: 'relative',
          paddingLeft: '2.1875em',
          fontFamily: theme.typography.fonts.base,
          fontWeight: theme.typography.weight.medium,
          fontSize: theme.typography.size.s3,
          userSelect: 'none',
          height: '1.5625em',
          flexDirection: 'row',
          alignItems: 'center',

          '@media (hover: hover)': {
            '&:hover input ~ span:first-of-type': {
              // backgroundColor: '#ccc',
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
          type="radio"
          defaultChecked={onChange ? undefined : checked}
          disabled={disabled}
          checked={onChange ? checked : undefined}
          aria-checked={checked}
          aria-labelledby={labelledby}
          onChange={onChange}
          tabIndex={inputProps.tabIndex || 0}
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
            borderRadius: '50%',

            '&:after': {
              content: '""',
              position: 'absolute',
              display: 'none',
              top: '0.25em',
              left: '0.25em',
              width: '0.5em',
              height: '0.5em',
              borderRadius: '50%',
              background: 'white',
            },
          }}
        ></span>
        {showLabel ? (
          <span
            css={{
              position: 'relative',
              fontSize: theme.typography.size.s2,
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

Radio.displayName = 'Radio';

Radio.defaultProps = {
  showLabel: true,
  disabled: false,
  checked: false,
};

Radio.propTypes = {
  /** Text to display beside the radio input */
  label: PropTypes.string.isRequired,
  /**
   * If `true`, will add a label beside the radio input. Otherwise, it will hide the label using
   * the `VisuallyHidden` component.
   */
  showLabel: PropTypes.bool,
  /** If true, will disable the Radio component */
  disabled: PropTypes.bool,
  /** If `true`, will fill the inside of the radio input */
  checked: PropTypes.bool,
  /** An onChange event handler for controlling the radio input */
  onChange: PropTypes.func,
};
