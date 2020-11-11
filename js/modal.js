let sendMessage = document.querySelector('.feedback__btn-send');
let modalSymu = document.querySelector('.modal');
let feedback = document.querySelector('.feedback');
let modalClose = document.querySelector('.modal__close');
let modalSymuBtn = document.querySelector('.modal__btn');

sendMessage.onclick = function () {
    document.getElementById('feedback').checked = false;
    document.getElementById("feedback-form").reset();

    setTimeout(function() {
      modalSymu.style.display = "block";
    }, 1000);

    modalClose.onclick = function () {
        modalSymu.style.display = "none";
    };

    modalSymuBtn.onclick = function () {
        modalSymu.style.display = "none";
    };
};


