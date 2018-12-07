import React, { PureComponent } from 'react';
import Rating from 'alys/Rating';

/** Rating with secondary color and intial value of 3 */
export default class ExampleSecondary extends PureComponent {
  state = {
    value: 3,
  };

  render() {
    return (
      <React.Fragment>
        <p>
          Rating value: <strong>{this.state.value}</strong>
        </p>

        <Rating
          value={this.state.value}
          onChange={this._handleOnChange}
          color="secondary"
        />
      </React.Fragment>
    );
  }

  _handleOnChange = (_event, value) => this.setState({ value });
}
