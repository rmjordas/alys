# Change Log

## 2017-08-21

### 0.1.0-beta.1

- Added:
  + Documentation subtree for alys Wiki as `docs/`
  + `docs/`:
    * `_Sidebar.md`
    * `CHANGELOG.md`
    * `FAQ.md`
    * `Home.md`
    * `img/` (Image assets)
  + the alys tag line, a link to the FAQ and a wiki contents list in
    `docs/Home.md`
  + "Getting Started" and "Documentation" sections in `README.md`
- Fixed:
  + `docs/FAQ.md`:
    * Typo
    * Outdated link references
- Updated:
  + Installation instructions and other information in `README.md`
  + `package.json`

## 2017-08-18

### 0.1.0-alpha.12

- Added:
  + `elements/body.css`
  + Padding to `components/`:
    * `main.css`
    * `aside.css`
  + Build status badge in `README.md` heading
  + `cssnano` to the list of `postcss` processors
  + npm script, `start`, to watch for changes and rebuild
  + Travis CI configurations as `.travis.yml`
- Fixed: `stylelint` errors in `elements/base.css` to use `grid-template`
  shorthand
- Removed:
  + `@media` rule-sets from `components/`:
    * `main.css`
    * `aside.css`
  + Property declarations in `components/header.css` that conflicts with CSS
    Grid
  + Padding introduced by `normalize.css`
  + Fixed height declaration in `components/footer.css`
  + `objects/wrapper`
- Updated: `package.json` properties

## 2017-08-17

### 0.1.0-alpha.11

- Added:
  + `components/`:
    * `aside.css`
    * `footer.css`
    * `header.css`
    * `main.css`
    * `navigation.css`
  + `elements/nav.css`
  + `objects/`:
    * `base.css`
    * `wrapper.css`
  + At-rules for importing form style mixins in `alys.css`
  + Responsive styles for larger screens for partials in `components/`
- Fixed: Sorting of at-rules for importing partials in `alys.css`
- Updated: npm scripts

## 2017-08-16

### 0.1.0-alpha.10

- Added:
  + `objects/`:
    * `buttons/`:
      - `base.css`
      - `button.css`
      - `reset.css`
      - `submit.css`
    * `inputs/`:
      - `base.css`
      - `button.css`
      - `checkbox.css`
      - `reset.css`
      - `submit.css`
  + `tools/`:
    * `button-style.css`
    * `input-style.css`
- Removed: Attribute selectors in `elements/forms.css`
- Fixed: typo for `--sr-only` custom property set identifier in
  `tools/sr-only.css`

### 0.1.0-alpha.9

- Added:
  + Properties to `package.json`:
    * `scripts`: `build`
    * `publishConfig`
    * `devDependencies`:
      - `cssnano`
      - `postcss-reporter`
      - `postcss-url`
  + `postcss.config.js`
  + `css/`:
    * `alys.css`
    * `elements/`:
      - `base.css`
      - `form.css`
      - `heading.css`
      - `hr.css`
      - `img.css`
      - `link.css`
      - `list.css`
      - `progress.css`
      - `quote.css`
      - `table.css`
  + Updated: `alys.css`'s at-rules for importing files from `elements` directory
  + Removed: Rule-sets and at-rule in `css/`:
    + `padding`s for `ul` and `ol` elements in `list.css`
    + At-rules for importing the following files files from:
      * `settings/`:
        - `global.css`
        - `breakpoints.css`
      * `generics/box-sizing.css`

## 2017-08-15

### 0.1.0-alpha.8

- Added: `css/generic/normalize.css`

### 0.1.0-alpha.7

- Added: `postcss-cli`
- Fixed:
  + Typo in `README.md`
  + File names in `css/` to use kebab letter case:
    * `tools/`:
      - `media-queries.css`
      - `sr-only.css`
- Removed: `postcss`

### 0.1.0-alpha.6

- Added:
  + npm package manifest and stylint configuration:
    * `package.json`
    * `package-lock.json`
    * `.stylelintrc.json`
- Fixed:
  + Linting errors in `css/`:
    * `settings/`:
      - `colors.css`
      - `centered.css`
    * `tools/`:
      - `media-queries.css`
      - `sr-only.css`

### 0.1.0-alpha.5

- Added: `css/tools/media-queries.css`

### 0.1.0-alpha.4

- Fixed: Custom property identifier to be in singular form (`settings/type`)

### 0.1.0-alpha.3

- Added:
  + Files to `css/tools/`:
    * `centered.css`
    * `sr-only.css`

### 0.1.0-alpha.2

- Added:
  + Settings in `css/settings/` directory:
    * `colors.css`
    * `type.css`

### 0.1.0-alpha.1

- Added:
  + Files to initialize repository:
    * `README.md`
    * `LICENSE`
    * `CHANGELOG.md`
    * `.gitignore`
    * `.editorconfig`
