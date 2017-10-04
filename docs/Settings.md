**Settings** contain the color, font and other constant definitions used in the
style sheets.

## Custom Properties

### About

TODO `postcss-custom-properties`

### Naming

Custom properties should follow a consistent naming scheme. Custom property
identifiers are made up of _terms_ or descriptive segments that are separated by
either a _dunderscore_ (`__`) or _double-dash_ (`--`). The terms are structured
based on the ruleset to which they apply.

Every term is written in lowercase and multiple words are separated by a single
dash (`-`). Elements (`body`, `p`, etc.) or pseudo-elements (`::before`, `::after`, etc.).

For _Settings_ and _Elements_:

1. Elements/Pseudo-elements
2. Target descendant (if any)
3. Pseudo-elements (if any)
4. Attribute name
5. Property name
6. Pseudo-class

For _Objects_:

1. Class name (prefixed with `c-`)
2. Pseduo-element (if any)
3. Attribute name
4. Property name
5. Pseudo-class

### Examples

Example markup:

```html
<article class="story">

  <header class="story__header">
    <h1 class="story__title">Why do beards suddenly appear?</h1>
  </header>

  <p class="story__content">
    Why indeed.
  </p>

  <p class="story__author">
    <a class="author__link" href="//whydobeards.com">Mr. Beard</a>
  </p>

</article>
```

_An article's author name should be bold and have not margin or padding._

```css
:root {
  --story__author--font-weight: 700;
  --story__author--margin: 0;
  --story__author--padding: 0;
}
```

_Hovering the author's name will change it's color and make it render an
underline._

```css
:root {
  --author__link--color--hover: #cf1b1a;
  --author__link--text-decoration--hover: underline;
}
```

## Colors

The default color palette is defined in [`css/settings/colors.css`][colors.css]:

[colors.css]: ../blob/master/css/settings/colors.css

|     Preview     |   Simple   |     Name     |    Hex    |        RGB        |
| --------------- | ---------- | ------------ | --------- | ----------------- |
| ![black]        | Black      | Black        | `#000000` | `(0, 0, 0)`       |
| ![cod_gray]     | Blackish   | Cod Gray     | `#171717` | `(23, 23, 23)`    |
| ![lochmara]     | Blue       | Lochmara     | `#0579c6` | `(5, 121, 198)`   |
| ![tundora]      | Dark Gray  | Tundora      | `#4a4a4a` | `(74, 74, 74)`    |
| ![jungle_green] | Green      | Jungle Green | `#2eaa86` | `(46, 170, 134)`  |
| ![westar]       | Light Gray | Westar       | `#dbd6d0` | `(219, 214, 208)` |
| ![crusta]       | Orange     | Crusta       | `#fd763f` | `(253, 118, 63)`  |
| ![carnation]    | Pink       | Carnation    | `#f35667` | `(243, 86, 103)`  |
| ![cerise]       | Purple     | Cerise       | `#da49b2` | `(218, 73, 178)`  |
| ![thunderbird]  | Red        | Thunderbird  | `#cf1b1a` | `(207, 27, 26)`   |
| ![white]        | White      | White        | `#ffffff` | `(255, 255, 255)` |
| ![gallery]      | Whiteish   | Gallery      | `#efefef` | `(239, 239, 239)` |
| ![candy_corn]   | Yellow     | Candy Corn   | `#fbe655` | `(251, 230, 85)`  |

[black]: img/black.gif
[cod_gray]: img/cod-gray.gif
[lochmara]: img/lochmara.gif
[tundora]: img/tundora.gif
[jungle_green]: img/jungle-green.gif
[westar]: img/westar.gif
[crusta]: img/crusta.gif
[carnation]: img/carnation.gif
[cerise]: img/cerise.gif
[thunderbird]: img/thunderbird.gif
[fiery_rose]: img/fiery-rose.gif
[white]: img/white.gif
[gallery]: img/gallery.gif
[candy_corn]: img/candy-corn.gif

## Type

The base typeface for text is called _Nunito_, a sans-serif typeface with
rounded typographic features. Headings and user interfaces use a similar looking
typeface called _Quicksand_. Both are not available by default to most modern
devices so they should be provided to the user's browser.

The root typeface is set by the `system-ui` keyword which currently resolved by
`postcss-font-family-system-ui`, a plugin for PostCSS, to a pre-defined set of
commonly used typefaces in modern devices. This entry serves as the fallback
font-family, typically when the user blocks downloading fonts on their devices.

`system-ui` is defined in [CSS Fonts Module Level 4][], which is described as a:

    ...generic font family...intended to let text render with the default user
    interface font on the platform on which the [User Agent] is running.

[CSS Fonts Module Level 4]: https://drafts.csswg.org/css-fonts-4/#system-ui-def

```css
html {
  font-family: system-ui;
}
```

The code above will be processed into:

```css
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
}
```


