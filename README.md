<h1 align="center">

<br>

<img src="./.github/banner.png" alt="Alys" width="128">

<br>
<br>

Alys

</h1>

<p align="center">A tiny React component library</p>

<p align="center">
  <a href="https://www.npmjs.com/package/alys">
    <img src="https://img.shields.io/npm/v/alys.svg" alt="Alys on npm">
  </a>

  <a href="https://alys.surge.sh">
    <img src="https://img.shields.io/badge/storybook-https://alys.surge.sh-ff69b4" alt="Component documentation website">
  </a>

  <a href="https://alys.js.org">
    <img src="https://img.shields.io/badge/website-https://alys.js.org-blue.svg" alt="Project website">
  </a>
</p>

<hr />

Alys is a tiny React component library based on [Stefan Balan's](https://bstefan.com/)
Starter Kit version 1.4.

## Requirements

Before you can use this library, your project should include the following packages. For version
details, please see the package manifest file at the repository's root. Make sure you select the
version compatible with the required minimum version.

- [@emotion/core](https://www.npmjs.com/package/@emotion/core)
- [emotion-theming](https://www.npmjs.com/package/emotion-theming)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)

```bash
npm install --save @emotion/core emotion-theming prop-types react react-dom
```

## Install

You can use either `npm` or Yarn as your package manager.

### npm

```bash
npm install alys
```

### Yarn

```bash
yarn add alys
```

## Usage

The following example shows a component called `MyComponent` that uses a `Button` component from
the `alys` package:

```jsx
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Button } from 'alys';

export default function MyComponent() {
  return (
    <Button
      css={css`
        display: inline-block;
      `}
    >
      Default button
    </Button>
  );
}
```

## Documentation

- [Component documentation](https://alys.surge.sh)
- [Change log](https://github.com/rmjordas/alys/blob/master/CHANGELOG.md)
- [Contributing guide](https://github.com/rmjordas/alys/blob/master/.github/CONTRIBUTING.md)
- [Attribution notice](https://github.com/rmjordas/alys/blob/master/NOTICE)

## License

Copyright 2020 Rodger Jordas

This project is licensed under the terms of the Apache License, Version 2.0.
