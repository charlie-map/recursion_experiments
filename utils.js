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
	},
	// filling an object based on a number have a value at each position
	// ^ using this object basically as a hash
	fill_numbersOBJ: function(start, end) {
		let obj = {};

		for (let i = start; i < end; i++) {
			obj[i] = 0;
		}
		return obj;
	},
	// checks if a number has a square root
	has_squareRoot: function(number) {
		return Math.floor(Math.sqrt(number)) == Math.sqrt(number);
	},
	// takes a string (say, {34, 34, {348}}) and gives back the object
	// ({'0': 34, '1': 34, '2': {'0': 348}})
	convert_toOBJ: function(string) {
		if (string.substring(0, 1) != "{") console.log("Please enter an object starting with {");

		let initial_object = {},
			object_placement = 0;

		for (let run_onString = 1; run_onString < string.length; run_onString++) {

			// run until you meet the next } or ,
			for (let end_string = run_onString; end_string < string.length; end_string++) {
				let extra_bracket = 0;
				if (string[end_string] == "{")
					// if this is the case, find the close bracket and send off for sub routine
					for (let find_closeBracket = end_string + 1; find_closeBracket < string.length; find_closeBracket++) {
						extra_bracket += string[find_closeBracket] == "{" ? 1 : 0;
						if (string[find_closeBracket] == "}") {
							initial_object[object_placement] = module.exports.convert_toOBJ(string.substring(end_string, find_closeBracket + 1 + extra_bracket));
							end_string = find_closeBracket + 1;
							run_onString = end_string;
							object_placement++;
							break;
						}
					}
				if ((string[end_string] == "," && run_onString != end_string) || (string[end_string] == "}" && run_onString != end_string)) {
					initial_object[object_placement] = parseInt(string.substring(run_onString, end_string).match(/[0-9]/g, "").join(''));
					run_onString = end_string + 1;
					object_placement++;
				}
				if (string[end_string] == "}")
					return initial_object;
			}
		}
	}
}