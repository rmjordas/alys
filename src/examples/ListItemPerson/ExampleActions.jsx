import React from 'react';
import ListItemPerson from 'alys/ListItemPerson';
import CommentIcon from 'alys/CommentIcon';
import CalendarIcon from 'alys/CalendarIcon';

const moreOptionsActions = [
  {
    icon: <CommentIcon />,
    label: 'Message',
    onClick() {
      console.log('Message action clicked');
    },
  },
  {
    icon: <CalendarIcon />,
    label: 'Schedule',
    onClick() {
      console.log('Schedule action clicked');
    },
    color: 'primary',
  },
];

/** Actions provided to person list item */
export default function ExampleActions() {
  return (
    <ListItemPerson
      name="Bryce Compton"
      detail="Cowboy"
      moreOptionsActions={moreOptionsActions}
    />
  );
}
