const questions = [
    {
      question: "Which band released the album 'Dark Side of the Moon'?",
      answers: [
        { text: "Pink Floyd", correct: true },
        { text: "The Beatles", correct: false },
        { text: "Led Zeppelin", correct: false },
        { text: "The Rolling Stones", correct: false }
      ]
    },
    {
      question: "Who is the lead singer of Led Zeppelin?",
      answers: [
        { text: "Robert Plant", correct: true },
        { text: "Roger Daltrey", correct: false },
        { text: "Mick Jagger", correct: false },
        { text: "Ozzy Osbourne", correct: false }
      ]
    },
    {
      question: "Which song is by Queen?",
      answers: [
        { text: "Bohemian Rhapsody", correct: true },
        { text: "Hotel California", correct: false },
        { text: "Sweet Home Alabama", correct: false },
        { text: "Hey Jude", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-button');
  const scoreElement = document.getElementById('score');
  const resultElement = document.getElementById('result');
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    resultElement.classList.add('hide');
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(button, answer.correct));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.classList.add('hide');
    answerButtonsElement.innerHTML = '';
  }
  
  function selectAnswer(button, correct) {
    if (correct) score++;
    Array.from(answerButtonsElement.children).forEach(btn => {
      btn.disabled = true;
      if (btn.innerHTML === button.innerHTML && correct) {
        btn.style.backgroundColor = '#4caf50';
      } else {
        btn.style.backgroundColor = '#f44336';
      }
    });
    nextButton.classList.remove('hide');
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    resultElement.classList.remove('hide');
    scoreElement.innerHTML = score;
    nextButton.innerHTML = 'Restart';
    nextButton.classList.remove('hide');
    nextButton.addEventListener('click', startQuiz);
  }
  
  startQuiz();