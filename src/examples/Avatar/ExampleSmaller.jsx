import React from 'react';
import Avatar from 'alys/Avatar';

import img from '../../app/assets/alys.jpg';

/** Smaller size avatar */
export default function ExampleSmaller() {
  return <Avatar src={img} size="smaller" />;
}