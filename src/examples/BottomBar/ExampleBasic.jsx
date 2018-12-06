import React, { PureComponent } from 'react';
import BottomBar from 'alys/BottomBar';
import BottomBarAction from 'alys/BottomBarAction';
import HomeIcon from 'alys/HomeIcon';
import MentorIcon from 'alys/MentorIcon';
import CommentIcon from 'alys/CommentIcon';
import SettingsIcon from 'alys/SettingsIcon';

/** Basic bottom bar */
export default class ExampleBasic extends PureComponent {
  state = {
    value: 'Mentor',
  };

  render() {
    return (
      <React.Fragment>
        <p>
          Selected: <strong>{this.state.value}</strong>
        </p>

        <BottomBar value={this.state.value} onChange={this._handleOnChange}>
          <BottomBarAction value="Home" icon={<HomeIcon />} />
          <BottomBarAction value="Mentor" icon={<MentorIcon />} />
          <BottomBarAction value="Comment" icon={<CommentIcon />} />
          <BottomBarAction value="Settings" icon={<SettingsIcon />} />
        </BottomBar>
      </React.Fragment>
    );
  }

  _handleOnChange = (event, value) => this.setState({ value });
}
