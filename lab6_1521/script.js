//window.onload = function() {} - ce se apleaza dupa ce pagina este incarcata
//vrem sa folosim asta mai ales cand incercam sa manipulam dom-ul si avem nevoie sa stim ca toate elemente sunt incarcate
//pentru ca JavaScript defineste un scop local in functii nu putem sa definim functii pentru click in interiorul ei, le definim global
window.onload = function () {    
    populateQuiz();
}

//JSON - JavaScript Object Notation
//Un obiect sau un array de obiecte cu key & value (exemplu question: "2 + 2")
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
const questions = [
    {
        question: "2 + 2",
        answers: [
        {
            answer: 3,
            correct: false
        },
        {
            answer: 4,
            correct: true
        },
        {
            answer: 5,
            correct: false
        }]
    },
    {
        question: "2 * 2",
        answers: [
            {
                answer: 3,
                correct: false
            },
            {
                answer: 4,
                correct: true
            },
            {
                answer: 5,
                correct: false
            }]
    },
    {
        question: "3 * 4",
        answers: [
            {
                answer: 7,
                correct: false
            },
            {
                answer: 12,
                correct: true
            },
            {
                answer: 11,
                correct: false
            }]
    },
]

//Varibila cu scop global pentru a putea tine track la ce intrebare suntem
var index = 0;

function populateQuiz() {
    //Ia elementul de tip h3 dupa tag (getElementsByTagName) sau dupa id (getElementById)
    // const question = document.getElementsByTagName("h3")[0];
    const question = document.getElementById("question");
    //Adauga intre taguri (innerHTML) textul intrebarii 
    question.innerHTML = questions[index].question;
    //Aduce toate label-urile cu clasa rasp (getElementsByClassName) si toate input-urile
    const labels = document.getElementsByClassName("rasp");
    const inputs = document.getElementsByTagName("input");
    //Parcurge array-ul intors si populeaza raspunsurile
    for(let i = 0; i < labels.length; i++) {
        labels[i].innerHTML = questions[index].answers[i].answer; //Adauga intre tag-urile label-ului raspunsul
        inputs[i].value = questions[index].answers[i].correct; //seteaza valoarea inputului de tip radio cu true sau false in functie daca rasp e corect sau nu
        inputs[i].checked = false; //seteaza valoarea checked cu false ca sa nu apara selectate
    }
    document.getElementsByTagName("button")[0].innerHTML = "Check" //seteaza textul cu butonului cu "Check"
}

function nextQuestion() {
    const button = document.getElementsByTagName("button")[0];
    if (button.innerHTML === "Check") {
        const inputs = document.getElementsByTagName("input");
        const labels = document.getElementsByTagName("label");
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.color = "black"; //readuce toate input-urile la stilul intial
            labels[i].style.fontWeight = "normal";
        }
        for(let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked === true) {
                if (inputs[i].value === "true") {
                    button.innerHTML = "Next question"
                } else {
                    //daca intrebarea este gresita facem textul rosu si bold-uit
                    labels[i].style.color = "red"; 
                    labels[i].style.fontWeight = "bold";
                }
            } 
        }
    } else {
        index++;
        if(index === questions.length) {
            index = 0;
        }
        populateQuiz();
    }
}
