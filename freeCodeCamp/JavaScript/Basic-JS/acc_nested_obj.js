//  Access the myStorage object and assign the contents of the glove box 
// property to the gloveBoxContents variable. Use dot notation for all properties
// where possible, otherwise use bracket notation.


const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };

  let gloveBoxContents = myStorage.car.inside["glove box"];
  let seatContent = myStorage.car.inside["passenger seat"];
  let trunkContent = myStorage.car.outside.trunk;

  console.log(gloveBoxContents);
  console.log(seatContent);
  console.log(trunkContent);