document.querySelector(".start").addEventListener("click", function(){
var random1=Math.floor(Math.random()*20 +1);
var image1="images/dice"+random1+".jpg";
document.getElementById("img1").src=image1;
document.querySelector(".start").innerHTML="Play Again";
});
