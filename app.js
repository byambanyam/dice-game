// тоглогчийн ээлжийг хадгалах хувисагч хэрэгтэй
var activePlayer = 1;

// тоглогчдын цуглуулсан оноог хадаглах хувьсагч хэрэгтэй
var score = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадаглах хувьсагч хэргэтэй
var roundScore = 0;
// шааний аль талаараа буусныг хадаглах хувисагч хэрэгтэй 1-6 гэсэн утгыг энэ хувсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
console.log(dice);
