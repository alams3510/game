let check= document.querySelector('.check');
let guess= document.querySelector('.guess');
let number= document.querySelector('.number');
let score=document.querySelector('.score').textContent;
score=20;
let secret=Math.trunc(Math.random()*20+1);

check.addEventListener('click',function(){

    if(guess.value===""){
        document.querySelector('.message').textContent="please enter number";
        return; 
    }
    else{
        document.querySelector('.message').textContent="";
        if(score>-1){
        if(secret>Number(guess.value)){
            document.querySelector('.message').textContent="Too Low";
            document.querySelector('.score').textContent=score--;  
        }
        else if(secret<Number(guess.value)){
            document.querySelector('.message').textContent="Too High";
            document.querySelector('.score').textContent=score--;  
        }
        else{
            document.querySelector('.message').textContent="Correct Match";
            number.textContent=secret;
            document.querySelector('.score').textContent=score; 
            document.querySelector('.highscore').textContent=score; 
            document.querySelector('body').style.backgroundColor='green'; 
 
                return;
        }
    }
 
}
    if(document.querySelector('.score').textContent<1){
     document.querySelector('.message').textContent="Game is Over";
     document.querySelector('body').style.backgroundColor='red'; 
            return;
    }

});

let again=document.querySelector('.again');
again.addEventListener('click',function(){
    score=20;
    // secret=Math.trunc(Math.random()*20+1);
    number.textContent='?';
    document.querySelector('.message').textContent="Start Guessing.....";
    guess.value="";
    document.querySelector('.score').textContent=score;
    document.querySelector('.highscore').textContent=0; 
    document.querySelector('body').style.backgroundColor='#222'; 

})