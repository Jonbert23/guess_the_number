'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highscore = 0;
document.querySelector('.score').textContent = score; 
document.querySelector('.highscore').textContent = highscore;

let guessNumber = function(){
    let guess = Number(document.querySelector('.guess').value);
    
    if(!guess)
    {
        document.querySelector('.message').textContent = '⛔️ No number!';
        document.querySelector('.score').textContent = score;
        
    }
    else if(guess === randomNumber)
    {
        document.querySelector('.message').textContent = '💯 Correct number!';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = randomNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score >= highscore)
        {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    }
    else if(guess > randomNumber )
    {
        if(score > 0)
        {
            score--;
            document.querySelector('.message').textContent = '⛔️ Too High!';
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '⛔️ You Lose the game!';
        }

    }

    else if(guess < randomNumber )
    {
        if(score > 0)
        {
            score--;
            document.querySelector('.message').textContent = '⛔️ Too Low!';
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '⛔️ You Lose the game!';
        }
    }
    document.querySelector('.guess').value = '';
}

let restore = function(){
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
}

const check = document.querySelector('.check').addEventListener('click', guessNumber);
const again = document.querySelector('.again').addEventListener('click', restore);



 