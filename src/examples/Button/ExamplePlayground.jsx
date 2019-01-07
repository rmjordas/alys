import React, { Component } from 'react';
import Button from 'alys/Button';
import ArrowLeftIcon from 'alys/ArrowLeftIcon';

import ToggleButton from '../../app/common/ToggleButton';

/** Button playgound */
export default class ExamplePlayground extends Component {
  state = {
    disabled: false,
    count: 0,
  };

  render() {
    const common = {
      disabled: this.state.disabled,
      onClick: this._updateCount,
    };

    return (
      <React.Fragment>
        <ToggleButton
          on={this.state.disabled}
          onClick={this._toggleButtonDisabledState}
          onText="enable"
          offText="disable"
        />

        <p>
          Count: <strong>{this.state.count}</strong>
        </p>

        <div style={{ textAlign: 'center' }}>
          <Button
            basic
            text="basic"
            {...common}
            style={{ marginBottom: '1em' }}
          />

          <Button block text="block" {...common} />

          <Button text="default" {...common} />

          <Button iconOnly icon={ArrowLeftIcon} {...common} />

          <Button type="link" text="Link" {...common} />
        </div>
      </React.Fragment>
    );
  }

  _toggleButtonDisabledState = () =>
    this.setState(({ disabled: prevDisabled }) => ({
      disabled: !prevDisabled,
    }));

  _updateCount = () =>
    this.setState(({ count: prevCount }) => ({ count: prevCount + 1 }));
}
