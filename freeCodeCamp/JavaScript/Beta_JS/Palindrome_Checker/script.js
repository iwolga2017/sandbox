const button = document.getElementById("check-btn");
let textInput = document.getElementById("text-input");
let result = document.getElementById("result");
result.classList.add("result-text");


button.addEventListener('click', () => {
    let text = textInput.value;
    if (text === "")
        alert("Please input a value");
    else {
        function checkPalindrome(text) {
            let newStr = text.replace(/\W|_/gi, "").toLowerCase();
            let reversedStr = newStr.split("").reverse().join("");
            return newStr === reversedStr;
        }

        if (checkPalindrome(text)) {
            result.textContent = `${text} is a palindrome`
        } else {
        result.textContent = `${text} is not a palindrome`
        }
       
    }
    textInput.value = "";
})