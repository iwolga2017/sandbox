// Create a combat function that takes the player's 
// current health and the amount of damage recieved, 
// and returns the player's new health. Health can't 
// be less than 0.

function combat(health, damage) {
    if (damage < 0) {
          throw new Error("Damage must be a non-negative integer.");
      }
  
      let newHealth = Math.max(health - damage, 0);
      return newHealth;
  }

  console.log(combat(100, 5));
  