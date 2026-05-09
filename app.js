const actionButtons = document.querySelectorAll('.action-button');
const transactionList = document.getElementById('transactionList');
const snackbar = document.getElementById('snackbar');
const transactionPlaceholder = document.querySelector('.transaction-placeholder');

const showSnackbar = (message) => {
  snackbar.textContent = message;
  snackbar.classList.add('show');
  window.clearTimeout(snackbar.dismissTimeout);
  snackbar.dismissTimeout = window.setTimeout(() => {
    snackbar.classList.remove('show');
  }, 2200);
};

const addTransaction = (title, subtitle) => {
  if (transactionPlaceholder) {
    transactionPlaceholder.style.display = 'none';
  }

  const item = document.createElement('div');
  item.className = 'transaction-item';
  item.innerHTML = `
    <span>${title}</span>
    <strong>${subtitle}</strong>
  `;

  transactionList.prepend(item);
  transactionList.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleAction = (action) => {
  switch (action) {
    case 'recargar':
      showSnackbar('Recarga iniciada');
      addTransaction('Recarga', '$0,00');
      break;
    case 'estado':
      showSnackbar('Mostrando estado de cuenta');
      addTransaction('Estado de cuenta', 'Sin movimientos');
      break;
    default:
      break;
  }
};

actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.animate(
      [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-2px)' },
        { transform: 'translateY(0px)' },
      ],
      {
        duration: 220,
        easing: 'ease-out',
      }
    );
    handleAction(button.dataset.action);
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  document.documentElement.style.scrollBehavior = 'smooth';
}
