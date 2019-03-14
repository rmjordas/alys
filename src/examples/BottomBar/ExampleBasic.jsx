import React, { Fragment, useState } from 'react';
import BottomBar from 'alys/BottomBar';
import BottomBarAction from 'alys/BottomBarAction';
import HomeIcon from 'alys/HomeIcon';
import MentorIcon from 'alys/MentorIcon';
import CommentIcon from 'alys/CommentIcon';
import SettingsIcon from 'alys/SettingsIcon';

/** Basic bottom bar */
export default function ExampleBasic() {
  const [value, setValue] = useState('Mentor');

  const handleOnChange = (_event, v) => setValue(v);

  return (
    <Fragment>
      <p>
        Selected: <strong>{value}</strong>
      </p>

      <BottomBar value={value} onChange={handleOnChange}>
        <BottomBarAction value="Home" icon={<HomeIcon />} />
        <BottomBarAction value="Mentor" icon={<MentorIcon />} />
        <BottomBarAction value="Comment" icon={<CommentIcon />} />
        <BottomBarAction value="Settings" icon={<SettingsIcon />} />
      </BottomBar>
    </Fragment>
  );
}
