/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

export const Typeset = ({ option, sampleText, ...wrapperProps }) => {
  const theme = useTheme().default;

  let toMap;
  let fontSize;
  let fontWeight;

  switch (option) {
    case 'weight':
      toMap = theme.typography.weight;
      fontSize = theme.typography.size.m2;
      break;
    case 'size':
    default:
      toMap = theme.typography.size;
      fontWeight = theme.typography.weight.regular;
      break;
  }

  return (
    <div
      css={{
        borderRadius: '0.3125em',
        background: theme.background.content,
        boxShadow:
          theme.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        border: `1px solid ${theme.color.subtle}`,
        margin: '1.5625em 0 2.5em',
        padding: '1.875em 1.25em',
        fontFamily: theme.typography.fonts.base,
      }}
      {...wrapperProps}
    >
      {Object.entries(toMap).map(([k, v]) => (
        <div
          key={k}
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

            '&:not(:last-child)': {
              marginBottom: '1em',
            },
          }}
        >
          <div
            css={{
              fontSize: theme.typography.size.s1,
              color: theme.color.textSubtle,
              flex: 0.08,
            }}
          >
            <strong>
              <code>{k}</code>
            </strong>
          </div>
          <div
            css={{
              lineHeight: 1.2,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontSize: option === 'size' ? v : fontSize,
              fontWeight: option === 'weight' ? v : fontWeight,
              flex: 0.92,
            }}
          >
            {sampleText}
          </div>
        </div>
      ))}
    </div>
  );
};

Typeset.defaultProps = {
  option: 'size',
  sampleText: 'Without change something sleeps inside us, and seldom awakens.',
};

Typeset.propTypes = {
  /** Sets the font option to showcase */
  option: PropTypes.oneOf(['size', 'weight']),
  /** Text to display */
  sampleText: PropTypes.string,
};
