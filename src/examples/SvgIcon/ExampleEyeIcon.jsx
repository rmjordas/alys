import React from 'react';
import SvgIcon from 'alys/SvgIcon';

/** Basic EyeIcon component */
export default function ExampleEyeIcon({ dark, ...svgProps }) {
  return (
    <SvgIcon {...svgProps}>
      <g
        transform="matrix(.02146 0 0 .02146 1 1)"
        fill={dark ? '#fff' : 'currentColor'}
      >
        <path d="m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1" />
        <circle cx="466.08" cy="466.02" r="134.5" />
      </g>
    </SvgIcon>
  );
}