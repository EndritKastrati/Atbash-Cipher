function atbashCipher(text) {
let result = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase 
            result += String.fromCharCode(90 - (charCode - 65)); // Konvertimi ne Atbash cipher
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase
            result += String.fromCharCode(122 - (charCode - 97)); // Konvertimi ne Atbash cipher
        } else {
            result += text.charAt(i); // Simbolet qe nuk jane letra mbesin nisoj
        }
    }
    return result;
}

function encrypt() {
    let inputText = document.getElementById("inputText").value;
    let outputText = document.getElementById("outputText");
    outputText.value = atbashCipher(inputText);
}