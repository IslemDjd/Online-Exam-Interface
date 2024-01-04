function cardHover(element) {
    element.style.borderColor = myMentionColor;
}

function cardUnHover(element) {
    element.style.borderColor = '';
}

var data = JSON.parse(localStorage.getItem('formData'));
const nom = document.getElementById("nom");
nom.innerHTML = data.nom + " " + data.prenom;

var answers = JSON.parse(localStorage.getItem('answers')) || {
    qst1: '',
    qst2: '',
    qst3: '',
    qst4: '',
    qst5A: '',
    qst5B: '',
    qst6: [],
    qst7: [],
    qst8: [],
    qst9: []
};

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

let note = 0;
var mention = ['Trés Mal', 'Mal', 'Moyen', 'Bien' ,'Trés Bien', 'Excellent'];
var mentioColor = ['#b30000', '#ff6666', '#cccc00', '#00e64d', '#008000', '#0000ff'];

function calculateMarkOfRadioBox(note){
    
    for(let j in correctAnswers){
        if(j === 'qst6'){
            break;
        }
        if (correctAnswers[j] === answers[j]){
            note += 2;
        }
    }
    return note;
}

function calculateMarkOfCheckBox(note) {
    const keys = ['qst6', 'qst7', 'qst8', 'qst9'];
    
    for (let i in keys) {
        if (correctAnswers[keys[i]].length === answers[keys[i]].length) {
            let isEqual = true;
            for (let j = 0; j < correctAnswers[keys[i]].length; j++) {
                if (correctAnswers[keys[i]][j] !== answers[keys[i]][j]) {
                    isEqual = false;
                }
            }
            if(isEqual){
                note += 2;
            }
        }
    }
    return note;
}

note = calculateMarkOfRadioBox(note);
note = calculateMarkOfCheckBox(note);



function whatMention(note){
    if(note < 5){
        return 0;
    }
    else{
        if(note < 10){
            return 1;
        }
        else{
            if(note == 10){
                return 2;
            }
            else{
                if(note < 14){
                    return 3;
                }
                else {
                    if (note < 18) {
                        return 4;
                    }
                    else {
                        return 5;
                    }
                }
            }
        }
    }
}



const noteAffichage = document.getElementById("note");
var myMention = mention[whatMention(note)];
var myMentionColor = mentioColor[whatMention(note)];
const mentionDiv = document.getElementById("mention");


noteAffichage.innerHTML = note;
noteAffichage.style.color = myMentionColor; 
mentionDiv.innerHTML = myMention;
mentionDiv.style.color = myMentionColor


const seeCorrection = document.getElementById("corrige");
seeCorrection.addEventListener("click", () => {
    window.location.href = "correction.html";
});

