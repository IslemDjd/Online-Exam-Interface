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