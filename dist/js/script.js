document.addEventListener('DOMContentLoaded', () => {
    //ConsultModal( from header)
    const headerBtnTriger = document.querySelector('.header-contact__modaltriger');
    const consultModal = document.querySelector('#consult-modal');
    const consultCloseModal = document.querySelector('.dialog__close');
    headerBtnTriger.addEventListener('click', () => {
        consultModal.style.display = 'flex';
    });
    consultCloseModal.addEventListener('click', () => {
        consultModal.style.display = 'none';
    })



    // $(window).scroll(function() {
			
    //     if($(window).scrollTop() > height_el) {
        
    //         element.addClass("fixed");

    //     } else {
        
    //         element.removeClass("fixed");

    //     }

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