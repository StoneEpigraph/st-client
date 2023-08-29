import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

// 集成ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app = createApp(App)
app.use(ElementPlus)
app.mount("#app");