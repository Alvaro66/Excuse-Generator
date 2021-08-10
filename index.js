
window.onload = () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
    console.log("OMG you will not belive me but..... ");
};

let generateExcuse = () => {
    let who =["The dog","My Grandma","His turtle","My bird"];
    let action = ["ate","peed","crushed","broke"];
    let what = ["my homework","the  keys","the car"];
    let when = ["before the class.","rigth on time.","when I finished.","during the lunch.","During I was Praying."];

    let whoIndx = Math.floor(Math.random() * who.length);
    let actionIndx = Math.floor(math.random() * action.length);
    let whatIndx = Math.floor(Math.random() * what.length);
    let whenIndx = Math.floor(Math.random() * when.length);

    return who[whoIndx] + " " + action[actionIndx] + " " + what[whatIndx] + " " + when[whenIndx];
};