document.addEventListener('DOMContentLoaded', () => {
    const headerBtnTriger = document.querySelector('.header-contact__modaltriger');
    const consultModal = document.querySelector('#consult-modal');
    const consultCloseModal = document.querySelector('.dialog__close');
    headerBtnTriger.addEventListener('click', () => {
        consultModal.style.display = 'flex';
    });
    consultCloseModal.addEventListener('click', () => {
        consultModal.style.display = 'none';
    })
});