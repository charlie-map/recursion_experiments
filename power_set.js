const utils = require('./utils');

function find_set(curr_set) {
	let curr_setArgs = Object.values(curr_set);

	// if the curr_set is empty, return the empty set
	if (!curr_setArgs.length)
		return {'0': '0'};

	// grab all of the items in the curr_set
	// BESIDES the last one
	delete curr_set[curr_setArgs.length - 1];
	let final_value = {'0': curr_setArgs.splice(curr_setArgs.length - 1)[0]};

	// run find_set with the smaller section of arguments
	let return_set = find_set(curr_set);

	// run through the returned set and distribute the final value through
	// each item (start with just adding the item itself into the list first)
	let object_length = Object.keys(return_set).length;
	return_set[object_length] = final_value;

	for (let dis_values = 1; dis_values < object_length; dis_values++) {

		// take the starting value in the object and just add another element
		let position = Object.values(return_set[dis_values]).length
		return_set[object_length + dis_values] = {...return_set[dis_values], [position]: final_value[0]};
	}

	return return_set;
}

console.log(utils.convert_toOBJ(process.argv[2]));
console.log(find_set(utils.convert_toOBJ(process.argv[2])));