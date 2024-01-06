const minDate = new Date();
minDate.setDate(minDate.getDate() + 1);
document.getElementById('consultationDate').min = minDate.toISOString().split('T')[0];


const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 3);
document.getElementById('consultationDate').max = maxDate.toISOString().split('T')[0];


const popUp = document.getElementById("success");
const closePopUp = document.getElementById("closePopUp");


function ShowPopUp() {
    popUp.style.display = 'flex';
};

function hidePopUp() {
    popUp.style.display = 'none';
};


document.getElementById('consultationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    setTimeout(() => {
        ShowPopUp();
    }, 0);

    setTimeout(() => {
        hidePopUp();
    }, 5000);

    this.reset();
});