module.exports = function reverse (n) {
	let resultReverse = Math.abs(n).toString();
	let result = '';
	for (let i = resultReverse.length-1; i >= 0; i--) {
		result += resultReverse[i]
	}
	return +result;
}