// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove('hidden');
// }




function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');

    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();

    if(playerPressed === currentAlphabet){
        console.log("Congratulations");

        // update score 

        const currentScoreElement = document.getElementById("current-score");
        const currentScore = parseInt(currentScoreElement.innerText);

        const newScore = currentScore+1;

        currentScoreElement.innerText = newScore;

        
        




        // starting a new round 
        continueGame();
        removeBackgroundColorById(currentAlphabet)

    }
    else{
        console.log("hahahha you lost");

        const lifeElement = document.getElementById('life');

        const life = parseInt(lifeElement.innerText);
        const newLife = life-1;

        lifeElement.innerText =newLife;

        if(newLife === 0){
            gameOver();
        }

    }



}


document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame(){
    const alphabet = getRandomAlphabets();

    console.log(alphabet);


    // set random alphabet in the paragraph
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    setBackgroundColorById(alphabet);
}

 

function play(){
    hideByID("home-screen");
    hideByID("score-section");
    showByID("play-ground");
    continueGame();
}

function gameOver(){
    hideByID("play-ground");
    showByID("score-section");
    
}