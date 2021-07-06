$('.slick__slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 30000,
    nextArrow: false,
    prevArrow: false, 
});

const btnSlider = document.querySelectorAll('div.container > button > img');
const sliderSlide = document.querySelectorAll('.container-wrapper');

btnSlider.forEach((btn) => {
    btn.addEventListener('click', function (even) {
        even.preventDefault();
        sliderSlide.forEach(value => {
            if(value.classList.contains('active-slide')) {
                value.classList.remove('active-slide')
            } else {
                value.classList.add('active-slide')
            }
        })
    })
})

$('.slick-plans').slick({
    infinite: true,
    slidesToShow: 4,
    dots: false,
    nextArrow: false,
    prevArrow: false,
    responsive: [
        {
        breakpoint: 426,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    dots: false
                }
            }
    ] 
});


$('.slick-client').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: false,
    prevArrow: false, 
});