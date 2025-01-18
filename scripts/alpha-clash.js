// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove('hidden');
// }


function play(){
    hideByID("home-screen");
    showByID("play-ground");
    continueGame();
}


function continueGame(){
    const alphabet = getRandomAlphabets();

    console.log(alphabet);


    // set random alphabet in the paragraph
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    setBackgroundColorById(alphabet);
}