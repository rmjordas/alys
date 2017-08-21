# alys [![Build Status][badge]][ci]

[badge]: https://travis-ci.org/mds3dstn71/alys.svg?branch=master
[ci]: https://travis-ci.org/mds3dstn71/alys

A minimal-configuration, "drop-in" CSS boilerplate.

## Getting Started

### npm

```
npm install alys
```

After installing via npm, the direct method to import alys is is through:

```css
import './node_modules/alys/dist/alys.css';
```

If you are using a CSS processor like [PostCSS][], then you can use a simpler
declaration. PostCSS will automatically try to search for alys in the
`node_modules` directory:

```css
import 'alys';
```

[PostCSS]: https://github.com/postcss/postcss-cli

#### Require it in your task runner

```js
var alys = require('alys');
```


### unpkg

Include a `link` element inside the `head` element with the following absolute
path as the value of the `href` attribute:

```
https://unpkg.com/alys@latest/dist/alys.min.css
```

#### Example

```html
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="//unpkg.com/alys@latest/dist/alys.min.css">
</head>
```

### GitHub Releases

Go to the alys GitHub [Releases][] page and download the `.zip` file for the
version you want. Place the style sheet in your project directory and add this
`link` element on the `head` of your `.html` file.

[Releases]: https://github.com/mds3dstn71/alys/releases

#### Example

```html
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="alys.min.css">
</head>
```

## Documentation

Checkout the [alys Wiki](wiki) for more readings!

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
