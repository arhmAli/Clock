const hourTime=document.getElementById('timeHour');
const minuteTime=document.getElementById('timeMin');
const secondTime=document.getElementById('timeSec');
const ampmText=document.getElementById('textampm');

function updateTime(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let session="PM";

if(h==0){
    h=12;
}
if (h>12){
    h=h-12;
    session="AM";
}
h=(h<10)?"0"+h:h;

m=(m<10)?"0"+m:m;

s=(s<10)?"0"+s:s;

hourTime.innerText=h
minuteTime.innerText=m
secondTime.innerText=s
ampmText.innerText=session
setTimeout(()=>{
    updateTime()
},1000)
}
updateTime();