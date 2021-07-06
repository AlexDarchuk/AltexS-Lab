const hamburgers = document.querySelector(".hamburger");
const burgerMenu = document.querySelector('.burger');

    hamburgers.addEventListener("click", () => {
      hamburgers.classList.toggle("is-active");

      if(burgerMenu.classList.contains('burger')) {
        burgerMenu.classList.add('is-hidden');
        document.body.style.overflow = 'hidden';
        burgerMenu.classList.remove('burger')
        return
    }    
        burgerMenu.classList.add('burger');
        burgerMenu.classList.remove('is-hidden');
        document.body.style.overflow = 'visible';
    });


