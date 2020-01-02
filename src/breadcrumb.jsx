/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useTheme } from 'emotion-theming';

export const Breadcrumb = forwardRef(({ links = [], ...navProps }, ref) => {
  const theme = useTheme().default;

  return (
    <nav
      css={{
        fontFamily: theme.typography.fonts.base,
        fontWeight: theme.typography.weight.medium,
        fontSize: theme.typography.size.s2,
        color: theme.color.description,
        padding: '0.8em 1em',
        border: '1px solid hsl(0, 0%, 90%)',
        borderRadius: 4,
        background: 'hsl(300, 14%, 97%)',
        cursor: 'default',
      }}
      aria-label="Breadcrumb"
      {...navProps}
      ref={ref}
    >
      <ol
        css={{
          margin: 0,
          paddingLeft: 0,
          listStyle: 'none',
        }}
      >
        {links.map(({ href, text, isCurrentPage }, i, a) => (
          <li
            css={{
              display: 'inline',

              '& + &:before': {
                content: `''`,
                display: 'inline-block',
                margin: '0 0.5em',
                transform: 'rotate(15deg)',
                borderRight: `0.1em solid ${theme.color.description}`,
                height: '0.8em',
              },
            }}
            key={href}
          >
            <a
              css={[
                {
                  color: theme.color.accent600,
                  textDecoration: 'none',
                  transition: `color 0.2s ${theme.easing.rubber}`,

                  '@media (hover: hover)': {
                    '&:hover': {
                      color: theme.color.accent,
                    },
                  },
                },
                (isCurrentPage || a.length - 1 === i) && {
                  color: theme.color.description,
                  fontWeight: 700,
                  textDecoration: 'none',
                },
              ].filter(Boolean)}
              href={href}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.defaultProps = {
  links: [],
};

Breadcrumb.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isCurrentPage: PropTypes.bool,
    }),
  ),
};
