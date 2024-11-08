// Sorular ve cevaplar (Formül içermeyen bilgi odaklı sorular)
const questions = [
    {
        question: "Basit faiz, sadece başlangıçtaki anaparaya uygulanır.",
        answers: ["Doğru", "Yanlış"],
        correct: 0
    },
    {
        question: "Bileşik faiz, faize faiz ekleyerek hesaplanır.",
        answers: ["Doğru", "Yanlış"],
        correct: 0
    },
    {
        question: "Anüite, eşit zaman aralıklarında yapılan eşit ödemeler serisidir.",
        answers: ["Doğru", "Yanlış"],
        correct: 0
    },
    {
        question: "Basit faiz, dönem sonunda sadece ana paraya eklenir.",
        answers: ["Doğru", "Yanlış"],
        correct: 0
    },
    {
        question: "Bileşik faiz, her dönem sonunda biriken toplam üzerinden tekrar hesaplanır.",
        answers: ["Doğru", "Yanlış"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Oyunu başlat
function startGame() {
    const name = document.getElementById("name").value;
    if (!name) {
        alert("Lütfen adınızı girin");
        return;
    }
    document.getElementById("intro").classList.add("hide");
    document.getElementById("question-container").classList.remove("hide");
    nextQuestion();
}

// Sonraki soruya geç
function nextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

// Soruyu göster
function showQuestion(question) {
    document.getElementById("question-title").innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(index === question.correct));
        document.getElementById("answer-buttons").appendChild(button);
    });
}

// Cevap seçildiğinde
function selectAnswer(isCorrect) {
    if (isCorrect) {
        document.getElementById("feedback").innerText = "Tebrikler, doğru cevap!";
        score += 10;
    } else {
        document.getElementById("feedback").innerText = "Yanlış cevap, tekrar deneyin.";
    }
    document.getElementById("next-btn").classList.remove("hide");
}

// Durumu sıfırla
function resetState() {
    document.getElementById("feedback").innerText = '';
    document.getElementById("answer-buttons").innerHTML = '';
    document.getElementById("next-btn").classList.add("hide");
}

// Oyunu sıfırla
function resetGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("result-container").classList.add("hide");
    document.getElementById("intro").classList.remove("hide");
}

// Sonuca göre rozet göster
function showResult() {
    let badge = "";
    if (score >= 40) badge = "Altın Rozet";
    else if (score >= 30) badge = "Gümüş Rozet";
    else badge = "Bronz Rozet";

    document.getElementById("result").innerText = `Puanınız: ${score}. Kazandığınız rozet: ${badge}`;
    document.getElementById("result-container").classList.remove("hide");
    document.getElementById("question-container").classList.add("hide");
}
