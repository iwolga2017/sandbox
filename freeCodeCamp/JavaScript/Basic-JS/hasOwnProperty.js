// Modify the function checkObj to test if the object passed to the 
// function parameter obj contains the specific property passed 
// to the function parameter checkProp. If the property passed to 
// checkProp is found on obj, return that property's value. If not, 
// return Not Found.


function checkObj(obj, checkProp) {

    if (obj.hasOwnProperty(checkProp)) {

        return obj[checkProp];
    } else {

        return "Not Found";
    }

}

    console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
    console.log(checkObj({city: "Seattle"}, "city"));
    console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));
    console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"));
    console.log(checkObj({city: "Seattle"}, "district"));