var score=20;
var highscore=0;
var guessNumber;
var hiddenNumber= Math.trunc(Math.random()*20)+1;
console.log(hiddenNumber);
document.querySelector('.score ').textContent=score;
document.querySelector('.highscore ').textContent=highscore;



 // check
 
function check(){
     guessNumber=document.querySelector('.guess').value;
    if(guessNumber == hiddenNumber && guessNumber>0 && guessNumber<=20 ){
    
       
       document.querySelector('.highscore ').textContent=score;
        document.querySelector('.message').textContent='YOU WON THE GAME';
        document.querySelector('.box').textContent=hiddenNumber;
        document.querySelector('body').style.background='green';
         document.querySelector('.box').style.background='green';
         clear();
         if(highscore<score){
         highscore=score;
         document.querySelector('.highscore ').textContent=highscore;
         }
        
    }
    else if(hiddenNumber<guessNumber && guessNumber>0 && guessNumber<=20){
    score--;
    document.querySelector('.score ').textContent=score; 
    document.querySelector('.message').textContent='too high';
    clear();
    }
   else if(  hiddenNumber > guessNumber && guessNumber>0 && guessNumber<=20){
   score--;
        document.querySelector('.message').textContent='too low';
        //document.querySelector('.box').style.background='red';
        clear();
    }
    else{
        alert("Enter value (Between 1-20)");
       clear();
    }

 
}
//clear


function clear(){
    guessNumber=document.querySelector(".guess").value="";
}

//
function restart(){
    hiddenNumber=Math.trunc(Math.random()*20)+1;
    console.log(hiddenNumber);
    document.querySelector('.message').innerHTML='start Guessing..';
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector('.box').style.background='white';
    document.querySelector(".box").innerHTML="?";
    score=20;
    document.querySelector(".score").textContent=score;
    }
