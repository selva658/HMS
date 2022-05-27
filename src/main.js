import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import router from "./routers"
import ButtonSlot from "./components/buttonSlot.vue"
import InputSlot from "./components/inputSlot.vue"


const store=createStore({
    state(){
        return{
            patience:0
        }
    },
    mutations:{
        increment(state){
            state.patience++
        },
        decrement(state){
            state.patience--
        }
    }
})

const app=createApp(App)

app.use(store)

app.component("button-slot",ButtonSlot)

app.component("input-slot",InputSlot)

app.use(router)

app.mount('#app')
