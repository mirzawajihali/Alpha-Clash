function hideByID(elementID){
    const element  = document.getElementById(elementID);

    element.classList.add('hidden');
}
function showByID(elementID){
    const element  = document.getElementById(elementID);

    element.classList.remove('hidden');
}

function setBackgroundColorById(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}


function getRandomAlphabets(){

    const alphastring = ('abcdefghijklmnopqrstuvwxyz');
    const alphabets = alphastring.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    return alphabets[index];

    
}