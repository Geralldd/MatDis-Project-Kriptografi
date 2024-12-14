function encrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        // Hanya mengenkripsi huruf alfabet
        if (char >= 65 && char <= 90) {
            result += String.fromCharCode((char - 65 + key) % 26 + 65); // Huruf kapital
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode((char - 97 + key) % 26 + 97); // Huruf kecil
        } else {
            result += text[i]; // Karakter non-huruf tidak diubah
        }
    }
    return result;
}

function decrypt(text, key) {
    return encrypt(text, 26 - (key % 26)); // Dekripsi dengan kunci yang dibalik
}

document.getElementById('encryptButton').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const key = parseInt(document.getElementById('keyInput').value);
    const encryptedText = encrypt(text, key);
    document.getElementById('result').innerText = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const key = parseInt(document.getElementById('keyInput').value);
    const decryptedText = decrypt(text, key);
    document.getElementById('result').innerText = decryptedText;
});