import Index from "@/views/index.vue"
import {createRouter, createWebHistory} from "vue-router"

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "index",
            component: Index
        }
    ]
})