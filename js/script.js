document.addEventListener('DOMContentLoaded', function() {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});
