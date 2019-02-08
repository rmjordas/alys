import React, { Fragment, useState } from 'react';
import Button from 'alys/Button';
import ArrowIcon from 'alys/ArrowIcon';

import ToggleButton from '../../app/common/ToggleButton';

/** Button playgound */
export default function ExamplePlayground() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [count, setCount] = useState(0);

  const updateCount = () => setCount((prevCount) => prevCount + 1);
  const toggleButtonDisabledState = () =>
    setIsDisabled((prevDisabled) => !prevDisabled);

  const common = {
    disabled: isDisabled,
    onClick: updateCount,
  };

  return (
    <Fragment>
      <ToggleButton
        on={isDisabled}
        onClick={toggleButtonDisabledState}
        onText="enable"
        offText="disable"
      />

      <p>
        Count: <strong>{count}</strong>
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

        <Button iconOnly icon={ArrowIcon} {...common} />

        <Button type="link" text="Link" {...common} />
      </div>
    </Fragment>
  );
}
