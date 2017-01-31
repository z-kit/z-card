# <a name="z-card"></a> z-card

[![Greenkeeper badge](https://badges.greenkeeper.io/z-kit/z-card.svg)](https://greenkeeper.io/)

[![Build]](https://travis-ci.org/z-kit/z-card) [![SemVer]](http://semver.org/) [![License]](LICENSE)

A block container component to organize your web app. It is useful as a widget that can display brief information and perform related actions.

## <a name="toc"></a> Table of contents

- [z-card](#z-card)
- [Table of contents](#toc)
- [Install](#install)
  - [Import as HTML/CSS component](#import-css)
  - [Import as Stateless Functional Component (SFC)](#import-sfc)
- [How to use](#howto)
  - [CSS component](#css)
  - [Stateless Functional Component](#sfc)
- [License](#license)

## <a name="install"></a> Install

The package is available to download through [npm](https://npmjs.com):

```bash
npm install z-card --save
```

### <a name="import-css"></a> Import as HTML/CSS component

### The simple case

The package will be located inside the `node_modules` folder, you can import it into the HTML document as follows:

```html
<link rel="stylesheet" href="node_modules/z-card/dist/style.css">
```

### When bundling an web app

**For bundlers that support CSS, like [Webpack](https://webpack.github.io/), you can use it like this:**

```javascript
require('z-card/dist/style.css');
```

### <a name="import-sfc"></a> Import as a Stateless Functional Component (SFC)

The package does not include the renderer, you can use any renderer that supports SFCs. You could use React, Preact, Inferno, etc.

**Notice: This package contains CSS styling, you may need a bundler that's capable of requiring CSS files like Webpack with [css-loader](https://github.com/webpack/css-loader).**

Once you have chosen the renderer you can include the package in your project as follows:

```jsx
// Assuming the React renderer is being used
const React = require('react');
const render = require('react-dom').render;

// Passing the render function when importing
const ZCard = require('z-card')(React.createElement);

// Render it on page, using JSX here :)
render(<ZCard header={'Title'} content={'Card content'} footer={'Footer'} />, document.body);
```

## <a name="howto"></a> How to use

### <a name="css"></a> CSS component

Just add the HTML structure and CSS classes to reproduce the UI component.

### Class hierarchy

| Recommended HTML tags               | Parent    | Class                 | Description                                                         | Type     |
| ----------------------------------- | --------- | --------------------- | ------------------------------------------------------------------- | -------- |
| `div`, `section`, `main`, `article` | `root`    | `.z-card`             | Root container                                                      | Block    |
| `div`, `section`                    | `.z-card` | `.z-card__header`     | The header of the card, what's going to render before the content   | Element  |
| `div`, `section`                    | `.z-card` | `.z-card__content`    | The content of the card, where the main information should be       | Element  |
| `div`, `section`                    | `.z-card` | `.z-card__footer`     | The footer of the card, a good place to state the available actions | Element  |
| Any containing `.z-card`            | `root`    | `.z-card--bordered`   | Adds a border to the card                                           | Modifier |
| Any containing `.z-card`            | `root`    | `.z-card--animated`   | Animate elevation changes                                           | Modifier |
| Any containing `.z-card`            | `root`    | `.z-card--flat`       | Removes the card shadow                                             | Modifier |
| Any containing `.z-card`            | `root`    | `.z-card--elevated-*` | * can be 1 to 5. Higher the number, bigger the shadow               | Modifier |

#### Full working example:

```html
<div class="z-card">
  <div class="z-card__header">Title</div>
  <div class="z-card__content">Content</div>
  <div class="z-card__footer">Footer</div>
</div>
```

### <a name="sfc"></a> Stateless Functional Component

Render the HTML by using the SFC and passing props.

### Supported Props

| Prop name   | Expected Type                    | Description                                                         |
| ----------- | -------------------------------- | ------------------------------------------------------------------- |
| `header`    | An `HTMLElement` or a `TextNode` | The header of the card, what's going to render before the content   |
| `content`   | An `HTMLElement` or a `TextNode` | The content of the card, where the main information should be       |
| `footer`    | An `HTMLElement` or a `TextNode` | The footer of the card, a good place to state the available actions |
| `bordered`  | `boolean`                        | Set to true to add a border to the card                             |
| `animated`  | `boolean`                        | Set to true to turn on animations for elevation changes             |
| `flat`      | `boolean`                        | Set to true to make the card flat, removing the shadows             |
| `elevation` | `number`, 1 to 5                 | Set the elevation of the card, the spread of the shadow             |

#### Full example (JSX):

```jsx
<ZCard header={'Title'} content={'Content'} footer={'Footer'} />
```

## <a name="license"></a> LICENSE

[MIT](LICENSE)

[Build]: https://img.shields.io/travis/z-kit/z-card.svg
[SemVer]: https://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/npm/l/z-card.svg