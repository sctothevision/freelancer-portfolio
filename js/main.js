// навигация

const navBtn = document.querySelector('#nav-btn');

navBtn.onclick = () => {
    document.querySelector('header').classList.toggle("open");
    document.body.classList.toggle('no-scroll');
}

// анимация AOS

AOS.init();