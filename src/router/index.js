import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/Home.vue';
import Skills from '../components/views/Skills.vue';
import Contact from '../components/views/Contact.vue';

const routes = [
    { path: '/itew6_prelim_assign1/', name: 'home', component: Home },
    { path: '/itew6_prelim_assign1/skills', name: 'skills', component: Skills },
    { path: '/itew6_prelim_assign1/contact', name: 'contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;