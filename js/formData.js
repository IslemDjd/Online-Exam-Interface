var formData = JSON.parse(localStorage.getItem('formData')) || {
    nom: '',
    prenom: '',
    email: '',
    numIns: ''
};


// window.addEventListener('beforeunload', function (event) {
//     // Check if there's unsaved form data
//     if (isFormDataChanged()) {
//         // Display a confirmation message
//         var confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
//         (event || window.event).returnValue = confirmationMessage; // Standard
//         return confirmationMessage; // For old browsers
//     }
// });

// function isFormDataChanged() {
//     // Compare the current form data with the data stored in localStorage
//     var currentFormData = {
//         nom: document.getElementById('nom').value,
//         prenom: document.getElementById('prenom').value,
//         email: document.getElementById('email').value,
//         numIns: document.getElementById('numIns').value
//     };

//     return JSON.stringify(currentFormData) !== JSON.stringify(formData);
// }

// Populate form fields with stored data
document.getElementById('nom').value = formData.nom;
document.getElementById('prenom').value = formData.prenom;
document.getElementById('email').value = formData.email;
document.getElementById('numIns').value = formData.numIns;

document.getElementById('myForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Update formData with the values from the form
    formData.nom = document.getElementById('nom').value;
    formData.prenom = document.getElementById('prenom').value;
    formData.email = document.getElementById('email').value;
    formData.numIns = document.getElementById('numIns').value;

    // Log the form data to the console
    console.log(formData);

    // Save formData to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    window.location.href = 'examInfo.html';


});


