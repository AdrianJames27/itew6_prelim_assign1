import Home from "../views/Home.vue";
import Skills from "../views/Skills.vue";
import Contact from "../views/Contact.vue";

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/skills', component: Skills, name: 'skills' },
    { path: '/contact', component: Contact, name: 'contact' }
];

export default routes;