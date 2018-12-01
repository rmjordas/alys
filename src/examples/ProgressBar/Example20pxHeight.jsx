import React from 'react';
import ProgressBar from 'alys/ProgressBar';

/** 20px height and 100% progress */
export default function Example20pxHeight() {
  return <ProgressBar percent={100} width={150} height={20} />;
}
