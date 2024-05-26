const questions = [
    {
        question: "Trong HTML, thẻ nào được sử dụng để tạo một liên kết?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1
    },
    {
        question: "Để áp dụng một style cho một ID cụ thể trong CSS, ta sử dụng ký hiệu nào?",
        options: [".", "#", "*", "&"],
        correctAnswer: 1
    },
    {
        question: "Trong JavaScript, phương thức nào được sử dụng để in nội dung ra console?",
        options: ["console.log()", "print()", "echo()", "write()"],
        correctAnswer: 0
    },
    {
        question: "Thẻ nào dùng để tạo một đoạn văn bản trong HTML?",
        options: ["<div>", "<span>", "<p>", "<section>"],
        correctAnswer: 2
    },
    {
        question: "Thuộc tính CSS nào được sử dụng để thay đổi màu nền của một phần tử?",
        options: ["color", "background-color", "font-color", "bgcolor"],
        correctAnswer: 1
    },
    {
        question: "Phương thức nào được sử dụng để thêm một phần tử vào cuối mảng trong JavaScript?",
        options: ["push()", "pop()", "add()", "append()"],
        correctAnswer: 0
    },
    {
        question: "Thẻ nào dùng để nhúng một tệp video vào trang web?",
        options: ["<video>", "<media>", "<movie>", "<embed>"],
        correctAnswer: 0
    },
    {
        question: "Thuộc tính nào được sử dụng để căn giữa một phần tử theo chiều ngang trong CSS?",
        options: ["text-align: center;", "align: center;", "horizontal-align: center;", "center-align: horizontal;"],
        correctAnswer: 0
    },
    {
        question: "Từ khóa nào được sử dụng để khai báo một biến trong JavaScript?",
        options: ["var", "let", "const", "Tất cả các đáp án trên"],
        correctAnswer: 3
    },
    {
        question: "Thuộc tính nào của thẻ `<img>` được sử dụng để xác định đường dẫn đến tệp hình ảnh?",
        options: ["src", "href", "link", "source"],
        correctAnswer: 0
    }
];



function loadAnswer() {

}
function updateQuestion(index) {
    const questionElement = document.getElementById('question');
    const answer1 = document.getElementById('answer1');
    const answer2 = document.getElementById('answer2');
    const answer3 = document.getElementById('answer3');
    const answer4 = document.getElementById('answer4');

    questionElement.textContent = questions[index].question;
    answer1.textContent = questions[index].options[0];
    answer2.textContent = questions[index].options[1];
    answer3.textContent = questions[index].options[2];
    answer4.textContent = questions[index].options[3];

    document.getElementById('btnAnswer1').style.backgroundColor = 'transparent';
    document.getElementById('btnAnswer2').style.backgroundColor = 'transparent';
    document.getElementById('btnAnswer3').style.backgroundColor = 'transparent';
    document.getElementById('btnAnswer4').style.backgroundColor = 'transparent';

    isAnswer = false;
    updateProcessBar(index)
}

function updateProcessBar(index) {
    index++
    const progressBar = document.getElementById('processBar');
    const progressText = document.getElementById('progressText');
    const totalQuestions = questions.length;
    const percentage = (index / totalQuestions) * 100
    progressBar.style.width = percentage + '%';
    progressText.textContent = `Quiz question of ${index} of ${totalQuestions}`

}



function congratulation() {
    const totalQuestions = questions.length;
    window.location.href = `congratulation.html?score=${score}&totalQuestion=${totalQuestions}`;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion(currentQuestionIndex);
    } else {
        congratulation()
    }
}

function previousQuestion() {
    if (currentQuestionIndex != 0) {
        currentQuestionIndex--;
        updateQuestion(currentQuestionIndex);
    }
}

function checkAnswer(answerIndex, btnAnswerId) {
    if (isAnswer) {
        return
    }
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctAnswer) {
        const rightAnswer = document.getElementById(btnAnswerId);
        rightAnswer.style.backgroundColor = '#19C874';
        score++;
    } else {
        const wrongAnswer = document.getElementById(btnAnswerId);
        wrongAnswer.style.backgroundColor = '#CF4343';
    }
    isAnswer = true;
}


let currentQuestionIndex = 0;
var isAnswer = false;
var score = 0;
updateQuestion(currentQuestionIndex);

document.getElementById('btnNext').onclick = nextQuestion;
document.getElementById('btnPrevious').onclick = previousQuestion;

document.getElementById('btnAnswer1').onclick = () => checkAnswer(0, 'btnAnswer1');
document.getElementById('btnAnswer2').onclick = () => checkAnswer(1, 'btnAnswer2');
document.getElementById('btnAnswer3').onclick = () => checkAnswer(2, 'btnAnswer3');
document.getElementById('btnAnswer4').onclick = () => checkAnswer(3, 'btnAnswer4');
