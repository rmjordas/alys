import React from 'react';
import Button from 'alys/Button';
import RegisterIcon from 'alys/RegisterIcon';

/** Block with icon button */
export default function ExampleBlockIcon() {
  return (
    <Button
      block
      icon={RegisterIcon}
      text="Example block with Icon"
      onClick={() => {}}
    />
  );
}
