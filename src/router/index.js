import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import BoxChatIndex from "../components/BoxChat/BoxChatIndex.vue";

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/messages/:id",
        name: "messages",
        component: BoxChatIndex,
    },
    {
        path: '/:pathMatch(.*)*',
        name: "dashboard",
        component: Dashboard
    }
];

const router = createRouter({
    history: createWebHistory('/hey-love'),
    routes,
});

export default router;