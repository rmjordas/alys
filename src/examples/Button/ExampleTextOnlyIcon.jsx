import React from 'react';
import Button from 'alys/Button';
import RegisterIcon from 'alys/RegisterIcon';

/** Text-only type button with icon */
export default function ExampleTextOnlyIcon() {
  return (
    <Button
      type="link"
      text="Example text only with icon"
      icon={RegisterIcon}
    />
  );
}
