const { modal, modalTrigger, modalCloseButton } = document.querySelectorAll('.modal, #btn-get, .modal_close');

const openModal = () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  modalWasShown = true;
};

const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

modalTrigger.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

let modalWasShown = false;

window.addEventListener('scroll', () => {
  const scrollHeight = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollHeight >= pageHeight && !modalWasShown) {
    openModal();
  }
});

let showModal = false;

setTimeout(() => {
  if (!showModal) {
    openModal();
    showModal = true;
  }
}, 10000);
