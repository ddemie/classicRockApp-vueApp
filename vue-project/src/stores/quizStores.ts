import { reactive } from 'vue';

interface UserAnswer {
  question: string;
  answer: string;
  correct: boolean;
}

export const quizState = reactive({
  userAnswers: [] as UserAnswer[],  
  score: 0,                         
  reset() {                         
    this.userAnswers = [];
    this.score = 0;
  }
});