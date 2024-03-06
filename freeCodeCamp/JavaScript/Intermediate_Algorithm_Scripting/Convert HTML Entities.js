// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    ">": "&gt;",
    "<":  "&lt;",
    '"':  "&quot;",
    "'":  "&apos;"
  }
  
    return str
        .split("")
        .map(entity =>  htmlEntities[entity] || entity)
        .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
