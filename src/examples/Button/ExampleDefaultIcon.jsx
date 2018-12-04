import React from 'react';
import Button from 'alys/Button';
import MentorIcon from 'alys/MentorIcon';

/** Default button with icon */
export default function ExampleDefaultIcon() {
  return (
    <Button
      text="Example default with icon"
      icon={MentorIcon}
      onClick={() => {}}
    />
  );
}
