import {createWebHistory,createRouter} from "vue-router"
import Navbar from "./components/navBar.vue"
import Login from "./components/logIn.vue"
import Signup from "./components/signUp.vue"
import DoctorPage from "./components/DoctorsPage.vue"
import NursePage from "./components/NursePage.vue"
import OtherPage from "./components/othersPage.vue"
import SingleDoctor from "./components/singleDoctor.vue"
import SingleNurse from "./components/singleNurse.vue"
import SingleOther from "./components/singleOther.vue"


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:Navbar},
        {path:'/login',component:Login},
        {path:'/signup',component:Signup},
        {path:'/doctorpage',component:DoctorPage},
        {path:'/nursepage',component:NursePage},
        {path:'/otherpage',component:OtherPage},
        {path:'/doctor/:id',component:SingleDoctor},
        {path:'/nurse/:id',component:SingleNurse},
        {path:'/others/:id',component:SingleOther}
    ]
})

export default router