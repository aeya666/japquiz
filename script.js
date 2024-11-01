const hiragana = [
  { char: 'あ', romanji: 'a' },
  { char: 'い', romanji: 'i' },
  { char: 'う', romanji: 'u' },
  { char: 'え', romanji: 'e' },
  { char: 'お', romanji: 'o' },
]; // belum lengkap

const katakana = [
  { char: 'ア', romanji: 'a' },
  { char: 'イ', romanji: 'i' },
  { char: 'ウ', romanji: 'u' },
  { char: 'エ', romanji: 'e' },
  { char: 'オ', romanji: 'o' },
]; // belum lengkap

let currentQuestion = {};
let currentType = 'hiragana';
let currentData = [];
let correctCount = 0;
let wrongCount = 0;

document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.getElementById('quiz-type').addEventListener('change', (event) => {
  currentType = event.target.value;
});

function startQuiz() {
  // Reset
  correctCount = 0;
  wrongCount = 0;
  updateScore();
  
  if (currentType === 'hiragana') {
    currentData = hiragana;
  } else {
    currentData = katakana;
  }
  getNextQuestion();
}

function getNextQuestion() {
  const randomIndex = Math.floor(Math.random() * currentData.length);
  currentQuestion = currentData[randomIndex];
  document.getElementById('question').textContent = `apa ini : ${currentQuestion.char}`;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
  if (userAnswer === currentQuestion.romanji) {
    document.getElementById('result').textContent = 'Correct!';
    correctCount++; // kalau jawaban benar
  } else {
    document.getElementById('result').textContent = `Incorrect. The correct answer is: ${currentQuestion.romanji}`;
    wrongCount++; // jawaban lu salah
  }
  updateScore(); // sesuai nama buat update coi
  getNextQuestion();
}

function updateScore() {
  document.getElementById('correct-count').textContent = `benar: ${correctCount}`;
  document.getElementById('wrong-count').textContent = `salah: ${wrongCount}`;
}

// gambar
var modal = document.getElementById("imageModal");
var img = document.getElementById("hiraganaKatakanaImage");
var modalImg = document.getElementById("hiraganaKatakanaImage");
var captionText = document.getElementById("caption");

document.getElementById('show-hiragana-katakana').onclick = function() {
  modal.style.display = "block";
  modalImg.src = "img/jap.jpg";
  captionText.innerHTML = "Hiragana & Katakana Chart";
}

document.getElementsByClassName("close")[0].onclick = function() {
  modal.style.display = "none";
}
