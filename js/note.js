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

function calculateMarkOfRadioBox(note){
    
    for(let j in correctAnswers){
        if(j === 'qst6'){
            break;
        }
        if (correctAnswers[j] === answers[j]){
            // console.log(j);
            note += 2;
        }
    }
    return note;
}

function calculateMarkOfCheckBox(note) {
    // Check if the arrays have the same length
    const keys = ['qst6', 'qst7', 'qst8', 'qst9'];

    for (let i in keys) {
        if (correctAnswers[keys[i]].length === answers[keys[i]].length) {
            let isEqual = true;
            for (let j = 0; j < correctAnswers[keys[i]].length; j++) {
                if (correctAnswers[keys[i]][j] !== answers[keys[i]][j]) {
                    // console.log(j);
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
console.log("Ta Note est : " + note);   
