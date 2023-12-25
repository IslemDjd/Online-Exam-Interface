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
    qst1 : ''
};


document.getElementById('examForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();
    
    answers.qst1 = document.querySelector('input[name="radio1"]:checked');
    
    

    // // Update formData with the values from the form
    // formData.nom = document.getElementById('nom').value;
    // formData.prenom = document.getElementById('prenom').value;
    // formData.email = document.getElementById('email').value;
    // formData.numIns = document.getElementById('numIns').value;

    // Log the form data to the console
    console.log(answers);

    // // Save formData to localStorage
    localStorage.setItem('answers', JSON.stringify(answers));

    window.location.href = 'examInfo.html';


});