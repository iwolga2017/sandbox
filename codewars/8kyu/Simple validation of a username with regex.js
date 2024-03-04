// Write a simple regex to validate a username. 
// Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

validateUsr = (username) => /^[a-z0-9_]{4,16}/.test(username);

console.log(validateUsr('1234567890abcdefg'));
console.log(validateUsr("4654kl_njg"));
console.log(validateUsr('012'));
