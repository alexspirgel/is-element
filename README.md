# Is Element
A utility function that returns `true` if the argument is a DOM element. Otherwise returns `false`.

## Installation

### Using NPM:

```js
npm install @alexspirgel/is-element
```

```js
const isElement = require('@alexspirgel/is-element');
```

## Usage

```js
isElement(document.body); // returns true
isElement({}); // returns false
isElement(null); // returns false
```