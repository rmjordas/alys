/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const TabPanel = forwardRef(({ contents, ...tabPanelProps }, ref) => {
  return (
    <div
      css={{}}
      tabIndex="0"
      {...tabPanelProps}
      ref={ref}
      role="tabpanel"
      aria-labelledby={`${tabPanelProps.id}-tab`}
    >
      {contents}
    </div>
  );
});

TabPanel.displayName = 'TabPanel';

TabPanel.propTypes = {
  contents: PropTypes.node.isRequired,
};
