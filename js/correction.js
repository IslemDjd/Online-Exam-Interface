var answers = JSON.parse(localStorage.getItem('answers'));
var correctAnswers = {
    qst1: '2',
    qst2: '2',
    qst3: '3',
    qst4: '1',
    qst5A: '1',
    qst5B: '1',
    qst6: ['1', '2'],
    qst7: ['1', '3'],
    qst8: ['1', '3'],
    qst9: ['2', '3']
};

function checkCorrectRadio(qst, nb) {
    var correctAnswer = correctAnswers[nb];

    if (correctAnswer === answers[nb]) {
        qst[correctAnswer - 1].checked = true;
        var spanElement = qst[correctAnswer - 1].nextElementSibling;
        var icon = spanElement.lastChild;
        icon.style.display = 'block'
        spanElement.style.backgroundColor = "green";
    }
    else{
        qst[answers[nb]-1].checked = true;
        var spanElement = qst[answers[nb]-1].nextElementSibling;
        spanElement.style.backgroundColor = "red";
        var spanElement2 = qst[correctAnswers[nb]-1].nextElementSibling;
        var icon = spanElement2.lastChild;
        icon.style.display = 'block';
    }
}


function checkCorrectCheckboxes(qst, nb) {
    var userAnswer = answers[nb];
    var correctAnswer = correctAnswers[nb];

    // Loop through checkboxes
    for (var i = 0; i < qst.length; i++) {
        var checkbox = qst[i];
        var spanElement = checkbox.nextElementSibling;
        var icon = spanElement.lastChild;

        // Check user answers
        if (userAnswer.includes(checkbox.value)) {
            checkbox.checked = true;
            spanElement.style.backgroundColor = correctAnswer.includes(checkbox.value) ? "green" : "red";
            spanElement.style.color = "#FFF";
            icon.style.display = correctAnswer.includes(checkbox.value) ? "block" : "none";
        } else {
            // Leave unchecked for options not selected by the user
            checkbox.checked = false;
            spanElement.classList.remove('before');
            icon.style.display = correctAnswer.includes(checkbox.value) ? "block" : "none";

            
        }
    }
}

// Function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Call the function for each set of radio buttons
checkCorrectRadio(document.getElementsByName("radio1"), 'qst1');
checkCorrectRadio(document.getElementsByName("radio2"), 'qst2');
checkCorrectRadio(document.getElementsByName("radio3"), 'qst3');
checkCorrectRadio(document.getElementsByName("radio4"), 'qst4');
checkCorrectRadio(document.getElementsByName("radio5"), 'qst5A');
checkCorrectRadio(document.getElementsByName("radio6"), 'qst5B');

// Call the function for each set of checkboxes
checkCorrectCheckboxes(document.getElementsByName("check1"), 'qst6');
checkCorrectCheckboxes(document.getElementsByName("check2"), 'qst7');
checkCorrectCheckboxes(document.getElementsByName("check3"), 'qst8');
checkCorrectCheckboxes(document.getElementsByName("check4"), 'qst9');
