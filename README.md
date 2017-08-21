# alys [![Build Status][badge]][ci]

[badge]: https://travis-ci.org/mds3dstn71/alys.svg?branch=master
[ci]: https://travis-ci.org/mds3dstn71/alys

A minimal-configuration, "drop-in" CSS boilerplate.

## Getting Started

## Releases

Go to the alys GitHub [Releases][] page and download the file for the version
you want. Place the style sheet in your project directory and add a `link`
element inside the `head` of your `.html` file referencing the path to the alys
style sheet.

[Releases]: https://github.com/mds3dstn71/alys/releases

### Example

```html
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="/path/to/alys.min.css">
</head>
```

## unpkg CDN

Include a `link` element inside the `head` element with the following URL as the
value of the `href` attribute:

```
https://unpkg.com/alys@latest/dist/alys.min.css
```

### Example

```html
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="//unpkg.com/alys@latest/dist/alys.min.css">
</head>
```

## npm

```
npm install alys
```

After npm finishes installing alys, you can copy the style sheet from
`./node_modules/alys/dist/`. Place the file somewhere in your project, e.g.
`./styles/`, and use the `@import` rule to include in your other style sheet:

```css
@import 'styles/alys.css';
```

If you are using a CSS processor, like [PostCSS][], then you can use a simpler
declaration as, PostCSS will automatically try to search for alys in the
`node_modules` directory:

[PostCSS]: https://github.com/postcss/postcss-cli

```css
@import 'alys';
```

## Documentation

Checkout the [alys Wiki](https://github.com/mds3dstn71/alys/wiki) for more
readings!

## License

Copyright 2017 Rodger Jordas

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
