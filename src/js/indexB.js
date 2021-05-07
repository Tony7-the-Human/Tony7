import "./import/modules";

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

const clc = document.querySelector('.cancel');
const arr = document.querySelector('.arr_container');
const left_container = document.querySelector('.left_container');

arr.addEventListener('click', () => {
    arr.classList.add('active_arr');
    if (left_container.classList.contains('off')) {
        left_container.classList.remove('off');
        left_container.classList.add('active');
    }
});

clc.addEventListener('click', () => {
    arr.classList.remove('active_arr');
    if (left_container.classList.contains('active')) {
        left_container.classList.remove('active');
        left_container.classList.add('off');
    }
});