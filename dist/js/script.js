document.addEventListener('DOMContentLoaded', () => {
    //ConsultModal( from header) (from prices)
    const headerBtnTriger = document.querySelector('.header-contact__modaltriger');
    const pricesBtnTrigger = document.querySelectorAll('.prices-item__button');
    const consultModal = document.querySelector('#consult-modal');
    const consultCloseModal = document.querySelector('#consult-modal .dialog__close');

    // ( from header)
    headerBtnTriger.addEventListener('click', () => {
        consultModal.style.display = 'flex';
    });
    consultCloseModal.addEventListener('click', () => {
        consultModal.style.display = 'none';
    });
    // (from prices)
    pricesBtnTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            consultModal.style.display = 'flex';
        })
    });


    

    //QualityModal(from sections)
    const qualityBtnTriger = document.querySelector('.quality-speak__button');
    const qualityModal = document.querySelector('#quality-modal');
    const qualityCloseModal = document.querySelector('#quality-modal .dialog__close');
    qualityBtnTriger.addEventListener('click', () => {
        qualityModal.style.display = 'flex';
    });
    qualityCloseModal.addEventListener('click', () => {
        qualityModal.style.display = 'none';
    });



    // });
    //Header Change on Scroll
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    window.addEventListener('scroll', checkScroll);
    function checkScroll() {
        if(window.scrollY >  80) {
            header.classList.add('header_scroll')
        } else {
            header.classList.remove('header_scroll');
        }
    }
});