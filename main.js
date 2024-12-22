//swiper

const infoSlider = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//anchors

const ancherAbout = document.querySelectorAll('[data-anchor-about]');
const ancherServis = document.querySelector('[data-anchor-servis')
const anchorStart = document.querySelector('[data-anchor-start]');





ancherAbout.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 1100,
            left: 0,
            behavior: "smooth"
        });
    });
})

ancherServis.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 2940,
        left: 0,
        behavior: "smooth"
    });
});

anchorStart.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// modal


const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]'),
    modalInputPhone = document.querySelector('[data-input-phone]'),
    modalInputText = document.querySelector('[data-input-text]'),
    modalInputs = document.querySelectorAll('.modal__input');


function openModal() {
    modal.classList.add('transform-show');
    document.body.style.overflow = 'hidden';
}
modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function closeModal() {
    modal.classList.remove('transform-show');
    document.body.style.overflow = '';

}
modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();

    }
});


document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('transform-show')) {
        closeModal();
    }
});

const modalForm = document.querySelector('.modal__form');

modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modalInputs.forEach(input => {
        input.value = ''
    });
    closeModal();

});
