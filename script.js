let currentBalance = parseFloat(localStorage.getItem('nb_balance')) || 0;
let tempAmount = 0;

function init() {
    updateBalanceUI();
    updateUserUI();
}

function openRecarga() {
    tempAmount = 0;
    document.getElementById('temp-amount').innerText = `$${tempAmount}`;
    document.getElementById('recarga-modal').style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function changeTempAmount(val) {
    tempAmount += val;
    document.getElementById('temp-amount').innerText = `$${tempAmount}`;
}

function applyRecarga() {
    currentBalance += tempAmount;
    localStorage.setItem('nb_balance', currentBalance);
    updateBalanceUI();
    closeModal('recarga-modal');
}

function updateBalanceUI() {
    document.getElementById('main-balance').innerText = `$${currentBalance.toLocaleString('es-ES', {minimumFractionDigits: 2})}`;
}

function saveLogin() {
    const email = document.getElementById('email').value;
    if(email) {
        const name = email.split('@')[0];
        localStorage.setItem('nb_user_name', name);
        updateUserUI();
        closeModal('login-modal');
    }
}

function updateUserUI() {
    const name = localStorage.getItem('nb_user_name');
    if(name) document.getElementById('display-name').innerText = name;
}

document.getElementById('user-btn').onclick = () => document.getElementById('login-modal').style.display = 'flex';

window.onload = init;