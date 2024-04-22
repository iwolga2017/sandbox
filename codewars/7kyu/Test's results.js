// It's important day today: the class has just had a math 
// test. You will be given a list of marks. Complete the 
// function that will:

// Calculate the average mark of the whole class and 
// round it to 3 decimal places.
// Make a dictionary/hash with keys "h", "a", "l" to 
// make clear how many high, average and low marks they got. 
// High marks are 9 & 10, average marks are 7 & 8, and low 
// marks are 1 to 6.
// Return list [class_average, dictionary] if there are 
// different type of marks, or [class_average, dictionary, 
// "They did well"] if there are only high marks.
// Examples
// [10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

// [5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]

function testResult(array) {
    
    let result = []
    let average = +(array.reduce((sum, curr) => sum + curr, 0) / array.length).toFixed(3);
    result.push(average);
    
    let dictionary = {
        'h': 0,
        'a': 0,
        'l': 0
    };

    for (let mark of array) {
     (mark === 9 || mark === 10) ? dictionary.h++ :
     (mark === 7 || mark === 8) ? dictionary.a++ :
     dictionary.l++;
    }
    result.push(dictionary);
    
    if (!dictionary.a && !dictionary.l) {
        result.push("They did well");
    }
    return result;  

}

  console.log( testResult([10, 9, 9, 10, 9, 10, 9]) );
  console.log( testResult([5, 6, 4, 8, 9, 8, 9, 10, 10, 10]) );
  
