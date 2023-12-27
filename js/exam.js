var data = JSON.parse(localStorage.getItem('formData'));

const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const numIns = document.getElementById("numIns");
const jour = document.getElementById("jour");
const heure = document.getElementById("heure");
const annee = document.getElementById("annee");
var currentDate = new Date();

var monthAbbreviations = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

nom.innerHTML = "Nom : <span>"+ data.nom + "</span>";
prenom.innerHTML = "Prenom : <span>"+ data.prenom + "</span>";
numIns.innerHTML = "Matricule : <span>"+ data.numIns + "</span>";
jour.innerHTML = "Le : <span>" + currentDate.getDate() + " " + monthAbbreviations[currentDate.getMonth()] + "</span>"; 
heure.innerHTML = "Début a : <span>" + currentDate.getHours() + ":" + currentDate.getMinutes() + "</span>";
annee.innerHTML = "Année : <span>" + currentDate.getFullYear() + "/" + (currentDate.getFullYear()+1)  + "</span>";

var answers = JSON.parse(localStorage.getItem('answers')) || {
    qst1 : '',
    qst2 : '',
    qst3 : '',
    qst4 : '',
    qst5A : '',
    qst5B : '',
    qst6 : [],
    qst7 : [],
    qst8 : [],
    qst9 : []
};


function isRadioCheched(){
    for (var i = 0; i < this.length; i++) {
        if (this[i].checked) {
            return this[i].value;
        }
    }
    return false
}

function isCheckBox_Checked(){
    var checkboxValues = [];    
    for (var i = 0; i < this.length; i++) {
        if (this[i].checked) {
            checkboxValues.push(this[i].value);
        }
    }
    return checkboxValues;
}

function isAtLeastOneChecked() {
    for (var i = 0; i < this.length; i++) {
        if (this[i].checked) {
            return true;
        }
    }
    return false;
}

function showModal() {
    var modal = document.getElementById('myModal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function hideModal() {
    var modal = document.getElementById('myModal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

function submitForm() {
    // Retrieve the form element
    var form = document.getElementById('examForm');

    // Create a new Event object for the 'submit' event
    var submitEvent = new Event('submit');

    // Dispatch the 'submit' event on the form
    form.dispatchEvent(submitEvent);

    hideModal();
}

// Attach the submitForm function to the 'click' event of your button
document.getElementById('envoyer').addEventListener('click', submitForm);



const errorPopUp = document.getElementById("error");
const errorPopUp_title = document.getElementById("error__title");


function showPopUpWarning(ex , number){
        setTimeout(function () {
            errorPopUp.style.display = 'flex'
            errorPopUp_title.innerHTML = `Veuillez Cocher une Case A Ex${ex} Question ${number}.`;
        }, 0);
        setTimeout(function () {
            errorPopUp.style.display = 'none'
            errorPopUp_title.innerHTML = "";
        }, 5000);
}


function hidePopUpWarning(){
    errorPopUp.style.display = 'none'
    errorPopUp_title.innerHTML = "";
}


document.addEventListener('keypress', function clikUp(){
        if(event.key === 'Enter'){ 
            showModal();
        }
});

document.getElementById('examForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the value of the checked radio button with name "radio1"
    var qst1 = document.getElementsByName("radio1");
    if (!isRadioCheched.call(qst1)) {
        showPopUpWarning(1,1);
        return;
    }
    answers.qst1 = isRadioCheched.call(qst1);


    var qst2 = document.getElementsByName("radio2");
    if (!isRadioCheched.call(qst2)) {
        showPopUpWarning(1,2);
        return;
    }
    answers.qst2 = isRadioCheched.call(qst2);
    

    var qst3 = document.getElementsByName("radio3");
    if (!isRadioCheched.call(qst3)) {
        showPopUpWarning(1,3);
        return;
    }
    answers.qst3 = isRadioCheched.call(qst3);
    

    var qst4 = document.getElementsByName("radio4");
    if (!isRadioCheched.call(qst4)) {
        showPopUpWarning(1,4);
        return;
    }
    answers.qst4 = isRadioCheched.call(qst4);

    
    var qst5A = document.getElementsByName("radio5");
    if (!isRadioCheched.call(qst5A)) {
        showPopUpWarning(1,'5A');
        return;
    }
    answers.qst5A = isRadioCheched.call(qst5A);
    

    var qst5B = document.getElementsByName("radio6");
    if (!isRadioCheched.call(qst5B)) {
        showPopUpWarning(1,'5B');
        return;
    }
    answers.qst5B = isRadioCheched.call(qst5B);


    var qst6 = document.getElementsByName("check1");
    if (!isAtLeastOneChecked.call(qst6)) {
        showPopUpWarning(2,1);
        return;
    }
    answers.qst6 = isCheckBox_Checked.call(qst6);


    var qst7 = document.getElementsByName("check2");
    if (!isAtLeastOneChecked.call(qst7)) {
        showPopUpWarning(2,2);
        return;
    }
    answers.qst7 = isCheckBox_Checked.call(qst7);


    var qst8 = document.getElementsByName("check3");
    if (!isAtLeastOneChecked.call(qst8)) {
        showPopUpWarning(2,3);
        return;
    }
    answers.qst8 = isCheckBox_Checked.call(qst8);


    var qst9 = document.getElementsByName("check4");
    if (!isAtLeastOneChecked.call(qst9)) {
        showPopUpWarning(2,4);
        return;
    }
    answers.qst9 = isCheckBox_Checked.call(qst9);


    // Save answers to localStorage
    localStorage.setItem('answers', JSON.stringify(answers));

    window.location.href = 'note.html';

});
