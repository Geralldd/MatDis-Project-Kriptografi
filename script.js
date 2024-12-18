function encrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        // Enkripsi dengan kunci
        result += String.fromCharCode(char + key);
    }
    return result;
}

function decrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        // Dekripsi dengan kunci
        result += String.fromCharCode(char - key);
    }
    return result;
}

document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value;
    const key = parseInt(document.getElementById('keyInput').value);
    if (key < 1 || key > 20) {
        alert("Kunci harus antara 1 dan 20.");
        return;
    }
    const encryptedText = encrypt(inputText, key);
    document.getElementById('result').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('result').value;
    const key = parseInt(document.getElementById('keyInput').value);
    if (key < 1 || key > 20) {
        alert("Kunci harus antara 1 dan 20.");
        return;
    }
    const decryptedText = decrypt(inputText, key);
    document.getElementById('result').value = decryptedText;
});

