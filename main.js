var prompt = require ('prompt-sync').prompt;
 

var answer;
var number_correct = 0;
var start_time, stop_time;
var minutes, seconds;

start_time = Date.now();


// Question Number 1
console.log ("What tag would one use to start a Table Body definition?");

answer = prompt();

if (answer.toLowerCase() === "tbody") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'tbody'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 2
console.log ("What is the term for a tag with no end-tag?");

answer = prompt();

if (answer.toLowerCase() === "void") {
	number_correct++;
	console.log ("Correct!");
} else 
{
	console.log("Nice Try.");
	console.log("The answer is 'void'");

};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 3
console.log ("What display value do you use for side by side?");

answer = prompt();

if (answer.toLowerCase() === "inline") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'inline'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 4
console.log ("which of the three following is a valid color value?");
console.log ("0x33421 color(red) #121212");
answer = prompt();

if (answer.toLowerCase() === "#121212") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is '#121212'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 5
console.log ("what is a Java type?");
console.log ("float double literal null.");
answer = prompt();

if (answer.toLowerCase() === "null") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'null'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 6
console.log ("what property will allow you to draw a circle?");
answer = prompt();

if (answer.toLowerCase() === "border-radius") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'border-radius'");
};


	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 7
console.log ("What property would you set for a border-box?");
answer = prompt();

if (answer.toLowerCase() === "border-sizing") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'border-sizing'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 8
console.log ("True or False: Padding is mandatory.");
answer = prompt();

if (answer.toLowerCase() === "false") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'false'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 9
console.log ("What is a unit of measurement in CSS?");
console.log("Rads rem tesla cubits");

answer = prompt();

if (answer.toLowerCase() === "rem") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'rem'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 10
console.log ("What would you use to place a block at a specific location");
console.log("in the browser window?");

answer = prompt();

if (answer.toLowerCase() === "position:fixed") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'position:fixed'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 11
console.log ("what is necessary to be valid HTML? ")
console.log("DOCTYPE ASSIGN BUS_WIDTH MACRO_DOC");

answer = prompt();

if (answer.toLowerCase() === "doctype") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'DOCTYPE'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 12
console.log ("What is a valid HTTP request?");
console.log ("POST Send-Data Query Call");


answer = prompt();

if (answer.toLowerCase() === "post") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'post'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 13
console.log ("Where do you go for questions?");
console.log ("'Stack Overflow' online-help all-things-java");


answer = prompt();

if (answer.toLowerCase() === "stack overflow") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'Stack Overflow'");
};
	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 14
console.log ("What property can be used to get the length of a string?");
console.log ("findLength numCharacters length");


answer = prompt();

if (answer.toLowerCase() === "length") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'length'");
};
	console.log("");
	console.log("");
	console.log("");
	console.log("");

// Question Number 15
console.log ("what is the > symbol in CSS?");


answer = prompt();

if (answer.toLowerCase() === "combinator") {
	number_correct++;
	console.log ("Correct!");
} else
{
	console.log("Nice Try.");
	console.log("The answer is 'combinator'");
};

	console.log("");
	console.log("");
	console.log("");
	console.log("");


stop_time = Date.now();

minutes = Math.floor((stop_time - start_time)/60000);
seconds = ((stop_time - start_time) / 1000 ) % 60;

console.log("Thank you: You got " + number_correct + " correct out of 15.");
console.log("That is a grade of " + Math.floor(number_correct/15 *100)+ "%.");


console.log ("It took " + minutes + " minutes and " + Math.floor(seconds) +" seconds to take this quiz.");








