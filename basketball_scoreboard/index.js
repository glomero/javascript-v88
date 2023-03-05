
let homeScore = 0;
let guestScore = 0;
let leading = "";
document.getElementById('home-score').innerText = homeScore;
document.getElementById('guest-score').innerText = guestScore;

function home1(){
    homeScore += 1;
    document.getElementById('home-score').innerText = homeScore;
    updateMessage();
}
function home2(){
    homeScore += 2;
    document.getElementById('home-score').innerText = homeScore;
    updateMessage();
    updateMessage();
}
function home3(){
    homeScore += 3;
    document.getElementById('home-score').innerText = homeScore;
    updateMessage();
}
//guest function
function add1(){
    guestScore+= 1;
    document.getElementById('guest-score').innerText = guestScore;
    updateMessage();
}
function add2(){
    guestScore += 2;
    document.getElementById('guest-score').innerText = guestScore;
    updateMessage();
}
function add3(){
    guestScore += 3;
    document.getElementById('guest-score').innerText = guestScore;
    updateMessage();
}
function newGame(){
    homeScore = 0;
    guestScore = 0;
    leading = "";
    document.getElementById('home-score').innerText = homeScore;
    document.getElementById('guest-score').innerText = guestScore;
    updateMessage();
}
function updateMessage(){
    if (homeScore > guestScore){
        document.getElementById('home_lead').innerText = "Leading score";
        document.getElementById('guest_lead').innerText = "";
        leading = "home";
    } else if (guestScore > homeScore){
        document.getElementById('guest_lead').innerText = "Leading score";
        document.getElementById('home_lead').innerText = "";
        leading = "guest";
    } else {
        document.getElementById('home_lead').innerText = "";
        document.getElementById('guest_lead').innerText = "";
        leading = "";
    }
}