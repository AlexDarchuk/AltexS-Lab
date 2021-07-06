  
$('.slick-slider').slick({
    infinite: true,
    dots: true,
    nextArrow: false,
    prevArrow: false, 
});

const btnNext = document.querySelector('.next-arrow');
const btnPrev = document.querySelector('.prev-arrow');
const sliderSlide = document.querySelectorAll('.container-wrapper');
console.log(btnNext);

[btnNext, btnPrev].forEach((btn) => {
    btn.addEventListener('click', function (even) {
        console.log(even.target);
        even.preventDefault();
        sliderSlide.forEach(value => {
            if(value.classList.contains('active-slide')) {
                value.classList.remove('active-slide')
            } else {
                value.classList.add('active-slide')
            }
        });
    });
});