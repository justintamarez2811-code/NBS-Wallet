// Variables globales
let currentBalance = parseFloat(localStorage.getItem('nb_balance')) || 0;
let tempAmount = 0; // Lo que vas eligiendo en el menu de recarga

const mainBalanceDisplay = document.getElementById('main-balance');
const tempAmountDisplay = document.getElementById('temp-amount');

// Actualizar la pantalla al inicio
function init() {
    updateBalanceUI();
    updateUserUI();
}

// Lógica de Modales
function openRecarga() {
    tempAmount = 0;
    tempAmountDisplay.innerText = `$${tempAmount}`;
    document.getElementById('recarga-modal').style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Lógica de Dinero
function changeTempAmount(value) {
    tempAmount += value;
    // Evitar que el saldo total sea negativo (opcional)
    tempAmountDisplay.innerText = `$${tempAmount}`;
}

function applyRecarga() {
    currentBalance += tempAmount;
    localStorage.setItem('nb_balance', currentBalance);
    updateBalanceUI();
    closeModal('recarga-modal');
}

function updateBalanceUI() {
    // Formatear a moneda $0,00
    mainBalanceDisplay.innerText = `$${currentBalance.toLocaleString('es-ES', {minimumFractionDigits: 2})}`;
}

// --- Lógica de Usuario (Lo que ya teniamos) ---
function saveLogin() {
    const email = document.getElementById('email').value;
    if (email.trim() !== "") {
        const name = email.split('@')[0];
        localStorage.setItem('nb_user_name', name);
        updateUserUI();
        closeModal('login-modal');
    }
}

function updateUserUI() {
    const savedName = localStorage.getItem('nb_user_name');
    const displayLabel = document.getElementById('display-name');
    if (savedName) displayLabel.innerText = savedName;
}

document.getElementById('user-btn').onclick = () => {
    document.getElementById('login-modal').style.display = 'flex';
};

window.onload = init;