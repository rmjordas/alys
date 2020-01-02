/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { forwardRef, Children, isValidElement, cloneElement } from 'react';
import { useTheme } from 'emotion-theming';

export const BreadcrumbItem = forwardRef(
  ({ currentPage: isCurrentPage, href, children, ...anchorProps }, ref) => {
    const theme = useTheme().default;

    return (
      <li
        css={{
          fontFamily: theme.typography.fonts.base,
          fontWeight: theme.typography.weight.medium,
          fontSize: theme.typography.size.s2,
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
        ref={ref}
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
            isCurrentPage && {
              color: theme.color.description,
              fontWeight: 700,
              textDecoration: 'none',
            },
          ].filter(Boolean)}
          {...anchorProps}
          href={href}
        >
          {children}
        </a>
      </li>
    );
  },
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

BreadcrumbItem.defaultProps = {
  currentPage: false,
};

BreadcrumbItem.propTypes = {
  /** An anchor element href */
  href: PropTypes.string.isRequired,
  /** Text to display */
  children: PropTypes.string.isRequired,
  /** If true, will make breadcrumb item link inert */
  currentPage: PropTypes.bool,
};

export const Breadcrumb = forwardRef(({ links = [], children, ...navProps }, ref) => {
  const theme = useTheme().default;

  const clones = Children.map(children, (v) => {
    if (!isValidElement(v)) {
      return;
    }

    return cloneElement(v);
  });

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
        {clones && clones.length > 0
          ? clones
          : links.map(({ href, text, isCurrentPage }) => (
              <BreadcrumbItem href={href} currentPage={isCurrentPage} key={href}>
                {text}
              </BreadcrumbItem>
            ))}
      </ol>
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.defaultProps = {
  links: [],
  children: null,
};

Breadcrumb.propTypes = {
  /** Contains attributes passed to breadcrumb item anchor elements. */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isCurrentPage: PropTypes.bool,
    }),
  ),
  /** Must be provided if `links` prop is not defined. If provided, `links` will be ignored. */
  children: PropTypes.node,
};
