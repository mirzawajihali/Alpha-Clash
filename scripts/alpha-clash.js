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

        if(newLife === 0 || playerPressed === "Escape"){
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

    // hide everything show only the playground 
    hideByID("home-screen");
    hideByID("score-section");
    showByID("play-ground");
    continueGame();



    // set the life 5 and score zero everytime you start playing 

    const currentScoreElement = document.getElementById("current-score");

    currentScoreElement.innerText = 0;


    const lifeElement = document.getElementById('life');

   

    lifeElement.innerText =5;

}

function gameOver(){
    hideByID("play-ground");
    showByID("score-section");

    // set the final score 

    const lastScore = document.getElementById('current-score');

    const result = lastScore.innerText;

    const resultElement = document.getElementById("result");

    resultElement.innerText = result;




    // remove the background key color of the last key before game over 

    const currentAlphabet = document.getElementById("current-alphabet");

    const alphabet = currentAlphabet.innerText;

    removeBackgroundColorById(alphabet);
    
}