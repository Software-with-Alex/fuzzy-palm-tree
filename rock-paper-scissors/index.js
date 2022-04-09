const rockSelection = document.getElementById('btn-rock');
const paperSelection = document.getElementById('btn-paper');
const scissorsSelection = document.getElementById('btn-scissors');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const gameWinner = document.getElementById('winner-winner');
const allBtns = document.querySelectorAll('button');
const imgContainer = document.querySelector('.img-container');


const randomCompChoice = () => {

    const randomNumber = Math.floor(Math.random() * 3);
 if( randomNumber === 0){
     computerChoice.innerText = 'Rock';    
 }
 if( randomNumber === 1){
     computerChoice.innerText = 'Paper';
 }
 if( randomNumber === 2){
     computerChoice.innerText = 'Scissors';
 }
}




function playerChoiceFunc(e) {

    if(e.target.id === "btn-rock"){  
       randomCompChoice();
        playerChoice.innerText = 'Rock';

       const rockImg = `<img src='./rock-paper-scissors/rock-img.jpg'></img>`;
        imgContainer.innerHTML = rockImg;
        
        
    }
    if(e.target.id === "btn-paper"){
        playerChoice.innerText = 'Paper';
    }
     if(e.target.id === "btn-scissors"){
        playerChoice.innerText = 'Scissors';
    }
    

}

allBtns.forEach((allbtn) => {
    allbtn.addEventListener('click', playerChoiceFunc)
} )
