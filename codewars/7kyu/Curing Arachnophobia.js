// There is no single treatment that works for every phobia, but some people cure 
// it by being gradually exposed to the phobic situation or object. 
// In this kata we will try curing arachnophobia by drawing primitive spiders.
// Our spiders will have legs, body, eyes and a mouth. Here are some examples:
// /\((OOwOO))/\
// /╲(((0000w0000)))╱\
// ^(oWo)^
// You will be given four values:
// leg size where each value stands for its own leg type: 
// 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
// body size where each value stands for its own body type: 
// 1 for "( )", 2 for "(( ))", 3 for "((( )))"
// mouth representing the spider's mouth
// eye representing the spider's eye
// Note: the eyes are symmetric, and their total amount is 2 to the power of body size.
// You will also be given only valid data. That's it for the instructions, you can start coding!
function drawSpider(legSize, bodySize, mouth, eye) {
    let eyes = Math.pow(2, bodySize);
    let anyEye = eye.repeat(eyes / 2);
    
    let leftLeg, rightLeg;
    switch (legSize) {
        case 1:
            leftLeg = "^";
            rightLeg = "^";
            break;
        case 2:
            leftLeg = "/\\";
            rightLeg = "/\\";;
            break;
        case 3:
            leftLeg = "/╲";
            rightLeg = "╱\\";
            break;
        case 4:
            leftLeg = "╱╲";
            rightLeg = "╱╲";
            break;
        default:
            leftLeg = "";
            rightLeg = "";
        }

    let bodyLeft, bodyRight;
    switch (bodySize) {
        case 1:
            bodyLeft = "(";
            bodyRight = ")"
            break;
        case 2:
            bodyLeft = "((";
            bodyRight = "))";
            break;
        case 3:
            bodyLeft = "(((";
            bodyRight = ")))";
            break;
        default:
           bodyLeft = "";
          bodyRight = "";
    }
    return `${leftLeg}${bodyLeft}${anyEye}${mouth}${anyEye}${bodyRight}${rightLeg}`;
}
console.log(drawSpider(2, 3, "w", "O"));
