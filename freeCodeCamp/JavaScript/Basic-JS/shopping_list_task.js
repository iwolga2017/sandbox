// Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

// The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

// ["Chocolate Bar", 15]
// There should be at least 5 sub-arrays in the list.// 

const myList = [];
myList.unshift(["Cheesecake", 1]);
myList.unshift(["Melon", 2]);
myList.push(["Apples", 15]);
myList.push(["Oranges", 7]);
myList.unshift(["Grapes", 3]);

console.log(myList);
