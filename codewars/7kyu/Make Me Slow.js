// Make me slow! Calling makeMeSlow() should take at least 7 seconds.

function makeMeSlow() {
  
 const startTime = new Date().getTime();
const endTime = startTime + 7000;

  // This function is slow enough now!
  while (new Date().getTime() < endTime) {
    // Do nothing
  }
}
