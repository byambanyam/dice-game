// тоглогчийн ээлжийг хадгалах хувисагч хэрэгтэй
var activePlayer = 0;

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
// shoo shideh heseg
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 Хүртэл  санамсаргүй нэг то гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //   шооны зэргыг вэб дээр гаргаж ирнэ
  diceDom.style.display = "inline-block";
  //   олсон санамсаргүй утгад харгалзах шооны зургыг вэб дээр үзүүлэнэ.

  diceDom.src = "dice-" + diceNumber + ".png";
  //  buusan toon 1 ees ylgaatai bol idwehtei tolgogchiin eeljiin toog nemegduulne toglogchiin eeljiin onoog oorchilno oo
  if (diceNumber !== 1) {
    // 1-s ylgaatai too buulaa

    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // ene toglogchiin eejindee tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // ene eelj shiljuulene
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // activ player tohiruulah buyu ulaan tsaeg
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // shoog tu alga bologonoo
    diceDo.style.display = "none";
  }
});
