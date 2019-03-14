import React, { Fragment } from 'react';
import Typography from 'alys/Typography';

/** Paragraphs */
export default function ExampleParagraphs() {
  return (
    <Fragment>
      <Typography variant="h1" gutterBottom>
        Wintermute
      </Typography>

      <Typography gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed ac
        pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed ac pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed
        ac pellentesque.
      </Typography>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed ac
        pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed ac pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed
        ac pellentesque.
      </Typography>
    </Fragment>
  );
}
