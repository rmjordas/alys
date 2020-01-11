/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { forwardRef, Children, isValidElement, cloneElement } from 'react';
import { useTheme } from 'emotion-theming';

import { BreadcrumbItem } from './breadcrumb-item';

export const Breadcrumb = forwardRef(({ children, ...navProps }, ref) => {
  const theme = useTheme().default;

  const clones = Children.map(children, (v, i) => {
    if (!isValidElement(v)) {
      return;
    }

    return cloneElement(v, {
      active: i + 1 === Children.count(children),
    });
  });

  return (
    <nav
      css={{
        fontFamily: theme.typography.fonts.base,
        fontWeight: theme.typography.weight.medium,
        color: theme.color.description,
        padding: '0.8em 1em',
        borderRadius: 4,
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
        {clones}
      </ol>
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {
  /** A list of BreadcrumbItems to display */
  children: PropTypes.arrayOf(PropTypes.instanceOf(BreadcrumbItem)).isRequired,
};
