# Alys [![Build Status][badge]][ci]

[badge]: https://travis-ci.org/rmjordas/alys.svg?branch=master
[ci]: https://travis-ci.org/rmjordas/alys

⚠️ **Work in Progress** ⚠️

## Background

This project started as "classless" PostCSS/CSS toolkit as a way to practice
CSS. Although, the original design featured rounded and colorful aesthetic,
which admittedly is not unique nor mind-blowing, it was usable and decent enough
for a more backend-leaning developer like me.

Eventually, it was determined that a "classless" toolkit is not that useful
because more complicated applications would contain a lot of different
components and these components would most likely have specialized styles. If
the web page is simple or, maybe, used as a base style, then this toolkit would
be fine.

The next iteration produced a small Vue component library. Initially, the goal
was to port the styles to components, but this was not fulfilled (because of
reasons and I kinda forgot about this repo).

Hopefully, this newest iteration would lead to the desired `v1.0.0` release.

## Quick Start

### npm

```bash
npm install alys
```

### Releases

```
https://github.com/rmjordas/alys/releases
```

### unpkg

```
https://unpkg.com/alys@latest/dist/alys.css
https://unpkg.com/alys@latest/dist/alys.umd.min.js
https://unpkg.com/alys@latest/dist/alys.common.js
```

## Documentation

- [Component documentation](https://alys.js.org)
- [Contributing guide](https://github.com/rmjordas/alys/blob/master/.github/CONTRIBUTING.md)

## Development

To run this app on your machine, clone the repository, then run the
`npm install` command on your terminal to install the project dependencies:

```bash
git clone https://github.com/rmjordas/alys.git
cd alys
npm install
```

Enter `npm start` in your terminal and view the Alys component documentation in
your browser.

## License

Copyright 2017-2018 Rodger Jordas

This project is licensed under the terms of the Apache License, Version 2.0.
