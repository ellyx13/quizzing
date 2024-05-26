const queryString = window.location.search;


const urlParams = new URLSearchParams(queryString);


const score = urlParams.get('score');
const totalQuestion = urlParams.get('totalQuestion');

const resultQuiz = document.getElementById('resultQuiz');
resultQuiz.textContent = `${score}/${totalQuestion}`