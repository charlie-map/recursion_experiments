let log_buffer = console.log;
console.log = function() {};
const {
	gcd
} = require('./gcd');

const {
	arguments_finderNUMB,
	arguments_finderBLANK
} = require('./utils');
console.log = log_buffer;

// check for an input on k, which alters output
let k = arguments_finderNUMB("k");
k = k ? k : Math.floor(Math.random() * 30);

// check for an input for scaling the range of the tested numbers
let scale_factor = arguments_finderNUMB("s");
scale_factor = scale_factor ? scale_factor : 1000;

//checking for operating range
let operating_range = arguments_finderBLANK("or");

/* seeing for which solution:
	0: all solutions (really only returns solution for k)
	1: first solution found
*/
let solution_type_free = arguments_finderBLANK("p");
let solution_type_numb = arguments_finderNUMB("p");
solution_type_free = solution_type_free ? solution_type_free : 0;
solution_type_free = !Number.isNaN(solution_type_numb) ? solution_type_numb : solution_type_free;

function find_all_solutions(equation) {
	if (equation.indexOf("*") == -1 || equation.split("*").length == 1)
		return "Please ensure you have the correct syntax: a * x + b * y = c";

	// gather the given values
	let a = parseInt(equation.split("*")[0], 10),
		b = parseInt(equation.split("*")[1].split("+")[1], 10),
		c = parseInt(equation.split("=")[1], 10);

	let d = gcd(a, b); // saving for use multiple times
	// check to make sure the equate has a solution with theorem:
	// ax+by=c has solution iff gcd(a,b) divides c
	if (c % d != 0) return "No solution";

	// find one solution so we can create new solutions
	let s, t;
	let look_throughX = operating_range ? 0 : -1 * scale_factor,
		look_throughY = operating_range ? 0 : -1 * scale_factor;

	do {
		look_throughX = look_throughY == scale_factor ? look_throughX + 1 : look_throughX;
		look_throughY = look_throughY == scale_factor ? 0 : look_throughY + 1;
		s = a * look_throughX + b * look_throughY == c ? look_throughX : s;
		t = a * look_throughX + b * look_throughY == c ? look_throughY : t;
	} while ((!s && !t) && (look_throughX < scale_factor || look_throughY < scale_factor));

	if (!s && !t) return "No solution in the scaler boundary of " + (operating_range ? 0 : -1 * scale_factor) + " to " + scale_factor + "\n";

	if (solution_type_free == 1) return "x = " + look_throughX + " y = " + look_throughY + "\n";

	//now we can take the solution and make new x's and y's with the equation:
	// x = s + k(b/d), y = t - k(a/d), WHERE k = any integer

	// returning the actual equations instead:
	if (solution_type_free == 2)
		return `x = ${s} + k * (${b} / gcd(${a}, ${b})) = ${s} + ${(b / d)}k\ny = ${t} + k * (${a} / gcd(${a}, ${b})) = ${t} + ${(a / d)}k\n`;

	return "x = " + (s + k * (b / d)) + ", y = " + (t - k * (a / d)) + "\n";
}

/*
                 _             _     
  ___ ___  _ __ | |_ _ __ ___ | |___ 
 / __/ _ \| '_ \| __| '__/ _ \| / __|
| (_| (_) | | | | |_| | | (_) | \__ \
 \___\___/|_| |_|\__|_|  \___/|_|___/
                                     
	-k:
		any integer added will give you one of the inifinitely many solutions
		(if there is a solution)
	-s (scale):
		the default is 1000. this is how many numbers the algorithm will
		guess before giving up on a solution
	-or (operating range) [related to scale]:
		the default is -1. this means that the scale that will be check will be from
		the negative of the scale to the scale. if -or is added, the scale will be kept positive
	-p (program type):
		the default is 0. this is how the program will run. if it's 0, it will
		follow all regular procedures and advance to using the number defined
		in -k. if it's 1, it will display the solution the computer finds. if
		it's 2, it will display the full diophantine equation for all solutions
*/

// equation form: a * x + b * y = c
// WHERE: a, b, c are given
console.time();
console.log(find_all_solutions(process.argv[2]));
console.timeEnd();
process.exit();