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

// Fungsi untuk mengubah nama proyek dan latar belakang
document.getElementById('setBackgroundButton').addEventListener('click', function() {
    const backgroundUrl = document.getElementById('backgroundInput').value;
    const projectName = document.getElementById('projectNameInput').value;

    // Mengatur gambar latar belakang
    if (backgroundUrl) {
        document.body.style.backgroundImage = `url('${backgroundUrl}')`;
    } else {
        alert("Silakan masukkan URL gambar.");
    }

    // Mengatur nama proyek
    if (projectName) {
        document.getElementById('projectName').innerText = projectName;
    } else {
        alert("Silakan masukkan nama proyek.");
    }
});