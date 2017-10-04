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

### Use valid HTML

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

### Use valid CSS

_TODO_

### Accessibility Checklist

_TODO_
