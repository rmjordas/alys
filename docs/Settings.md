**Settings** contain the color, font and other constant definitions used in the
style sheets.

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

Default font is set by the `system-ui` keyword which currently resolved by
`postcss-font-family-system-ui`, a plugin for PostCSS,to a pre-defined set of
commonly used typefaces in modern devices.

```css
font-family: system-ui;
```

The code above will be processed into:

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
```

`system-ui` is defined in [CSS Fonts Module Level 4][], which is described as a:

    ...generic font family...intended to let text render with the default user
    interface font on the platform on which the [User Agent] is running.

[CSS Fonts Module Level 4]: https://drafts.csswg.org/css-fonts-4/#system-ui-def
