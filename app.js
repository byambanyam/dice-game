// тоглогчийн ээлжийг хадгалах хувисагч хэрэгтэй
var activePlayer = 1;

// тоглогчдын цуглуулсан оноог хадаглах хувьсагч хэрэгтэй
var score = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадаглах хувьсагч хэргэтэй
var roundScore = 0;
// шааний аль талаараа буусныг хадаглах хувисагч хэрэгтэй 1-6 гэсэн утгыг энэ хувсагчид санамсаргүйгээр үүсгэж өгнө.

// programm ehelhed beldey

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "inline-block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
