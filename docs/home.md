# Home

`alys` is a modern UI toolkit made for modern web pages.

_Please see the [FAQ](/faq.md) for common questions, and other useful
information._

## Getting Started

There are a lot of ways to use `alys` in your projects:

### Releases

Go to the `alys` GitHub [Releases][] page and download the file for the version
you want. Place the file in your project directory and add a `script` element
inside the `head` of your `.html` file referencing the relative path to the
`alys` script file.

[releases]: https://github.com/rmjordas/alys/releases

```html
<head>
  <title>My Website</title>
  <script src="https://unpkg.com/vue"></script>
  <srcipt src="/path/to/alys.umd.min.js"></script>
</head>
```

### unpkg CDN

Another method is to include a `script` element inside the `head` element with
the following URL as the value of the `src` attribute:

```fundamental
https://unpkg.com/alys@latest/dist/alys.umd.min.js
```

```html
<head>
  <title>My Website</title>
  <script src="https://unpkg.com/vue"></script>
  <script href="//unpkg.com/alys@latest/dist/alys.umd.min.js"></script>
</head>
```

### `yarn` or `npm`

`alys` is also available as package that you can include in your project either
through `yarn` or `npm` package dependency managers.

```bash
yarn add alys # or
npm install alys
```

After `yarn` or `npm` finishes installing `alys`, you can simply import it into
your project:

```js
import alys from 'alys';
```

## Usage

TODO
