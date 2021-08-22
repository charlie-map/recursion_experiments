function gcd(num1, num2) {
	if (!num1 || !num2) return "Please add two numeric arguments to the command";

	let multiplier = Math.floor(num1 / num2);
	let remainder = num1 % num2;
	if (display_current) console.log(num1 + " = " + multiplier + " * " + num2 + " + " + remainder);
	if (remainder == 0) return num2;
	return gcd(num2, remainder);
}

function gcd_table(num1, num2) {
	if (!num1 || !num2) return "Please add two numeric arguments to the command";

	let table = [
		["si", 1, 0],
		["ti", 0, 1],
		["ri", num1, num2],
		["qi", null, null]
	];

	// fill out all the ri's and qi's first
	let ri_pos = 2;

	while (table[2][ri_pos] != 0) {
		// evaluate ri and qi
		table[2][ri_pos + 1] = table[2][ri_pos - 1] % table[2][ri_pos];
		table[3][ri_pos + 1] = Math.floor(table[2][ri_pos - 1] / table[2][ri_pos]);

		// evaluate si (position 0) and ti (position 1)
		for (let si_ti = 0; si_ti < 2; si_ti++)
			table[si_ti][ri_pos + 1] = table[si_ti][ri_pos - 1] - table[3][ri_pos + 1] * table[si_ti][ri_pos];

		ri_pos++; // add to ri_pos to move to next row
	}

	return table;
}

let display_current = process.argv[4] == "-d" || process.argv[5] == "-d" ? true : false;
if (process.argv[4] == "-t" || process.argv[5] == "-t") print_array(gcd_table(parseInt(process.argv[2], 10), parseInt(process.argv[3], 10)));
else console.log(gcd(parseInt(process.argv[2], 10), parseInt(process.argv[3], 10)));


function max_arr_len(arr) {
	let longest_row = 0;

	for (let all_rows = 0; all_rows < arr.length; all_rows++)
		longest_row = arr[all_rows].length > longest_row ? arr[all_rows].length : longest_row;

	return longest_row;
}

function print_array(array) {

	for (let y_run = 0; y_run < max_arr_len(array); y_run++) {

		for (let x_run = 0; x_run < array.length; x_run++) {
			process.stdout.write(array[x_run][y_run] + "\t");
		}

		process.stdout.write("\n");
	}
}

module.exports = {
	gcd,
	gcd_table
};