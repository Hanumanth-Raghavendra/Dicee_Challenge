var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1 - 6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (sessionStorage.getItem('flag') === null) {
    document.querySelector("h1").innerHTML = "Refresh me";
    sessionStorage.setItem('flag', '1');
} else {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Victory!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Victory! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}