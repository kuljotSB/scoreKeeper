const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display= document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const table = document.getElementById('tabular');

let p1Score=0;
let matchNumber=0;
let p2Score=0;
let winningScore=21;
let isGameOver=false;
let winner=" ";
let looser=" ";
let wp=0;
let lp=0;


p1Button.addEventListener('click', function()
{
    if(!isGameOver)
    {
        p1Score+=1;
    if(p1Score===winningScore)
    {
        isGameOver=true;
        matchNumber+=1;
        winner="kuljot";
        looser="shlok";
        wp=p1Score;
        lp=p2Score;
        
        
    }
    p1Display.textContent=p1Score;
    }
    
})

p2Button.addEventListener('click', function()
{
    if(!isGameOver)
    {
        p2Score+=1;
        if(p2Score===winningScore)
        {
            isGameOver=true;
            matchNumber+=1;
            winner="shlok";
            looser="kuljot";
            wp=p2Score;
            lp=p1Score;
            
        }
        p2Display.textContent=p2Score;
    }
})

resetButton.addEventListener('click', function()
{
    let row = document.createElement("tr");
    let matchCell = document.createElement("td");
    matchCell.textContent=matchNumber;
    row.appendChild(matchCell);

    let winnerCell=document.createElement("td");
    winnerCell.textContent=winner;
    row.appendChild(winnerCell);

    let looserCell=document.createElement("td");
    looserCell.textContent=looser;
    row.appendChild(looserCell);

    let winnerPoints=document.createElement("td");
    winnerPoints.textContent=wp;
    row.appendChild(winnerPoints);

    let looserPoints=document.createElement("td");
    looserPoints.textContent=lp;
    row.appendChild(looserPoints);

    tabular.appendChild(row);

    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    wp=0;
    lp=0;
    winner="";
    looser="";

})