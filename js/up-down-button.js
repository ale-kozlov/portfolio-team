let upButton = document.querySelector('.arrow-button--up');
let downButton = document.querySelector('.arrow-button--down');

window.onscroll = function () {
    if (window.pageYOffset > 300) {
        upButton.classList.add('shown');
    } else {
        upButton.classList.remove('shown');
    }

    if (window.pageYOffset > 3300) {
        downButton.classList.add('hidden');
    } else {
        downButton.classList.remove('hidden');
    }
};

upButton.onclick = function () {
    window.scrollTo(0, 0);
};

downButton.onclick = function () {
    window.scrollBy(0, document.documentElement.clientHeight);
};
