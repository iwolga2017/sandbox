// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant 
// cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings 
// are guaranteed to be English words in all lowercase.

function  translatePigLatin(str) {

    // let consonantRegex = /^[^aeiou]+/;
    // let consonantArr = str.match(consonantRegex);

    // return consonantArr !== null ?
    //         str.replace(consonantRegex, "")
    //             .concat(consonantArr)
    //             .concat("ay") :
    //         str.concat("way");    

    return str
        .replace( /^[aeiou]\w*/, "$&way" )
        .replace( /(^[^aeiou]+)(\w*)/, "$2$1ay" );
            
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));