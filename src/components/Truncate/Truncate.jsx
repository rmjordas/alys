import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';

/** Utility component to limit long text to one-line */
export default class Truncate extends Component {
  static defaultProps = {
    ellipsis: '...',
  };

  static propTypes = {
    /** The text to truncate */
    children: PropTypes.string.isRequired,

    /** The text to append to the truncated text */
    ellipsis: PropTypes.string,
  };

  _componentRef = createRef();
  _textRef = createRef();
  _ellipsisRef = createRef();

  state = {
    truncating: true,
    truncatedString: null,
  };

  componentDidMount() {
    const truncatedString = this._getTruncatedString(this.props.children);

    this.setState({ truncatedString, truncating: false });
    window.addEventListener('resize', this._resetTruncate);
  }

  componentDidUpdate = (_, prevState) =>
    this.state.truncating === prevState.truncating && this._resetTruncate();

  componentWillMount() {
    window.removeEventListener('resize', this._resetTruncate);
  }

  render() {
    const { children } = this.props;
    const { truncating, truncatedString } = this.state;
    const componentStyles = {
      display: 'block',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    };

    return (
      <div ref={this._setComponentRef} style={componentStyles}>
        {truncating && <span ref={this._setTextRef}>{children}</span>}
        {truncating && <span ref={this._setEllipsisRef}>...</span>}
        {!truncating && truncatedString}
      </div>
    );
  }

  _setComponentRef = (element) => (this._componentRef = element);
  _setEllipsisRef = (element) => (this._ellipsisRef = element);
  _setTextRef = (element) => (this._textRef = element);

  _getTruncatedString = () => {
    const { children: text, ellipsis } = this.props;
    const componentWidth = this._componentRef.offsetWidth;
    const textWidth = this._textRef.offsetWidth;

    if (textWidth > componentWidth) {
      const position =
        Math.floor((text.length * componentWidth) / textWidth) -
        ellipsis.length;
      const truncatedString = text.slice(0, position);

      return `${truncatedString.trimRight()}${ellipsis}`;
    }

    return text;
  };

  _resetTruncate = debounce(50, () => {
    this.setState({ truncating: true }, () => {
      const truncatedString = this._getTruncatedString(this.props.text);

      this.setState({ truncatedString, truncating: false });
    });
  });
}
