window.onscroll = function showHeader () {
    const headerBox = document.querySelector('.header-box');
 

    if(window.pageYOffset > headerBox.clientHeight) {
        headerBox.classList.add('header-box-fixed');
    } else {
        headerBox.classList.remove('header-box-fixed');
    }
}



const arrow = document.querySelectorAll('.arrow-up');
const blockA = document.querySelectorAll('.block-answer');

arrow.forEach((item, i,) => {
    item.addEventListener('click', (even) => {
        if(even.target.classList.contains('active-up')) {
            even.target.classList.remove('active-up');
            blockA[i].classList.remove('active-block');
        } else {
            even.target.classList.add('active-up');
            blockA[i].classList.add('active-block');
        }
    });
});

const btnSkoupTitle = document.querySelectorAll('.skout-block-btn');
const btnTitle = document.querySelectorAll('.module-block-btn');
const smollBlock = document.querySelectorAll('.skout-module-small');
const bigBlock = document.querySelectorAll('.module-big-block');


btnSkoupTitle.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(smollBlock[index].classList.contains('show')) {
            smollBlock[index].classList.remove('show');
            smollBlock[index].classList.add('hide');
            bigBlock[index].classList.remove('hide');
            bigBlock[index].classList.add('show');
        } else {
            smollBlock[index].classList.remove('hide');
            smollBlock[index].classList.add('show');
            bigBlock[index].classList.remove('show');
            bigBlock[index].classList.add('hide');
        }
    });
});

btnTitle.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(smollBlock[index].classList.contains('show')) {
            smollBlock[index].classList.remove('show');
            smollBlock[index].classList.add('hide');
            bigBlock[index].classList.remove('hide');
            bigBlock[index].classList.add('show');
        } else {
            smollBlock[index].classList.remove('hide');
            smollBlock[index].classList.add('show');
            bigBlock[index].classList.remove('show');
            bigBlock[index].classList.add('hide');
        }
    });
});

const btnSkoupTip = document.querySelectorAll('.skout-block-btn-secondary');
const btnSkoupTipLefy = document.querySelectorAll('.module-icon-left');


btnSkoupTip.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(smollBlock[index].classList.contains('show')) {
            smollBlock[index].classList.remove('show');
            smollBlock[index].classList.add('hide');
            bigBlock[index].classList.remove('hide');
            bigBlock[index].classList.add('show');
        } else {
            smollBlock[index].classList.remove('hide');
            smollBlock[index].classList.add('show');
            bigBlock[index].classList.remove('show');
            bigBlock[index].classList.add('hide');
        }
    });
});

btnSkoupTipLefy.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(bigBlock[index].classList.contains('show')) {
            bigBlock[index].classList.remove('show');
            bigBlock[index].classList.add('hide');
            smollBlock[index].classList.remove('hide');
            smollBlock[index].classList.add('show'); 

        } else {
            bigBlock[index].classList.remove('hide');
            bigBlock[index].classList.add('show');
            smollBlock[index].classList.remove('show');
            smollBlock[index].classList.add('hide'); 
        }
    });
});


const spanHover = document.querySelectorAll('.security-info ');
const divBaner = document.querySelectorAll('.marquee');

spanHover.forEach((elem, index) => {
    elem.addEventListener('mouseover', () => {
        divBaner[index].style.display = 'block';
         });
    elem.addEventListener('mouseout', () => {
    divBaner[index].style.display = 'none';
        });
});