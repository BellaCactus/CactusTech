
const term=document.getElementById("terminal");
if(term){
setInterval(()=>{
term.innerText+="log "+Math.random().toString(36).slice(2)+"\n";
term.scrollTop=term.scrollHeight;
},400);
}

const stats=document.getElementById("stats");
if(stats){
setInterval(()=>{
stats.innerHTML="TPS:20<br>Load:"+ (Math.random()*100).toFixed(1)+"%";
},800);
}

const players=document.getElementById("players");
if(players){
["bella","player2","player3"].forEach(p=>{
let li=document.createElement("li");li.innerText=p;players.appendChild(li);
});
}
