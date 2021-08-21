let coin = [4, 1, 2];

function max(value1, value2) {
	let max = value1 > value2 ? value1 : value2;
	return max;
}

function min(value1, value2) {
	let min = value1 < value2 ? value1 : value2;
	return min;
}

function coins(left, right) {
	let value = 0;
	if (left < right) {
		value += max(
			min(coins(left + 2, right), coins(left + 1, right - 1)) + coin[left],//[left]
			min(coins(left, right-2), coins(left+1, right - 1)) + coin[right]);//[right]
	} else if (left == right) {
		return coin[left];
	}
	return value;
}

console.log(coins(0, coin.length - 1));