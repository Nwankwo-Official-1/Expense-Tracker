// default css 
import './assets/style.css'

//inital setup
import { createApp } from 'vue'
import App from './App.vue'

//my setup 
import  Toast  from  "vue-toastification";
import "vue-toastification/dist/index.css";


//inital creating of  app
const  app =  createApp(App);

//added app
app.use(Toast);
app.mount("#app");
