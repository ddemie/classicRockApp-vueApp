<template>
    <div class="quiz-container">
      <h1>Classic Rock Quiz</h1>
  
      <div v-if="!isQuizComplete">
        <p>{{ currentQuestion.question }}</p>
        <div class="answer-buttons">
          <button
            v-for="(answer, index) in currentQuestion.answers"
            :key="index"
            @click="selectAnswer(answer.correct, answer.text)"
          >
            {{ answer.text }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { quizState } from '../stores/quizStores';
  
  interface Answer {
    text: string;
    correct: boolean;
  }
  
  interface Question {
    question: string;
    answers: Answer[];
  }
  
  export default defineComponent({
    setup() {
      const router = useRouter();
  
      const state = reactive({
        currentQuestionIndex: 0,
        questions: <Question[]>[
          {
            question: "Which band released the album 'Dark Side of the Moon'?",
            answers: [
              { text: 'The Beatles', correct: false },
              { text: 'Pink Floyd', correct: true },
              { text: 'Led Zeppelin', correct: false },
              { text: 'The Rolling Stones', correct: false }
            ]
          },
          {
            question: 'Who is the lead singer of Led Zeppelin?',
            answers: [
              { text: 'Roger Daltrey', correct: false },
              { text: 'Mick Jagger', correct: false },
              { text: 'Robert Plant', correct: true },
              { text: 'Ozzy Osbourne', correct: false }
            ]
          },
          {
            question: 'Which song is by Queen?',
            answers: [
              { text: 'Hotel California', correct: false },
              { text: 'Sweet Home Alabama', correct: false },
              { text: 'Hey Jude', correct: false },
              { text: 'Bohemian Rhapsody', correct: true },
            ]
          }
        ]
      });
  
      const isQuizComplete = computed(() => state.currentQuestionIndex >= state.questions.length);
      const currentQuestion = computed(() => state.questions[state.currentQuestionIndex]);
  
      const selectAnswer = (correct: boolean, answerText: string) => {
        quizState.userAnswers.push({
          question: state.questions[state.currentQuestionIndex].question,
          answer: answerText,
          correct: correct
        });
  
        if (correct) quizState.score++;
  
        if (state.currentQuestionIndex < state.questions.length - 1) {
          state.currentQuestionIndex++;
        } else {
          router.push('/results'); 
        }
      };
  
      return {
        state,
        currentQuestion,
        isQuizComplete,
        selectAnswer
      };
    }
  });
  </script>
  
  <style scoped>
  .quiz-container {
    text-align: center;
    padding: 20px;
  }
  .answer-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>