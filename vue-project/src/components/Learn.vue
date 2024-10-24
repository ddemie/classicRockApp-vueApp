<template>
  <div class="learn-container">
    <h1>Learn About Classic Rock</h1>
    <div v-for="(q, index) in questions" :key="index" class="question-info">
      <h2>Question {{ index + 1 }}</h2>
      <p>{{ q.explanation }}</p>
    </div>
    <button @click="startQuiz">Start the Quiz</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    const questions = [
      {
        question: "Which band released the album 'Dark Side of the Moon'?",
        explanation: "Pink Floyd released their 'Dark Side of the Moon' album in 1973, becoming one of the best-selling albums of all time."
      },
      {
        question: "Who is the lead singer of Led Zeppelin?",
        explanation: "Robert Plant was the vocalist of Led Zeppelin, a key figure in rock history."
      },
      {
        question: "Which song is by Queen?",
        explanation: "'Bohemian Rhapsody' is a famous song by Queen, released in 1975 with operatic influences."
      }
    ];

    const startQuiz = () => {
      router.push('/quiz'); // Navigate to Quiz page
    };

    return {
      questions,
      startQuiz
    };
  }
});
</script>

<style scoped>
.learn-container {
  text-align: center;
  padding: 20px;
}

.question-info {
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
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