function make_array(w1, w2) {
	let array = [];
	let columns_value = w1.length > w2.length ? w1.length : w2.length;
	let rows_value = w1.length > w2.length ? w2.length : w1.length;
	for (let y = 0; y < columns_value + 1; y++) { // build the columns based on w1 value
		array[y] = [];
		for (let x = 0; x < rows_value + 1; x++) { // build the rows based on the w2 value
			array[0][x] = x;
			array[y][0] = y;
			array[y][x] = 0;
		}
	}
	return array;
}

function printMultiArray(arr) {
	for (let y = 0; y < arr[0].length; y++) {
		for (let x = 0; x < arr.length; x++) {
			process.stdout.write(arr[x][y] + "\t");
		}
		process.stdout.write("\n");
	}
}

function min(values) {
	let min = 100000;
	for (value in values) {
		min = values[value] < min ? values[value] : min;
	}
	return min
}

function dist(w1, w2) {
	let array = make_array(w1, w2);
	w1 = " " + w1;
	w2 = " " + w2;
	for (let y = 1; y < array.length; y++) { // go through the rows
		for (let x = 1; x < array[0].length; x++) { // go through that full column
			let sub_add = w1[y] == w2[x] ? 0 : 1; // check for adding onto sub case
			// check the transpose case
			let transpose = array[y - 2] && array[y - 2][x - 2] ? array[y - 2][x - 2] : 10000;
			array[y][x] = (w1[x] == w2[y - 1] && w1[x - 1] == w2[y]) ? array[y][x] = min([sub_add + array[y - 1][x - 1], 1 + array[y][x - 1], 1 + array[y - 1][x], 1 + transpose]) : min([sub_add + array[y - 1][x - 1], 1 + array[y][x - 1], 1 + array[y - 1][x]]);
		}
	}
	//printMultiArray(array);
	return array[array.length - 1][array[0].length - 1];
}

console.log(dist("word", "words"));