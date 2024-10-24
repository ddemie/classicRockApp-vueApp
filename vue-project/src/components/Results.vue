<template>
    <div class="results-container">
      <h1>Quiz Results</h1>
      <h2>Your Score: {{ quizState.score }} / {{ quizState.userAnswers.length }}</h2>
      <ul>
        <li v-for="(result, index) in quizState.userAnswers" :key="index">
          <p>Question {{ index + 1 }}: {{ result.question }}</p>
          <p>Your Answer: {{ result.answer }}</p>
          <p>
            <span :class="{ correct: result.correct, incorrect: !result.correct }">
              {{ result.correct ? 'Correct!' : 'Incorrect.' }}
            </span>
          </p>
        </li>
      </ul>
      <button @click="goToHome">Return to Home</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import { quizState } from '../stores/quizStores';  
  export default defineComponent({
    setup() {
      const router = useRouter();
  
      const goToHome = () => {
        quizState.reset();  
        router.push('/');
      };
  
      return {
        quizState,
        goToHome
      };
    }
  });
  </script>
  
  <style scoped>
  .results-container {
    text-align: center;
    padding: 20px;
  }
  .correct {
    color: green;
    font-weight: bold;
  }
  .incorrect {
    color: red;
    font-weight: bold;
  }
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>