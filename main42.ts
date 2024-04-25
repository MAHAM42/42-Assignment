// ASSIGNMENT NO 42:

/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding 
the phrase the Great to each magician’s name. Call show_magicians() to see that the 
list has actually been modified.
*/

console.log("ASSIGNMENT NO 42:");

// Define the function to show magicians names:

function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array:

function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names:
let magicians_name = ["Harry Poter", "Maham", "Uzma"];

// Call make_great function to modify magicians names:
let great_magicians = make_great(magicians_name);

// Call show_magicians that show modified list of magicians:
show_magicians(great_magicians);