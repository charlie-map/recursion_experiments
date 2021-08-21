function fibo_recur(init) {
	if (init == 1 || init == 0) return init;

	return fibo_recur(init - 1) + fibo_recur(init - 2);
}

function fibo_recur_array(init) {
	if (init == 1 || init == 0) return [0, 1];

	let moving_array = [0, 1, 1];

	let sub_left = fibo_recur_array(init-1);
	let sub_right = fibo_recur_array(init-2);

	let i;
	for (i = 0; i < sub_left.length; i++)
		if (moving_array[i] != sub_left[i])
			moving_array.splice(i, 0, sub_left[i]);

	for (i = 0; i < sub_right.length; i++)
		if (moving_array[i] != sub_right[i])
			moving_array.splice(i, 0, sub_right[i]);

	moving_array.push(sub_left[sub_left.length - 1] + sub_right[sub_right.length - 1]);

	return moving_array;
}

function fibo_dp(init) {
	let moving_array = [0, 1];

	for (let i = 2; i < init; i++) {

		moving_array[i] = moving_array[i - 1] + moving_array[i - 2];
	}
	return moving_array;
}

let process_number = parseInt(process.argv[2], 10);

if (process_number < 2) {
	console.log("number must be greater than or equal to 2");
	process.exit();
}
console.time();
console.log(fibo_recur(process_number));
console.timeEnd();
console.time();
print_array(fibo_recur_array(process_number).splice(0, process_number));
console.timeEnd();
console.time();
print_array(fibo_dp(process_number));
console.timeEnd();

function print_array(arr) {
	for (let x = 0; x < arr.length; x++) {
		process.stdout.write(arr[x].toString() + "\t");
	}
	process.stdout.write("\n");
	return;
}