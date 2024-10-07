let displayValue = ''; // Untuk menyimpan nilai input pengguna

// Fungsi untuk memperbarui tampilan kalkulator
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Fungsi untuk menambahkan angka ke tampilan
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

// Fungsi untuk menambahkan operator ke tampilan
function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

// Fungsi untuk menghapus semua input
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Fungsi untuk menghapus input terakhir
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

// Fungsi untuk menghitung hasil
function calculateResult() {
    try {
        displayValue = eval(displayValue); // eval akan menghitung operasi matematika
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
