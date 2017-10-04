## What does `alys` do?

`alys` is modern CSS toolkit that provides simple styles to any plain HTML file
without doing a ton of configuration, e.g. wrapping simple elements inside
`div`s and adding classes to those elements, etc.

## Is this a Bootstrap 4 replacement?

No. Bootstrap 4 is full-fledged CSS framework where you conform your HTML markup
to BS's way of structuring elements. Whereas `alys` is technically a framework,
`alys` does not _strictly_ dictate the structure of your mark up.

## How to use `alys` in my project?

There are various ways to include `alys` in your project. Refer to the [Getting
Started](Home#getting-started) section for more information.

## Do I need to do anything after including it in my HTML code?

Some rule-sets are dependent on a combination of some selectors, for example,
the custom navigation bar only shows when there is a `nav` element and it has a
`role` attribute set to `navigation`.

The most essential elements on your web page should be:

```html
<body>
  <a class="sr-only" href="#main">Jump to main</a>
  <header role="banner"></header>
  <nav role="navigation"></nav>
  <main id="main" role="main"></main>
  <aside role="complementary"></aside>
  <footer role="contentinfo"></footer>
</body>
```

Also, check if you're okay with the default primary and accent colors, or
the font-size, etc. To change some properties, go to the `themes/` directory and
modify the necessary files or create your own file to contain all the changes.
Be sure to update the root style sheet (located at `css/alys.css`) by adding
your new file to the list of `@import`s:

```css
/* =====================================
 * Themes
 * =====================================
 * Property overrides
 */
@import 'themes/my-custom-theme';
```

## Does this limit how I style my web page?

Even though `alys` recommends a certain structure to be followed (for layout
purposes) these styles can always be replaced with your own styles. User styles
should be included in the `themes/` directory so that the redundant rule-sets
can be removed when building the minified style sheet.

## What is `alys` grid system?

There is no grid system _a la_ Bootstrap, Clarity, etc., rather the styles
default to small screen size (less than `54.4em`) and additional styles are
triggered when the view port width becomes larger than `54em` (via `@media`
rule).

## It broke my web page! What to do?

Click [here](../issues/new) to create a new issue. Provide a concise description
of your issue and add helpful information, like:

* your browser (e.g. Firefox 57, Chrome 60, Safari 11, Safari iOS 10, etc.)
* the operating system (e.g. Windows 10, Ubuntu 16.04, MacOS 10, Android 7.x,
  iOS 7, etc.)
* A screenshot

## What's the difference between `alys.css` and `alys.min.css`?

The former is the uncompressed style sheet, usually used in development whereas
the latter is the minified (compressed) style sheet. The minified style sheet's
goal to be as small as possible, therefore white space and other unnecessary
characters are removed. Depending on the processor, some further optimizations
can be performed like combining duplicate rule-sets, selectors, etc.

## Why not use `Sass`/`LESS`?

The current scope of the project does not need anything specific to `Sass` or
`LESS` yet. As the project grows, inclusion of a pre-processor (most likely
`Sass`), will certainly be re-evaluated.

## How can I contribute?

`alys` is a small project and contributions are welcome. For more information,
please refer to the [[CONTRIBUTING]] section.

## Can I distribute my modified `alys` source code?

`alys` is licensed under the Apache License 2.0 and is summarize below by
[Choose a License](https://choosealicense.com/licenses/apache-2.0/):

    A permissive license whose main conditions require preservation of copyright
    and license notices. Contributors provide an express grant of patent rights.
    Licensed works, modifications, and larger works may be distributed under
    different terms and without source code.

If you are still unsure, please read `alys`' [LICENSE](../blob/master/LICENSE)
document or consult with an expert on open source licenses.

## Is it `Alys` or `alys`?

`alys`.
