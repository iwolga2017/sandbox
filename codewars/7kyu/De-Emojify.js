// You are given a string made up of chains of emotes separated by 1 space each, with chains having 2 spaces in-between each.
// Each emote represents a digit:
// :)  | 0
// :D  | 1
// >(  | 2
// >:C | 3
// :/  | 4
// :|  | 5
// :O  | 6
// ;)  | 7
// ^.^ | 8
// :(  | 9
// Each emote chain represents the digits of the ASCII/Unicode code for a character, e.g. :( ;) is 97, which is the ASCII code for 'a'.
// Given a such string of emotes, find the string it represents. Example:
// ':D :) :/  :D :) :|' is 2 chains: ':D :) :/' and ':D :) :|'.
// These represent ASCII codes 104 and 105 respectively, translating to 'hi'.
// Input will always be valid. Chains may start with leading zeroes; these are valid and do not change the chain's value.
// hobovsky if you're reading this, you're welcome for the emoji kata idea

const emoteToDigit = {
  ':)': 0,
  ':D': 1,
  '>(': 2,
  '>:C': 3,
  ':/': 4,
  ':|': 5,
  ':O': 6,
  ';)': 7,
  '^.^': 8,
  ':(': 9
};

// Function to deEmojify the emote string
function deEmojify(emojiString) {
  // Check if the input string is empty
  if (!emojiString.trim()) {
    return "";
  }
  const emoteChains = emojiString.split("  ");
  let result = "";
  
  for (let chain of emoteChains) {
    const emotes = chain.split(" ");
    let asciiCode = 0;

    for (let emote of emotes) {
      // Check if the emote exists in the mapping
      if (emoteToDigit.hasOwnProperty(emote)) {
        asciiCode = asciiCode * 10 + emoteToDigit[emote];
      } else {
        // If the emote is not found, skip the current digit
        continue;
      }
    }

    // Check if the ASCII code is valid (between 0 and 65535)
    if (asciiCode >= 0 && asciiCode <= 65535) {
      result += String.fromCharCode(asciiCode);
    }
  }
  return result;
}

console.log(deEmojify(":D :) :/  :D :) :|"))
console.log(deEmojify(";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"))














