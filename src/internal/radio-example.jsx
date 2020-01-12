/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useReducer, useMemo } from 'react';

import { Radio } from '../radio';
import { useNopButton } from './use-nop-button';

const initialState = {
  options: [
    {
      value: 'toss-a-coin-sonya-belousova-giona-ostinelli-joey-batey',
      label: 'Toss a Coin to Your Witcher by Sonya Belousova, Giona Ostinelli & Joey Batey',
      disabled: true,
    },
    {
      value: 'aces-high-kevin-macleod',
      label: 'Aces High by Kevin MacLeod',
      tabIndex: -1,
    },
    {
      value: 'b-3-box-cat-games',
      label: 'B-3 by BoxCat Games',
    },
    {
      value: 'glytch-funk-wake',
      label: 'Glytch Funk by Wake',
    },
  ].map((v) => ({ ...v, name: 'nowplaying' })),
  nowPlaying: 'aces-high-kevin-macleod',
  autoPlay: false,
};

const PLAYER_PLAY = 'PLAYER_PLAY';
const PLAYER_AUTOPLAY_TOGGLE = 'PLAYER_AUTOPLAY_TOGGLE';

const reducer = (state, action) => {
  switch (action.type) {
    case PLAYER_AUTOPLAY_TOGGLE:
      return { ...state, autoPlay: !state.autoPlay };
    case PLAYER_PLAY:
      return { ...state, nowPlaying: action.payload.nowPlaying };
    default:
      throw new Error('unknown action type');
  }
};

export const RadioExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [, NopButton] = useNopButton('Set Ringtone', false);

  const change = (e) => dispatch({ type: PLAYER_PLAY, payload: { nowPlaying: e.target.value } });
  const autoplay = () => dispatch({ type: PLAYER_AUTOPLAY_TOGGLE });

  const selected = useMemo(() => state.options.find((v) => v.value === state.nowPlaying), [
    state.nowPlaying,
    state.options,
  ]);

  return (
    <Fragment>
      <div>
        <div role="radiogroup" aria-labelledby="id-group-label">
          <h3 id="id-group-label">Select Ringtone</h3>

          {state.options.map(({ tabIndex, ...radioProps }, i) => (
            <div key={radioProps.value}>
              <Radio
                onChange={change}
                checked={state.nowPlaying === radioProps.value}
                {...radioProps}
                tabIndex={tabIndex || (i === 0 && !radioProps.disabled) ? -1 : 0}
              />
            </div>
          ))}
        </div>

        <div>
          <h3>Audio Player</h3>

          <figure css={{ padding: 0, margin: '1em 0', textAlign: 'center' }}>
            <audio
              preload="auto"
              autoPlay={state.autoPlay}
              controls
              src={`${process.env.STORYBOOK_DEMO_VIDEOS_BASE_URL}/${state.nowPlaying}.mp3`}
            >
              <track kind="captions" />
              Your browser does not support the <code>audio</code> element.
            </audio>

            <figcaption>{selected.label}</figcaption>
          </figure>
        </div>
      </div>

      <div>
        <div>
          <h3>Options</h3>
          <div>
            <label>
              <input onChange={autoplay} checked={state.autoPlay} type="checkbox" /> Auto play
            </label>
          </div>
          <br />
          <NopButton />
        </div>
      </div>
    </Fragment>
  );
};
