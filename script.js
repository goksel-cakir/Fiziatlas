// script.js
let timer;
// Vaka Modu verileri
const vakalar = [
    {
        vaka: "Vaka 1: Başparmak fleksiyonu hareketini gerçekleştiremeyen hasta",
        soru: "Hangi kas etkilenmiştir?",
        cevap: "Flexor pollicis longus",
    },
    {
        vaka: "Vaka 1: Başparmak fleksiyonu hareketini gerçekleştiremeyen hasta",
        soru: "Etkilenen kasın siniri nedir?",
        cevap: "Median sinir",
    },
    {
        vaka: "Vaka 1: Başparmak fleksiyonu hareketini gerçekleştiremeyen hasta",
        soru: "Etkilenen kasın orijini nedir?",
        cevap: "Membranus interossea",
    },
    
    {
        vaka: "Vaka 1: Başparmak fleksiyonu hareketini gerçekleştiremeyen hasta",
        soru: "Etkilenen kasın insersiyonu nedir?",
        cevap: "Distal falanksın palmar yüzü"
    },
    {
        vaka: "Vaka 2: Kolunu fleksiyona götüremeyen hasta",
        soru: "Hangi kas etkilenmiştir?",
        cevap: "Deltoidin anterior parçası",
    },
    {
        vaka: "Vaka 2: Kolunu fleksiyona götüremeyen hasta",
        soru: "Etkilenen kasın siniri nedir?",
        cevap: "Axillaris",
    },
    {
        vaka: "Vaka 2: Kolunu fleksiyona götüremeyen hasta",
        soru: "Etkilenen kasın orijini nedir?",
        cevap: "Scapula spina, acromion, clavicula",
    },
    {
        vaka: "Vaka 2: Kolunu fleksiyona götüremeyen hasta",
        soru: "Etkilenen kasın insersiyonu nedir?",
        cevap: "Tuberositas deltoidea"
    },

    {
        vaka: "Vaka 3: Kolunu supinasyon pozisyonunda fleksiyona götüremeyen hasta",
        soru: "Hangi kas etkilenmiştir?",
        cevap: "Biceps brachii",
    },
    {
        vaka: "Vaka 3: Kolunu supinasyon pozisyonunda fleksiyona götüremeyen hasta",
        soru: "Etkilenen kasın siniri nedir?",
        cevap: "Musculocutaneous",
    },
    {
        vaka: "Vaka 3: Kolunu supinasyon pozisyonunda fleksiyona götüremeyen hasta",
        soru: "Etkilenen kasın orijini nedir?",
        cevap: "tuberculum supraglenoidale ",
    },
    {
        vaka: "Vaka 3: Kolunu supinasyon pozisyonunda fleksiyona götüremeyen hasta",
        soru: "Etkilenen kasın insersiyonu nedir?",
        cevap: "Tuberositas radii"
    },
];

// Klasik Mod verileri
const kaslar = [
    {
        name: "Biceps",
        soru: "Resimde gördüğünüz kasın ismi nedir?",
        cevap: "Biceps"
    },
    {
        name: "Biceps",
        soru: "Bu kasın innervasyonu nedir?",
        cevap: "Musculocutaneous"
    },
    {
        name: "Biceps",
        soru: "Bu kasın orijini nedir?",
        cevap: "tuberculum supraglenoidale"
    },
    {
        name: "Biceps",
        soru: "Bu kasın insersiyonu nedir?",
        cevap: "Tuberositas radii"
    },
    {
        name: "Biceps",
        soru: "Bu kasın fonksiyonu nedir?",
        cevap: "Ön kola fleksiyon ve supinasyon"
    },
    {
        name: "Triceps",
        soru: "Resimde gördüğünüz kasın ismi nedir?",
        cevap: "Triceps"
    },
    {
        name: "Triceps",
        soru: "Bu kasın innervasyonu nedir?",
        cevap: "Radialis"
    },
    {
        name: "Triceps",
        soru: "Bu kasın orijini nedir?",
        cevap: "tuberculum infraglenoidale"
    },
    {
        name: "Triceps",
        soru: "Bu kasın insersiyonu nedir?",
        cevap: "Olecranon"
    },
    {
        name: "Triceps",
        soru: "Bu kasın fonksiyonu nedir?",
        cevap: "Ön kola ekstansiyon"
    },

    {
        name: "Deltoid",
        soru: "Resimde gördüğünüz kasın ismi nedir?",
        cevap: "Deltoid"
    },
    {
        name: "Deltoid",
        soru: "Bu kasın innervasyonu nedir?",
        cevap: "Axillaris"
    },
    {
        name: "Deltoid",
        soru: "Bu kasın orijini nedir?",
        cevap: "Scapula spina, acromion, clavicula"
    },
    {
        name: "Deltoid",
        soru: "Bu kasın insersiyonu nedir?",
        cevap: "Tuberositas deltoidea"
    },
    {
        name: "Deltoid",
        soru: "Bu kasın fonksiyonu nedir?",
        cevap: "Kola fleksiyon, abdüksiyon, ekstansiyon"
    }
];


let currentMode = "";
let currentQuestionIndex = 0;
let score = 0;

function mode_select(mode) {

    if (mode === "Case"){
        currentMode = mode;
        currentQuestionIndex = 0;
        score = 0;
        caseMode();
    }
    else if (mode === "Classic"){
        currentMode = mode;
        currentQuestionIndex = 0;
        score = 0;
        classicMode();

    }
    else if (mode === "Wiki") {
        displayBodyAreas();
    }
    else if (mode === "AI")[

    ]

}


function caseMode() {
    clearInterval(timer);
    document.getElementById("progressBar").style.display = "block";
    document.getElementById("correctnessMessage").textContent = "";

    // Timer'ı başlat
    let timeLeft = 20; // Soru başına 20 saniye
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay.textContent = `Kalan süre: ${timeLeft} saniye`;

    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = "100%";


    timer = setInterval(() => {
        timeLeft -= 0.1 ;
        timerDisplay.textContent = `Kalan süre: ${Math.floor(timeLeft.toFixed(1))} saniye`;
        
        const progressWidth = (timeLeft / 20) * 100; // Progress bar genişliği
        progressBar.style.width = progressWidth + "%";

        

        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswerCase();
            setTimeout(nextQuestionCase, 2000);
        }
        
    }, 100);
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    const caseData = vakalar[currentQuestionIndex];
        const questionHtml = `
            <div class="text-center just-font">${caseData.vaka}</div>
            <div class="text-center just-font">${caseData.soru}</div>
            <div class="form-section">
                <label for="userAnswer" class="me-2">Cevap:</label>
                <input type="text" class="form-control" id="userAnswer" placeholder="Cevabı giriniz:">
            </div>
            <button class="btn btn-outline-primary" onclick="checkAnswerCase()">Cevabı kontrol et</button>
        `;
        quizDiv.innerHTML = questionHtml;
}
const POINTS_FOR_CORRECT_ANSWER = 10; // Her bir doğru cevap için gelecek puan
const PENALTY_FOR_TIME = 1; // Saniye başına kesilen ceza(henüz tam ayarlayamadım)

function checkAnswerCase() {
    let userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
    let correctAnswer = vakalar[currentQuestionIndex].cevap.toLowerCase();
    let correctnessMessage = "";

    let timeLeft = parseFloat(document.getElementById("timerDisplay").textContent.split(" ")[2]); 

    if (userAnswer === correctAnswer) {
        let scoreForAnswer = POINTS_FOR_CORRECT_ANSWER + ((20 - Math.floor(timeLeft)) * PENALTY_FOR_TIME ); 
        score += scoreForAnswer; 
        correctnessMessage = "Doğru bildiniz! Puan: " + scoreForAnswer;
    } else {
        correctnessMessage = "Yanlış bildiniz. Doğru cevap: " + correctAnswer;
    }


    document.getElementById("correctnessMessage").textContent = correctnessMessage;
    updateScoreDisplay();
    if (currentQuestionIndex === vakalar.length -1){
        endQuiz();
    }
    setTimeout(nextQuestionCase, 1000); // Otomatikmen sonraki soruya geç
}

function nextQuestionCase() {
    currentQuestionIndex++;
    if (currentQuestionIndex < vakalar.length) {
        caseMode();
    } else {
        endQuiz();
    }
}


function endQuiz() {
    alert(`Oyun bitti. Skorunuz: ${score}`);
    updateScoreDisplay();
    clearInterval(timer);
}

function updateScoreDisplay() {
    document.getElementById("score").textContent = score;
}

function classicMode(){
    clearInterval(timer);
    document.getElementById("progressBar").style.display = "block";
    document.getElementById("correctnessMessage").textContent = "";
    
    
    let timeLeft = 20; // Soru başına 20 saniye
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay.textContent = `Kalan süre: ${timeLeft} saniye`;
    timer = setInterval(() => {
        timeLeft -= 0.1 ;
        timerDisplay.textContent = `Kalan süre: ${Math.floor(timeLeft.toFixed(1))} saniye`;
        
        const progressWidth = (timeLeft / 20) * 100; // Progress bar büyüklüğü hesaplama
        progressBar.style.width = progressWidth + "%";

        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswerClassic();
            setTimeout(nextQuestionClassic, 2000);
        }
        
    }, 100);
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    const muscleData = kaslar[currentQuestionIndex];
        const questionHtml = `
            <img src="./images/${muscleData.name}.png" class="muscle-image" alt="${muscleData.name}" >
            <div class="just-font">${muscleData.soru}</div>
            <div class="form-section">
                <label for="userAnswer" class="me-2">Cevap:</label>
                <input type="text" class="form-control" id="userAnswer" placeholder="Cevabınızı giriniz">
            </div>
            <button class="btn btn-outline-primary" onclick="checkAnswerClassic()">Cevabı kontrol et</button>
        `;
    quizDiv.innerHTML = questionHtml;

}
function checkAnswerClassic() {
    let userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
    let correctAnswer = kaslar[currentQuestionIndex].cevap.toLowerCase();
    let correctnessMessage = "";
    let timeLeft = parseFloat(document.getElementById("timerDisplay").textContent.split(" ")[2]); 

    if (userAnswer === correctAnswer) {
        let scoreForAnswer = POINTS_FOR_CORRECT_ANSWER + (Math.floor(timeLeft) * PENALTY_FOR_TIME ); 
        score += scoreForAnswer; 
        correctnessMessage = "Doğru bildiniz! Puan: " + scoreForAnswer;
    } else {
        correctnessMessage = "Yanlış bildiniz. Doğru cevap: " + correctAnswer;
    }

 
    document.getElementById("correctnessMessage").textContent = correctnessMessage;
    updateScoreDisplay();
    setTimeout(nextQuestionClassic, 1000); // Otomatikmen sonraki soruya geçiyor
}


function nextQuestionClassic(){
    currentQuestionIndex++;
    if (currentQuestionIndex < kaslar.length) {
        classicMode();
    } else {
        endQuiz(); 
    }
}


function switchToWikiMode() {
    mode_select("Wiki");
}

function returnToMainScreen() {
    document.getElementById("modeSelection").style.display = "block";
    document.getElementById("scoreDisplay").classList.add("hidden");
    document.getElementById("returnButton").classList.add("hidden");
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("bodyAreas").classList.add("hidden");
}

$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});
