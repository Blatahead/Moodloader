import { createRouter } from "vue-router"
import { createWebHashHistory } from "vue-router"

import RedirectionPage from "@/views/RedirectionPage.vue";
import AccueilPage from "@/views/AccueilPage.vue";
import TelechargementPage from "@/views/TelechargementPage.vue";

const routes = [
	{ path: '/', name: 'Redirection', component: RedirectionPage },
	{ path: '/accueil', name: 'Accueil', component: AccueilPage },
	{ path: '/telechargement', name: 'Telechargement', component: TelechargementPage }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;