console.log('Hello');

const vocabButton = document.querySelector('#vocabulary-word');
const grammarButton  = document.querySelector('#grammar-point');
const sentenceInput = document.querySelector('#sentence-practice');
const sentenceDisplay = document.querySelector('#typed-sentences');
const wordToolTip = document.querySelector('#word-tooltip-text');
const grammarToolTip = document.querySelector('#grammar-tooltip-text');
const grammarExToolTip = document.querySelector('#grammar-ex');


const vocabularyWords = [
    { word: '가다', definition: 'to go'},
    { word: '먹다', definition: 'to eat'},
    { word: '일어나다', definition: 'to wake up'},
    { word: '마시다', definition: 'to drink'},
    { word: '공부하다', definition: 'to study'},
];

const grammar = [
    { grammar: '잖아요', definition: 'adds emphasis to the sentence'},
    { grammar: 'present', definition: '~어요, 아요'},
    { grammar: 'past', definition: '~었어요, ~았어요'},
    { grammar: 'future', definition: '을/를 거에요'},
    { grammar: '는데', definition: 'but, though'},
];

function getWord() {
    const random = Math.random();
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(xhttp.responseText);
            var response = JSON.parse(xhttp.responseText);
            console.log(`the vocab random number is: ${Math.ceil(random * response.length)}`);
            let i = (Math.ceil(random * response.length) - 1)
            if (i > response.length) {
                i--;
            }
            
            vocabButton.textContent = response[i].word;
            wordToolTip.textContent = response[i].def;

        }
    };
    xhttp.open("GET", "js/words.json", true);
    xhttp.send();
}
function getGrammar() {
    const random = Math.random();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(xhttp.responseText);
            var response = JSON.parse(xhttp.responseText);
            console.log(`the vocab random number is: ${Math.ceil(random * response.length)}`);
            let i = (Math.ceil(random * response.length) - 1)
            if (i > response.length) {
                i--;
            }
            
            grammarButton.textContent = response[i].grammar;
            grammarToolTip.textContent = response[i].def;
            grammarExToolTip.textContent = response[i].example;

        }
    };
    xhttp.open("GET", "js/grammar.json", true);
    xhttp.send();
}

let enteredSentences = [];
sentenceInput.addEventListener('keyup', (e) => {
    let testBoxContent ='';
    if (e.keyCode === 13) {        
        enteredSentences.unshift({
            sentence: e.target.value,
            def: vocabButton.textContent,
        });   
        enteredSentences.forEach(({ sentence, def }) => {
            testBoxContent = `<span id="highlight">${testBoxContent}<p>[<b>${def}</b>]: ${sentence}<br></p></span>`
        }) 
        
    getWord();
    getGrammar();
    sentenceInput.value = '';

    } else {
        enteredSentences.forEach(({ sentence, def }) => {
            testBoxContent = `<span id="highlight">${testBoxContent}<p>[<b>${def}</b>]: ${sentence}<br></p></span>`
        }) 
    }

    // sentenceDisplay.style.backgroundColor = 'black';
    sentenceDisplay.innerHTML = testBoxContent;
})


console.log
getWord();
getGrammar(); 

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         // console.log(xhttp.responseText);
//         var response = JSON.parse(xhttp.responseText);
//         console.log(response);
//         // console.log(response);

//     }
// };
// xhttp.open("GET", "js/korean.json", true);
// xhttp.send();
 

// console.log(response.vocabulary[1]);