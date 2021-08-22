module.exports = {
	summer: function(number) {
		let stringify = number.toString();

		let adder = 0;
		for (let s in stringify)
			adder += parseInt(stringify[s], 10);

		return adder;
	},
	// used for finding if there is a key (solely "-p" for example)
	arguments_finderBLANK: function(solute) {
		for (let i = 2; i < process.argv.length; i++)
			if (process.argv[i] == "-" + solute) return 1;
		return 0;
	},
	// finding a key and a number ("-k 100" for example)
	arguments_finderNUMB: function(solute) {
		for (let i = 2; i < process.argv.length; i++)
			if (process.argv[i] == "-" + solute) return parseInt(process.argv[i + 1], 10);
		return null;
	}
}