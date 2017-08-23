**alys** is a minimal-configuration, "drop-in" CSS boilerplate.

Please see the [[FAQ]] for common questions, and other useful information.

## Getting Started

### Releases

Go to the alys GitHub [Releases][] page and download the file for the version
you want. Place the style sheet in your project directory and add a `link`
element inside the `head` of your `.html` file referencing the path to the alys
style sheet.

[Releases]: https://github.com/mds3dstn71/alys/releases

```html
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="/path/to/alys.min.css">
</head>
```

### unpkg CDN

Include a `link` element inside the `head` element with the following URL as the
value of the `href` attribute:

```
https://unpkg.com/alys@latest/dist/alys.min.css
```

```html
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="//unpkg.com/alys@latest/dist/alys.min.css">
</head>
```

### npm

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

## Browser Support

The table below summarizes alys' support for browsers:

| Platform | ![firefox] | ![chrome] | ![safari] | ![opera] | ![edge] |
| -------- | :--------: | :-------: | :-------: | :------: | :-----: |
| Desktop  |     55     |     60    |   10.1*   |    46    |    15   |
| Mobile   |     55     |     59    |   10.3*   |    --    |    --   |

_Note: Support for Safari is limited. Mobile versions of the Opera browser are
too many to test, e.g. Opera Mini, Opera Mobile, Opera 42.7 (Android 4.x), etc.
Also, Internet Explorer is deliberately excluded._

[chrome]: img/chrome.png
[edge]: img/edge.png
[firefox]: img/firefox.png
[opera]: img/opera.png
[safari]: img/safari.png

## Best Practices

## Use valid HTML

To ensure that your web site will work with alys (and other frameworks for that
matter), use valid HTML5 syntax. One online tool to check whether your page is
valid HTML is the [Nu Html Checker](https://checker.html5.org/).

There are three options for you to provide your source code. You can give it the
URL of your web site by choosing the "address" option for the select box
labeled, "Check by". The other two options will allow you to specify a file from
your computer and upload it to Nu Html Checker; and directly input you code in a
textbox.

_Note: alys relies on specific HTML attributes which Nu Html Checker will give
you warnings and say that these attributes are not necessary. The reason why
these attributes are used are explained in the Accessibility Checklist section
below._

## Use valid CSS

_TODO_

## Accessibility Checklist

_TODO_
