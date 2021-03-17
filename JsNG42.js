 
 let min=1,
 max=10,
 winngNum=randomNum(min,max),
 gssLeft=3;

 const fun=document.querySelector('#game'),
 min1=document.querySelector('.minimum'),
 max1=document.querySelector('.maximum'),
 done=document.querySelector('#OK'),
 gssNum=document.querySelector('#numbr'),
 msg=document.querySelector('.Message'); 


// assign UI min and max
 min1.textContent=min;
 max1.textContent=max;

//
game.addEventListener('mousedown',function(e){
    if(e.target.className==='retry')
     {
         window.location.reload();//reload the page
     }
});

// listen for guess
done.addEventListener('click',function(){
    let gss=parseInt(gssNum.value);
    console.log(gss);

// validate
    if( isNaN(gss) || gss<min || gss>max )
    {
        setMessage(`please enter the number between ${min} and ${max}`,'red');
    }
    
// check if won
    if(gss===winngNum)
    {
    gameOver(true,`${winngNum} is the winning number. You won the game!!!!! CONGRATULATIONS......`);
    }
    else
    {
        gssLeft-=1;
        if(gssLeft===0)
        {
            gameOver(false,`GAME OVER!!!!!! The correct number is ${winngNum}.`);
            
        }
        else
        {
            gssNum.style.borderColor='red';
            //clear input
            gssNum.value='';
            setMessage(`${gss} is not correct. You have ${gssLeft} guesses left.`,'red');
        }

    }
});


function gameOver(won,notification){
let colr;
won===true? colr='green' : colr='red';

    
    gssNum.disabled=true;
    gssNum.style.borderColor=colr;
    msg.style.color=colr;
    setMessage(notification);

// Play again
done.value='Play again';
done.className +='retry';
   

}

// get random numbers
function randomNum(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);
}

// set message
function setMessage(notification,colr){
    msg.textContent=notification;
    msg.style.color=colr;

}