function min(values) {
	let lowest = 1000000;
	for (value in values) {
		lowest = values[value] < lowest ? values[value] : lowest;
	}
	return lowest;
}

function dist(word1, word2) {
	if (word1.length == 0) return word2.length; //base case 1
	if (word2.length == 0) return word1.length; //base case 2
	return min([(word1[0] == word2[0] ? 0 : 1) + dist(word1.substring(1), word2.substring(1)), 1 + dist(word1.substring(1), word2), 1 + dist(word1, word2.substring(1))]);
}

console.log(dist(process.argv[2], process.argv[3]));