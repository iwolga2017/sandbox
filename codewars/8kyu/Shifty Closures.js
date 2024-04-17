// Functional closures can get overly attached. Set them straight!
// Why doesn't greetAbe() actually greet Abe?

const greetAbe = () => 'Hello, Abe!'
const greetBen = () => 'Hello, Ben!'

console.log( greetAbe() ); 
console.log( greetBen() ); 
