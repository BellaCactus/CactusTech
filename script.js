
const term = document.getElementById("terminal");
if(term){
setInterval(()=>{
term.innerText += "tick " + Math.random().toString(36).slice(2) + "\n";
term.scrollTop = term.scrollHeight;
},500);
}

const stats = document.getElementById("stats");
if(stats){
setInterval(()=>{
stats.innerHTML = "TPS: 20<br>Load: " + (Math.random()*100).toFixed(2)+"%";
},1000);
}
