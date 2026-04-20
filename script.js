const modal = document.getElementById('login-modal');
const userBtn = document.getElementById('user-btn');
const displayLabel = document.getElementById('display-name');

// Abrir modal al dar click en el nombre/icono
userBtn.onclick = () => {
    modal.style.display = 'flex';
};

// Cerrar modal
function closeModal() {
    modal.style.display = 'none';
}

// Guardar en memoria local (LocalStorage)
function saveLogin() {
    const email = document.getElementById('email').value;
    if (email.trim() !== "") {
        // Extraer nombre del correo (ej: jhon@gmail.com -> jhon)
        const name = email.split('@')[0];
        localStorage.setItem('nb_user_name', name);
        updateUI();
        closeModal();
    } else {
        alert("Pon un correo, loco.");
    }
}

// Actualizar el nombre en la pantalla
function updateUI() {
    const savedName = localStorage.getItem('nb_user_name');
    if (savedName) {
        displayLabel.innerText = savedName;
    } else {
        displayLabel.innerText = "Inicia Sesión";
    }
}

// Ejecutar al abrir la app
window.onload = updateUI;

// Cerrar modal si clican fuera del cuadro blanco
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}