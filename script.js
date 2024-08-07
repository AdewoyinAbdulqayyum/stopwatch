// let stopWatch = 0;
// let stopTimer = null;
// let hourHand = null;
// const time = document.getElementById("watch")

// function padStart(value){
//     return String(value).padStart(2, "0")
// }
// function padMilliseconds(value){
//     return String(value).padStart(3, "0")
// }
// function starter(){
//     const hours = Math.floor(stopWatch / 3600000)
//     const minutes = Math.floor((stopWatch % 3600000) / 6000)
//     const seconds = Math.floor((stopWatch % 60000) / 1000)
//     const Milliseconds= stopWatch % 1000;

//     time.innerHTML = `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}:${padMiliseconds(Miliseconds)}`
// }

// function addition(){
//     stopWatch += 10;
//     starter()
// }
// function start(){
//     if(stopTimer)stop()
//         stopTimer = setInterval(addition, 10)
// }

// function stop(){
//     clearInterval(stopTimer)
//     stopTimer = null;
// }

// function reset(){
//     stop()
//     stopWatch = 0;
//     starter() 
// }

let stopWatch = 0;
let stopTimer = null;
const time = document.getElementById("watch");

function padStart(value){
    return String(value).padStart(2, "0");
}

// function padMilliseconds(value){
//     return String(value).padStart(2, "0");
// }

function starter(){
    const hours = Math.floor(stopWatch / 3600000);
    const minutes = Math.floor((stopWatch % 3600000) / 60000);
    const seconds = Math.floor((stopWatch % 60000) / 1000);
    const milliseconds = stopWatch % 1000;

    time.innerHTML = `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}:${padStart(milliseconds)}`;
}

function addition(){
    stopWatch += 10;
    starter();
}

function start(){
    if(stopTimer) stop();
    stopTimer = setInterval(addition, 10);
}

function stop(){
    clearInterval(stopTimer);
    stopTimer = null;
}
function reset(){
   stop()
    stopWatch = 0;
     starter() 
}