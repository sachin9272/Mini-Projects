const timer = document.querySelector('.clock');

function getTime(){
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = h<10?"0":h;
    m = m<10?"0":m;
    s = s<10?"0":s;
    const timestr = h + ":" + m + ":" + s;
    timer.textContent = timestr;
}

setInterval(getTime,1000);
