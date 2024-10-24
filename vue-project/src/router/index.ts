import { createRouter, createWebHistory } from 'vue-router';
import Learn from '../components/Learn.vue';
import Quiz from '../components/Quiz.vue';
import Results from '../components/Results.vue'; // Import Results component

const routes = [
  { path: '/', component: Learn }, // Learn page
  { path: '/quiz', component: Quiz }, // Quiz page
  { 
    path: '/results', 
    component: Results, 
    props: route => ({ results: route.query.results }) // Pass results as props
  } // Results page
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;