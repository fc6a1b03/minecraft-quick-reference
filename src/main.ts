import App from "@/App.vue"
import naive from "naive-ui"
import {createApp} from "vue"
import router from "@/router"

createApp(App).use(router).use(naive).mount("#app")