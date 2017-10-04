## Description

`alys` is a modern CSS toolkit made for modern web pages.

Features:

* Future CSS syntax
* CSS Grid Layout
* ITCSS architecture

[CSSNext]: https://cssnext.io

Please see the [[FAQ]] for common questions, and other useful information.

## Getting Started

There are a lot of ways to use `alys` in your projects:

### Releases

Go to the `alys` GitHub [Releases][] page and download the file for the version
you want. Place the style sheet in your project directory and add a `link`
element inside the `head` of your `.html` file referencing the relative path to
the `alys` style sheet.

[Releases]: https://github.com/mds3dstn71/alys/releases

```html
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="/path/to/alys.min.css">
</head>
```

### unpkg CDN

Another method is to include a `link` element inside the `head` element with the
following URL as the value of the `href` attribute:

```fundamental
https://unpkg.com/alys@latest/dist/alys.min.css
```

```html
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="//unpkg.com/alys@latest/dist/alys.min.css">
</head>
```

### `yarn` or `npm`

`alys` is also available as package that you can include in your project either
through `yarn` or `npm` package dependency managers.

```bash
yarn install alys
```

After `yarn` finishes installing `alys`, you can copy the style sheet from
`./node_modules/alys/dist/`. Place the file somewhere in your project, e.g.
`./styles/`, and use the `@import` rule to include it in your main style sheet:

```css
@import './styles/alys.css';
```

If you are using a CSS processor, like [`PostCSS`][], then you can use a simpler
declaration and `PostCSS` will automatically try to search for `alys` in the
`node_modules` directory:

[`PostCSS`]: https://github.com/postcss/postcss-cli

```css
@import 'alys';
```

### Inverted Triangle CSS (ITCSS) Architecture

The _Inverted Triangle CSS (ITCSS) Architecture_ is one of many methodologies to
organize CSS files. It focuses on grouping rules that are of similar specificity
and structuring them in a way that the ones with the lowest specificity will be
at the top of the style sheet and the larger specificity will be at the bottom.

#### Specificity

Specificity of a selector is determined by a set of numbers of the form:
`a-b-c`. The [W3 CSS specificition][] considers ID selectors, i.e. identifiers
that are preceded with a hash (`#`), to contribute to the `a` value; class
selectors (`.className`), attribute selectors (`[property="value"]`) and
pseudo-classes (`:pseudoclass`) to contribute to the `b` value; and finally, the
type selectors and pseudo-elements for the value of `c`.

The universal selector, `*` is "ignored" in the computation and similarly, the
negation pseudo-class, `:not`, is also not considered but it's contents are,
i.e. `:not(:active)` will only consider `:active`.

[W3 CSS specificition]: https://www.w3.org/TR/selectors/#specificity

#### `alys` and ITCSS

At the time of writing, the ITCSS architecture is yet to be standardized. The
structure found in the `alys` project is an interpretation of the ITCSS
architecture based on the following resources:

- [Harry Roberts – Managing CSS Projects with ITCSS (2014-11-09)][1]
- [Manage large CSS projects with ITCSS by Harry Roberts (2016-10-12)][2]
- [ITCSS: Scalable and Maintainable CSS Architecture by Lubos Kmetko (2016-02-10)][3]

[1]: https://youtu.be/1OKZOV-iLj4?t=6m44s
[2]: http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528
[3]: https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/

#### The Inverted Triangle

The following diagram shows the different layers of grouped rule-sets and their
location with respect to each other:

![The Inverted Triangle][IT]

[IT]: img/inverted-triangle.png

At the top are the _Settings_, which contains all global custom properties, and
_Tools_, which are groups of property declarations reused by different rulesets.
The first groups to contain selectors are in the _Generics_ group. These styles
will override the default browser styles to "normalize" the appearance of
elements accross different browsers. _Elements_ are rulesets that have simple,
type or pseudo-element selectors, whereas _Objects_ have rulesets with class
selectors. Styles for user interface features should be placed in _Components_.
Finally, _Utilities_ and _Themes_ are both used to override the styles
introduced by the earlier groups.

Listed below are some example code of each group. Please refer to a group's
dedicated wiki page for more information.

##### Settings

_Settings_ contain all global variable declarations.

```css
:root {
  /* Properties for context */
  --lochmara: #0579c6;
  --blue: var(--lochmara);
  --primary-color: var(--blue);
  --border-radius: 0.3rem;

  /* Button styles*/
  --button-color: var(--primary-color);
  --button-border-radius: var(--border-radius);
}
```

##### Tools

Rule-sets in the _Tools_ group have declarations that are reused by a lot of
different selectors. Like in the Settings group, the rule-sets in Tools all
contain custom property declarations. In pre-processors like `Sass`, these are
similar to _mixins_.

```css
:root {
  /* Properties for context  */
  --westar: #dbd6d0;
  --gray--light: var(--westar);
  --color--foreground--light: var(--gray--light);
  --gallery-border: 0.1rem solid var(--color--foreground--light);
  --transition-all: all 0.2s ease-in;

  /* Default Gallery item hover styles */
  --gallery-item--not-disabled--hover: {
    border: var(--gallery-border);
    transform: scale(0.9, 0.9);
    transition: var(--transition-all);
  }
}
```

We use the `@apply` rule to _apply_ these "mixins" to selectors:

```css
.gallery-item:not(:disabled):hover {
  @apply --gallery-item--not-disabled--hover;
}
```

##### Generic

This group contains all rule-sets that normalizes or resets the default user
agent styles.

```css
@import 'normalys.css';
```

##### Elements

_Elements_ contain rule-sets that simple type or pseudo-element selecors which
have exactly `1` (`0-0-1`) specificity.

```css
:root {
  /* Properties for context */
  --element-margin--bottom: 1.5em;
  --paragraph--font-size: 1em;
  --paragraph-margin: 0 0 var(--element-margin--bottom);
  --scrollbar-height: 0.8rem;
  --scrollbar-width: 0.5rem;
}

p /* Specificity (S): 1 (0-0-1) */ {
  font-size: var(--paragraph--font-size);
  margin: var(--paragraph-margin);
}

::-webkit-scrollbar /* S: 1 (0-0-1) */ {
  background-color: var(--color--foreground--light);
  height: var(--scrollbar-height);
  width: var(--scrollbar-width);
}
```

##### Objects

All _Object_ rule-sets contain only classes. Classes are considered to have a
specificity of `10` (`0-1-0`).

```css
:root {
  /* Properties for context */
  --sr-only: {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  };
}

.sr-only /* S: 10 (0-1-0) */ {
  @apply: --sr-only;
}
```

##### Components

_Components_ are made up of different elements and objects that are styled in a
way that they can be considered to be a single user interface feature. An
example of a component is a login or sign-up box on the upper-right corner of
most web pages.

```css
:root {
  /* Properties for context */
  --lights--flashing--width--max: 4rem;
  --lights--flashing--padding: 0 1rem;
  /* ... */

  --lights-styles: {
    /* Default styles for lights component... */
  }

  --lights-styles--flashing: {
    /* Additional styles for flashing lights */
    width: var(--lights--flashing--width--max);
    padding: var(--lights--flashing--padding);
    /* ... */
  }
}

/* =====================================
 * Flashing lights
 * =====================================
 * A small box that changes color
 *
 * S-max: 10 (0-1-0)
 */
.flashing-lights {
  @apply --lights-styles;
  @apply --lights-styles--flashing;
  /* ... */
}
```

##### Utilities

_Utilities_ include helper styles used for development.

```css
/* =====================================
 * Outliner
 * =====================================
 * Creates a thin, red, solid outline
 * on all elements.
 *
 * S-max: 0 (0-0-0)
 */
* {
  outline: 1px solid red;
}
```

##### Themes

Place all customization options in the _Themes_ group. All user defined custom
properties should correspond to an existing custom properties. Additional
custom properties are prefixed with `u-`. Any file with declarations that will
ultimately be appended with the `!important` rule is placed here instead.

**Note**: Using the `!important` rule is [considered bad practice][!important].

[!important]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#The_!important_exception

```css
:root {
  /* Properties for context */
  --confier: #bada55;
  --yellow-green: var(--confier);

  /* Overrides default paragraph background color */
  --paragraph-background-color: var(--yellow-green);
  /* User-defined custom property */
  --u-price-table-heading-background-color: var(--yellow-green);
}
```

Don't forget to `@import` all the files you need.

```css
/* File: css/alys.css */

/* =====================================
 * Themes
 * =====================================
 * User-defined custom properties and
 * "important" declarations
 */
@import 'dark-theme.css';
```

### PostCSS

[PostCSS][] is a processor used to "transform CSS with JavaScript". By itself,
PostCSS does nothing, because its actually the plugins that do the
transformations. Some of the most useful plugins in `alys` are `autoprefixer`
and `cssnano`.

The `autoprefixer` plugin allows the `alys` source code to have minimal amount
of vender-prefixed property declarations. When the project is built,
`autoprefixer` will inject the necessary prefixes which are necessary for
browsers you've included in the "browserslist" property in the `package.json`
file.

`cssnano` _minifies_ the CSS produced by various transformations before it gets
called. Minified CSS is smaller in size therefore browsers can download it
faster. Minification involves various processes such as removing unnecessary
whitespace characters, empty rulesets, resolve custom properties, and a lot
more.

Future CSS syntax is also possible because of PostCSS plugins. Future CSS syntax
eliminates the need for CSS pre-processors such as `Sass` or `LESS`.

[PostCSS]: https://postcss.org

#### Plugins List

The project uses the following plugins which are also listed in the project's
`package.json`. For detailed instructions on their usage, please refer to their
respective repository.

- [`autoprefixer`](https://github.com/postcss/autoprefixer)
- [`cssnano`](https://github.com/ben-eb/cssnano)
- [`postcss-apply`](https://github.com/pascalduez/postcss-apply)
- [`postcss-color-function`](https://github.com/postcss/postcss-color-function)
- [`postcss-custom-media`](https://github.com/postcss/postcss-custom-media)
- [`postcss-custom-properties`](https://github.com/postcss/postcss-custom-properties)
- [`postcss-custom-selectors`](https://github.com/postcss/postcss-custom-selectors)
- [`postcss-font-family-system-ui`](https://github.com/JLHwung/postcss-font-family-system-ui)
- [`postcss-import`](https://github.com/postcss/postcss-import)
- [`postcss-initial`](https://github.com/maximkoretskiy/postcss-initial)
- [`postcss-media-minmax`](https://github.com/postcss/postcss-media-minmax)
- [`postcss-nesting`](https://github.com/jonathantneal/postcss-nesting)
- [`postcss-reporter`](https://github.com/postcss/postcss-reporter)
- [`postcss-url`](https://github.com/postcss/postcss-url)
- [`stylelint`](https://github.com/stylelint/stylelint)
- [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard)

## Browser Support

`alys` should work without issue on most modern web browsers. Vendor-prefixed
properties are injected by the `autoprefixer` plugin for PostCSS which are based
off of [CanIUse][] for last two (2) versions of browsers that are not Internet
Explorer and with greater than 1% global usage.

[CanIUse]: https://caniuse.com

```json
{
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie < 11"
  ]
}
```

### Why Exclude Internet Explorer

Internet Explorer is an outdated and insecure browser and users who still use it
should consider upgrading to a better supported browser such as Mozilla Firefox
or Google Chrome.

That said, occasional testing is still done in Internet Explorer 11 but any
feature that works with modern browsers and won't render correctly in Internet
Explorer will not be patched. If you have a solution for these issues, you are
very much welcome to open a [pull request](CONTRIBUTING.md).

The table below summarizes alys' support for browsers:

| Platform | ![firefox] | ![chrome] | ![safari] | ![opera] | ![edge] |
| -------- | :--------: | :-------: | :-------: | :------: | :-----: |
| Desktop  |     56     |     61    |    11     |    47    |    15   |
| Mobile   |     55     |     61    |    11     |    --    |    --   |

[chrome]: img/chrome.png
[edge]: img/edge.png
[firefox]: img/firefox.png
[opera]: img/opera.png
[safari]: img/safari.png

## Best Practices

### Use valid HTML

To ensure that your web site will work with `alys`, use valid HTML5 syntax. A
great online tool to check whether your page is valid HTML is the
[`Nu Html Checker`](https://checker.html5.org/).

There are three options for you to provide your source code to Nu Html Checker.
You can give it the URL of your web site by choosing the "address" option for
the select box labeled, "Check by". The other two options will allow you to
specify a file from your computer and upload it to `Nu Html Checker`; and
directly input you code in a textbox.

_Note: `alys` relies on specific HTML attributes which Nu Html Checker will give
you warnings and say that these attributes are not necessary. The reason why
these attributes are used are explained in the Accessibility Checklist section
below._

### Use valid CSS

Similar to using valid HTML, avoiding non-standard CSS syntax like
vendor-prefixed property declarations, will improve the compatibility of your
styles across all browsers.

Realistically, however, some projects need to support old and insecure browsers
like Internet Explorer, etc. Packages like `autoprefixer`, help make development
easier (and less sucky). It provides a way for developers to focus on writing
standard CSS syntax and not worry about vendor-prefixes.

### Accessibility Checklist

Elements with the `role` attribute, mentioned in an earlier section (on using
valid HTML), will make the HTML Validator output warnings saying these
attributes are "redunant". But according to The A11Y Project,

> In HTML5, several of the landmark roles are implicit via the native structural
> element which is supported by most modern desktop browsers with the exception
> of IE and iOS Safari.

These attributes are also necessary for setting up the default layout of the web
page.

Summarized below are suggestions from the
[Web Accessibility Checklist by The A11Y Project][a11y-checklist] that you can
incorporate in your projects:

[a11y-checklist]: http://a11yproject.com/checklist.html

- Landmarks (for iOS and IE browsers)
  + [ ] `<header role="banner">`
  + [ ] `<nav role="navigation">`
  + [ ] `<main role="main">`
  + [ ] `<article role="article">`
  + [ ] `<aside role="complementary">`
  + [ ] `<footer role="contentinfo">`
  + [ ] `<form role="search">`
- Language attribute
  + [ ] `<html lang="en">`
- Document Outline
  + [ ] Use semantic headings and structure
- Links:
  + [ ] Ensure links have `:focus` state.
  + [ ] Ensure links are recognizable (underlined).
  + [ ] Provide a “Skip to main content” link.
- [ ] Images
  + [ ] Use appropriate `alt` text
- JavaScript
  + [ ] Unobtrusive JavaScript
  + [ ] No-JS Alternatives
- Forms
  + [ ] Logical layout
  + [ ] Associated label for all form controls (e.g. `input`, `select` etc.)
  + [ ] Make sure `placeholder` attributes are NOT being used in place of
    `label` tags.
  + [ ] Group related `form` elements with `fieldset` and describe the group
    with `legend`
- Media/Audio
  + [ ] Provide text transcripts
  + [ ] Synchronized subtitles for videos
- Color and Contrast
  + [ ] Test color contrast
- Test for different types of color blindness
  + [ ] _Deuteranopia_
  + [ ] _Protanopia_
  + [ ] _Tritanopia_
- Testing
  + [ ] Test using a screen reader
  + [ ] Test using keyboard only
