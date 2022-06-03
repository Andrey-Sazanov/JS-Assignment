function computerPlay(){
    let ans = '';
    let rnd = Math.floor(Math.random()*3);
    if(rnd===0)
        ans = 'Rock';
    if(rnd===1)
        ans = 'Paper';
    if(rnd===2)
        ans = 'Scissors';
    return ans;
}
function roundPlay(playerSelection,computerSelection){
    let result =''
    computerSelection = computerPlay()
    if(playerSelection.toLowerCase()==='paper'){
        if(computerSelection==='Rock')
            result = `You Win! ${playerSelection} beats ${computerSelection}`
        if(computerSelection==='Scissors')
            result = `You Lose! ${computerSelection} beats ${playerSelection}`
        if(computerSelection==='Paper') 
            result = `Draw your selected: ${playerSelection} computer selected: ${computerSelection}`
    }
    if(playerSelection.toLowerCase() ==='rock'){
        if(computerSelection==='Rock')
            result = `Draw your selected: ${playerSelection} computer selected: ${computerSelection}`
        if(computerSelection==='Scissors')
            result = `You Win! ${playerSelection} beats ${computerSelection}`
        if(computerSelection==='Paper') 
            result = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    if(playerSelection.toLowerCase() ==='scissors'){
        if(computerSelection==='Rock')
            result = `You Lose! ${computerSelection} beats ${playerSelection}`
        if(computerSelection==='Scissors')
            result = `Draw your selected: ${playerSelection} computer selected: ${computerSelection}`
        if(computerSelection==='Paper') 
            result = `You Win! ${playerSelection} beats ${computerSelection}`
    }
    return result;
}

function play(){
    for(let i =1;i < 6;i++){
        console.log(`Game number:${i}. Result: ${roundPlay(playerSelection,computerSelection)}`)
    }
}
playerSelection = window.prompt("What's your choice?")
computerSelection = computerPlay();
play()
