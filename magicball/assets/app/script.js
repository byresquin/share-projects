// Footer | Current year
document.getElementById("year").textContent = new Date().getFullYear();

//
const ball = document.getElementById("magicBall");
const userInput = document.getElementById("userInput");
const numberDisplay = document.getElementById("numberDisplay");
const resultText = document.getElementById("resultText");
const errorMsg = document.getElementById("errorMsg");

const responses = [
  "Kesinlikle evet!",
  "Hayır.",
  "Yarın başla.",
  "Emin değilim.",
  "Harika bir fikir!",
  "Bunu yapmalısın.",
  "Biraz daha bekle.",
  "Risk al!",
  "Çok iyi olur.",
  "Düşünmelisin.",
  "Başarı kaçınılmaz!",
  "Daha iyi bir yol bulabilirsin.",
  "Şansın yüksek!",
  "Emin olmadan karar verme.",
  "Mükemmel bir zaman!",
  "Zaman kaybetme, hemen başla!",
  "Doğru zaman değil.",
  "Şüpheli bir seçim.",
  "Kendine güven!",
  "Bu iş olur!",
  "Biraz daha bilgi edin.",
  "Bu iyi bir fikir gibi durmuyor.",
  "Kaderini sen belirle!",
  "Şimdi tam zamanı!",
  "Daha çok düşünmelisin.",
  "Doğru karar olabilir.",
  "Sana bağlı!",
  "Harika bir adım olur.",
  "Güzel bir başlangıç olur.",
  "Denemeye değer!",
];

const gradients = [
  "radial-gradient(circle at 30% 30%, #ff5733, #900C3F)",
  "radial-gradient(circle at 30% 30%, #33ff57, #004d00)",
  "radial-gradient(circle at 30% 30%, #5733ff, #1a0033)",
  "radial-gradient(circle at 30% 30%, #ff33f6, #660066)",
  "radial-gradient(circle at 30% 30%, #f3ff33, #665700)",
  "radial-gradient(circle at 30% 30%, #33f3ff, #005766)",
  "radial-gradient(circle at 30% 30%, #ff7b00, #662e00)",
  "radial-gradient(circle at 30% 30%, #ff0000, #330000)",
  "radial-gradient(circle at 30% 30%, #00ffcc, #004d40)",
  "radial-gradient(circle at 30% 30%, #ff99cc, #660033)",
  "radial-gradient(circle at 30% 30%, #99ff99, #336600)",
  "radial-gradient(circle at 30% 30%, #cc99ff, #330066)",
  "radial-gradient(circle at 30% 30%, #ffcc99, #663300)",
  "radial-gradient(circle at 30% 30%, #66ff99, #003300)",
  "radial-gradient(circle at 30% 30%, #ff9966, #661a00)",
  "radial-gradient(circle at 30% 30%, #66ccff, #003366)",
  "radial-gradient(circle at 30% 30%, #ff99ff, #660066)",
  "radial-gradient(circle at 30% 30%, #99ffff, #006666)",
  "radial-gradient(circle at 30% 30%, #ffff99, #666600)",
  "radial-gradient(circle at 30% 30%, #ff66b2, #660033)",
  "radial-gradient(circle at 30% 30%, #b266ff, #330066)",
  "radial-gradient(circle at 30% 30%, #66ffb2, #00331a)",
  "radial-gradient(circle at 30% 30%, #ffb266, #662e00)",
  "radial-gradient(circle at 30% 30%, #b2ff66, #336600)",
  "radial-gradient(circle at 30% 30%, #ff66ff, #660066)",
];

// Enter tuşuna basıldığında olayın tetiklenmesi
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Form gönderimini önler (Eğer bir form içindeyse)
    ball.click(); // Butonun tıklanmasını tetikle
  }
});

let isRunning = false;
let lastInput = "";

ball.addEventListener("click", function () {
  if (isRunning) return;
  if (userInput.value.trim() === "") {
    showError("Lütfen bir şeyler yazın!");
    return;
  }

  if (userInput.value === lastInput) {
    showError("Lütfen önce sorunuzu değiştirin!");
    return;
  }

  errorMsg.textContent = "";
  errorMsg.style.display = "none";
  isRunning = true;
  lastInput = userInput.value;

  resultText.style.display = "none";
  let count = 0;
  let interval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * 30) + 1;
    numberDisplay.textContent = randomNum;
    ball.style.background = gradients[randomNum - 1];
    count++;
    if (count >= 30) {
      clearInterval(interval);
      showResult(randomNum);
    }
  }, 100);
});

function showResult(number) {
  numberDisplay.textContent = number;
  resultText.textContent = responses[number - 1];
  resultText.style.display = "block";
  isRunning = false;
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.display = "inline";
  setTimeout(() => {
    errorMsg.style.display = "none";
  }, 3000);
}
