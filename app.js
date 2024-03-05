function atbashCipher(text) {
let result = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            result += String.fromCharCode(90 - (charCode - 65)); // Convert to Atbash cipher
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            result += String.fromCharCode(122 - (charCode - 97)); // Convert to Atbash cipher
        } else {
            result += text.charAt(i); // Non-alphabetic characters remain unchanged
        }
    }
    return result;
}

function encrypt() {
    let inputText = document.getElementById("inputText").value;
    let outputText = document.getElementById("outputText");
    outputText.value = atbashCipher(inputText);
}