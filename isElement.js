const isPlainObject = require('@alexspirgel/is-plain-object');

function isElement(value) {
	if (typeof value === 'object' &&
	value !== null &&
	value.nodeType === 1 &&
	!isPlainObject(value)) {
		return true;
	}
	return false;
}

module.exports = isElement;