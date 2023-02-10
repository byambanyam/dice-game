// тоглогчийн ээлжийг хадгалах хувисагч хэрэгтэй
var activePlayer;
var score;
var roundScore;
var diceDom = document.querySelector(".dice");
//togloomiig ehluullee
InitGame();

function InitGame() {
  activePlayer = 0;
  // тоглогчдын цуглуулсан оноог хадаглах хувьсагч хэрэгтэй
  score = [0, 0];

  // тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадаглах хувьсагч хэргэтэй
  roundScore = 0;
  // шааний аль талаараа буусныг хадаглах хувисагч хэрэгтэй 1-6 гэсэн утгыг энэ хувсагчид санамсаргүйгээр үүсгэж өгнө.

  // programm ehelhed beldey

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // toglogchdiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "player 1";
  document.getElementById("name-1").textContent = "player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

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
    switchToNextplayer();
  }
});
// hold towch event listner
document.querySelector(".btn-hold").addEventListener("click", function () {
  //toglogchiin eeljiin onoog global onoon deer nemj ugnu
  //   if (activePlayer === 0) {
  //     score[0] = score[0] + roundScore;
  //   } else {
  //     score[1] = score[1] + roundScore;
  //   }
  score[activePlayer] = score[activePlayer] + roundScore;
  //   delgets deer onoog uurchluh
  document.getElementById("score-" + activePlayer).textContent =
    score[activePlayer];

  // ээлжийг оноог 0 bolgono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //   toglogchiin eeljiig solin
  if (score[activePlayer] >= 20) {
    // ylagch gej gargana
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextplayer();
  }
});
//   ug toglogch hojson esehiig shalgah
// ene toglogchiin eeljindee tsugluulsan onoog 0 bolgon
function switchToNextplayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // ene eelj shiljuulene
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // activ player tohiruulah buyu ulaan tsaeg
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // shoog tu alga bologonoo
  diceDom.style.display = "none";
}
// new game toch event listner
document.getElementById("btn-new").addEventListener("click", InitGame);
