// Using dot and bracket notation, set the variable secondTree to the second element in the list array from the second 
// object in the myPlants array.

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];

  const secondTree = myPlants[1].list[1];
  const firstFlower = myPlants[0].list[0];
  const lastTree = myPlants[1].list[2];

  console.log(secondTree);
  console.log(firstFlower);
  console.log(lastTree);
