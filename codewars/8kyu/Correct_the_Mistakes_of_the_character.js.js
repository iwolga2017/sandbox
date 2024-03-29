// Character recognition software is widely used to 
// digitise printed texts. Thus the texts can be edited, 
// searched and stored on a computer.

// When documents (especially pretty old ones written with
// a typewriter), are digitised character recognition
// softwares often make mistakes.

// Your task is correct the errors in the digitised text. 
// You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
	
  let arr = string.split("");

  let result = arr.map(item => item == 5 ? "S":
    item == 0 ? "O":
    item == 1 ? "I":
    item);
                  
     return result.join("");
       
  }

  console.log(correct("L0ND0N"));
  console.log(correct("DUBL1N"));
  console.log(correct("51NGAP0RE"));
  console.log(correct("BUDAPE5T"));
  console.log(correct("PAR15"));
