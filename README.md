# alys [![Build Status][badge]][ci]

[badge]: https://travis-ci.org/rmjordas/alys.svg?branch=master
[ci]: https://travis-ci.org/rmjordas/alys

## Quick Start

### `npm`

```bash
npm install alys
```

### Releases

```fundamental
https://github/rmjordas/alys/releases
```

### unpkg

```fundamental
https://unpkg.com/alys@latest/dist/alys.umd.min.js
```

## Documentation

[Project web site](https://alys.js.org)

## Development

To run this app on your machine, clone the repository, then run the
`npm install` command on your terminal to install the project dependencies:

```bash
git clone https://github.com/rmjordas/alys.git
cd alys
npm install
```

Enter `npm run build` in your terminal to compile the app in a `dist` directory:

```bash
npm run build
```

## Testing

```bash
yarn test # or
yarn test:watch
```

Enter one of the commands above to run the tests. The first command lints the
source files before running a single round of tests. The second similarly lints
and runs a round of tests but does not exit immediately after and any change to
the source files will trigger another round of tests.

To exit the process, press <kbd>Ctrl</kbd> + <kbd>C</kbd>.

## License

Copyright 2017-2018 Rodger Jordas

This project is licensed under the terms of the Apache License, Version 2.0.
