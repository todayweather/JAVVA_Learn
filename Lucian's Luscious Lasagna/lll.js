// Expected Minute In Oven
const EMIO = 40;

// const remaining_time = function(rtime){
//     return rtime - EMIO;
// }

// console.log(remaining_time(30));

// const prepTime = function(layer){
//     return layer * 2;
// }

// console.log(prepTime(2));

const timeMaking = function (layers,time){
    let modulustime = EMIO - time;
    let timelayer = layers * 2;
    return modulustime + timelayer;
}

console.log(timeMaking(1,5));