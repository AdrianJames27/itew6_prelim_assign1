import Home from "../views/Home.vue";
import Skills from "../views/Skills.vue";
import Contact from "../views/Contact.vue";

const routes = [
    { path: '/itew6_prelim_assign1/', component: Home, name: 'home' },
    { path: '/itew6_prelim_assign1/skills', component: Skills, name: 'skills' },
    { path: '/itew6_prelim_assign1/contact', component: Contact, name: 'contact' }
];

export default routes;