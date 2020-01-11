/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { Fragment, forwardRef } from 'react';

import { ChevronRightIcon } from './icons/chevron-right-icon';

export const BreadcrumbItem = forwardRef(({ active, href, children, ...listItemProps }, ref) => {
  const theme = useTheme().default;

  return (
    <li
      css={{
        fontFamily: theme.typography.fonts.base,
        fontWeight: theme.typography.weight.medium,
        fontSize: theme.typography.size.s2,
        display: 'inline',
      }}
      {...listItemProps}
      ref={ref}
    >
      <Fragment>
        {href && !active ? (
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
              active && {
                color: theme.color.description,
                textDecoration: 'none',
              },
            ].filter(Boolean)}
            href={href}
            aria-current={active ? 'page' : undefined}
          >
            {children}
          </a>
        ) : (
          <span
            css={{
              color: theme.color.description,
              textDecoration: 'none',
            }}
          >
            {children}
          </span>
        )}

        {!active && (
          <span css={{ color: theme.color.textSubtle }} role="presentation">
            <ChevronRightIcon width="26" height="26" />
          </span>
        )}
      </Fragment>
    </li>
  );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';

BreadcrumbItem.defaultProps = {
  active: false,
};

BreadcrumbItem.propTypes = {
  /** An anchor element href */
  href: PropTypes.string.isRequired,
  /** Text to display */
  children: PropTypes.string.isRequired,
  /** If true, will make breadcrumb item link inert */
  active: PropTypes.bool,
};
