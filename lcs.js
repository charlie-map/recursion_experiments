function lcs(word1, word2) {
	let main_value;
	if (word1.length == 0 || word2.length == 0) {
		return "";
	} else if (word1[0] == word2[0]) {
		main_value = word1[0] + lcs(word1.substring(1), word2.substring(1));
	} else {
		let value1 = lcs(word1.substring(1), word2);
		let value2 = lcs(word1, word2.substring(1));
		main_value = value1.length > value2.length ? value1 : value2;
	}
	return main_value;
}

console.log(lcs(process.argv[2], process.argv[3]));
