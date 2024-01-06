const popUp = document.getElementById("success");
const closePopUp = document.getElementById("closePopUp");


function ShowPopUp() {
    popUp.style.display = 'flex';
};

function hidePopUp() {
    popUp.style.display = 'none';
};


document.getElementById('feedback').addEventListener('submit', function (event) {
    event.preventDefault();
    setTimeout(() => {
        ShowPopUp();
    }, 0);

    setTimeout(() => {
        hidePopUp();
    }, 5000);

    this.reset();
});