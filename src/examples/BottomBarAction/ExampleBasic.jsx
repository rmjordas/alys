import React from 'react';
import BottomBarAction from 'alys/BottomBarAction';
import MentorIcon from 'alys/MentorIcon';

/** Default bottom bar action */
export default function ExampleBasic() {
  return <BottomBarAction value="Mentor" icon={<MentorIcon />} />;
}
