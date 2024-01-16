"use strict";

const endDate = "5 March 2024 12:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log(diff);
    if(diff < 0) return;

    // convert into days
    inputs[0].value = Math.floor(diff/ 3600 / 24);
    // convert into hours
    inputs[1].value = Math.floor(diff / 3600)% 24;
    // convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into secs
    inputs[3].value = Math.floor(diff) % 60;
    

}
clock();

// 1 day = 24hrs
// 1 hr = 60mins
// 60mins = 3600 sec
setInterval(
    ()=> {
        clock()
    },
    1000
)

