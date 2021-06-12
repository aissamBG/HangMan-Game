let wordCategory = document.querySelector(`.head-word span`),
    bar1 = document.querySelector(`.bar1`),
    bar2 = document.querySelector(`.bar2`),
    bar3 = document.querySelector(`.bar3`),
    bar4 = document.querySelector(`.bar4`),
    rope = document.querySelector(`.rope`),
    head = document.querySelector(`.man .head`),
    body = document.querySelector(`.man .body`),
    hands = document.querySelector(`.man .hands`),
    legs = document.querySelector(`.man .legs`),
    guessWord = document.querySelector(`.guess-word`),
    keywordLetter = document.querySelector(`.keyword`),
    wordArrays = {
        Movies: ['rain man', 'Forrest Gump', 'God Father'],
        Programing: ['html', 'css', 'Java Script', 'react', 'redux', 'Git Github'],
        Celebrities: ['Albert Einstein', 'Isaac Newton', 'Alexander The Great', 'Frederic Netche'],
        Contries: ['Morocco', 'France', 'USA', 'Espaniole', 'England', 'China']
    },
    indexObj = Math.floor(Math.random() * Object.keys(wordArrays).length),
    category = Object.keys(wordArrays),
    wordCat = category[indexObj],
    indexAry = Math.floor(Math.random() * wordArrays[wordCat].length),
    randomArray = wordArrays[wordCat],
    randomWord = randomArray[indexAry],
    letterOfWord = [...randomWord],
    partOfDraw = 0,
    counterSuccess = 0,
    counterError = 0;


window.onload = function () {
    guessLetter = document.querySelectorAll(`.guess-word span`)
    wordCategory.textContent = wordCat
}

createWordPlaces();

keywordLetter.onclick = function (e) {
    if (e.target.className != "keyword") {
        let counterEchec = 0;
        clicked(e)
        for (let i = 0; i < letterOfWord.length; i++) {
            if (e.target.textContent === letterOfWord[i].toUpperCase()) {
                counterSuccess += 1;
                guessLetter[i].innerHTML = letterOfWord[i].toUpperCase();
                if (counterSuccess === letterOfWord.length) {
                    document.getElementById(`success2`).play();
                    document.querySelector(`.game-over`).style.display = `block`;
                    document.querySelector(`.game-over`).innerHTML = `You Win with ${counterError} Error`;
                } else {
                    document.getElementById(`success`).play();
                }
            } else {
                counterEchec += 1;
                if (counterEchec === letterOfWord.length) {
                    partOfDraw++;
                    if (partOfDraw < 9) {
                        document.getElementById(`fail`).play();
                    }
                    switch (partOfDraw) {
                        case 1:
                            bar1.style.display = 'block';
                            break;
                        case 2:
                            bar2.style.display = 'block';
                            break;
                        case 3:
                            bar3.style.display = 'block';
                            break;
                        case 4:
                            bar4.style.display = 'block';
                            break;
                        case 5:
                            rope.style.display = 'block';
                            break;
                        case 6:
                            head.style.display = 'block';
                            break;
                        case 7:
                            body.style.display = 'block';
                            break;
                        case 8:
                            hands.style.display = 'block';
                            break;
                        default:
                            legs.style.display = 'block';
                            document.getElementById(`fail2`).play();
                            document.querySelector(`.game-over`).style.display = `block`;
                            document.querySelector(`.game-over`).innerHTML = `You Lose, The Guess Word Is: <span>${randomWord}</span>`;
                    }
                }
            }
        }
        if (counterEchec === letterOfWord.length) {
            counterError += 1;
        }
    }
}

document.querySelector(`button`).onclick = () => location.reload()

function createWordPlaces() {
    let i;
    for (i = 0; i < letterOfWord.length; i++) {
        if (letterOfWord[i] != " ") {
            let Span = document.createElement(`span`);
            guessWord.appendChild(Span)
        } else {
            let Span = document.createElement(`span`);
            Span.className = `empty`
            guessWord.appendChild(Span)
        }
    }
}

function clicked(e) {
    e.target.style.pointerEvents = `none`;
    e.target.className = `clicked`
}