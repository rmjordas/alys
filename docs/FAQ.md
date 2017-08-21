## Alys or alys?

alys.

## What does alys do?

alys is an opinionated CSS reset. It provides rule-sets so that any un-styled
HTML file that links to it will instantly look prettier. If you don't have time
to customize your web page and your web page has [valid
HTML](Home.md#best-practices) you can use alys without much hassle.

## Do I need to do anything?

As of v0.1.0-alpha.12, alys only has one (1) _class_ selector, `sr-only`, and
majority are _type_ and _attribute_ selectors. Some rule-sets are dependent on a
combination of the two selectors, for example, the custom navigation bar only
shows when there is a `nav` element and it has a `role` attribute set to
`navigation`. The most essential elements on your web page should be:

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

In future versions, this will (probably) change.

## What is alys grid system?

There is no grid system _ala_ Bootstrap, Clarity, etc., rather the styles
default to small screen size (less than `54.4em`) and additional styles are
triggered when the viewport width becomes larger than `54em` (via `@media`
rule-sets).

## How to use alys in my project?

There are various ways to include alys in your project. Refer to the [Getting
Started](Home.md#getting-started) section for more information.

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
characters are removed. Also, depending on the processor, some further
optimizations can be performed like combining duplicate rule-sets, selectors,
etc.

## How can I contribute?

alys is a small project and contributions are welcome. For more information,
please refer to the [[CONTRIBUTING]] section.

## Can I distribute my modified alys source code?

alys is licensed under the Apache License 2.0 and is summarize below by
[Choose a License](https://choosealicense.com/licenses/apache-2.0/):

    A permissive license whose main conditions require preservation of copyright
    and license notices. Contributors provide an express grant of patent rights.
    Licensed works, modifications, and larger works may be distributed under
    different terms and without source code.

If you are still unsure, please read alys' [LICENSE](../blob/master/LICENSE)
document or consult with an expert on open source licenses.
