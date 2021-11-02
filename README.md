# isElement
Check to see if an object is an element.

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