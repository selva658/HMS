<template>
<div class="logindiv">
    <h1>Login</h1>
    <form @submit.prevent="loginverification">
        <input type="text" placeholder="Email" v-model="userEmail"/>
        <br>
        <input type="password" placeholder="Password" v-model="userPassword"/>
        <br>
           <select v-model="designation">
            <option></option>
            <option value="doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="other">Other</option>
        </select>
        <br>
        <button-slot>Login</button-slot>
    </form>
    
    <p v-if="userCheck">*Email ID or password mismatching</p>
      <p>Create a<router-link to="/signup"> account?</router-link> </p>
</div>
</template>

<script>
import axios from "axios"

export default{
    data(){
        return {
            userEmail:'',
            userPassword:'',
            designation:'',
            errmsg:false,
            userCheck:false
        }
    },
    methods:{
        loginverification(){
            if(this.userEmail==='' || this.userPassword==='' ||this.designation===''){
            this.userCheck=true
            }
            else{
            if(this.designation==="doctor"){
                   axios.get("http://localhost:3000/signupDetailsDoctor").then((res)=>{res.data.map((e)=>{
                        if(this.userEmail===e.email){
                            this.userCheck=false
                          axios.get(`http://localhost:3000/signupDetailsDoctor/${e.id}`).then((res)=>{
                              if(this.userPassword===res.data.password)
                              {
                                  console.log("welcome")
                                 this.userCheck=false
                                 this.$router.push({path:'/doctorpage' })
                              }
                              else{
                                  console.log("wrong password")
                                  this.userCheck=true
                                 
                              }
                          })
                        }else{
                            this.userCheck=true
                        }
                   })})
            }
            if(this.designation==="Nurse"){
                  axios.get("http://localhost:3000/signupDetailsNurse").then((res)=>{res.data.map((e)=>{
                        if(this.userEmail===e.email){
                            this.userCheck=false
                          axios.get(`http://localhost:3000/signupDetailsNurse/${e.id}`).then((res)=>{
                              if(this.userPassword===res.data.password)
                              {
                                  console.log("welcome")
                                  this.userCheck=false
                                    this.$router.push({path:'/nursepage' })
                              }
                              else{
                                  console.log("wrong password")
                                  this.userCheck=true
                              }
                          })
                        }else{
                            this.userCheck=true
                        }
                   })})
            }
            if(this.designation==="other"){
                  axios.get(" http://localhost:3000/signupDetailsOther").then((res)=>{res.data.map((e)=>{
                        if(this.userEmail===e.email){
                            this.userCheck=false
                          axios.get(`http://localhost:3000/signupDetailsOther/${e.id}`).then((res)=>{
                              if(this.userPassword===res.data.password)
                              {
                                  console.log("welcome")
                                  this.userCheck=false
                                this.$router.push({path:'/otherpage' })
                              }
                              else{
                                  console.log("wrong password")
                                  this.userCheck=true
                              }
                          })
                        }else{
                            this.userCheck=true
                        }
                   })})
            }
            }
        }

    }
}
</script>


<style scoped>

.logindiv{
 border:1px solid rgb(125, 125, 211);
 border-radius: 10px;
 width: 40%;
 height: 45vh;
 margin: auto;
 margin-top: 10%;
 padding: 20px;
 text-align: center;
 padding-top: 10px;
 box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
input,select{
    height: 30px;
    margin-bottom: 10px;
    width: 45%;
    border-radius: 5px;
    border:1px solid rgb(125, 125, 211);
}
select{
    width: 46%;
}
input:focus{
        outline: none;
}
p{
    color: red;
}
h1{
    color:rgb(125, 125, 211)
}
</style>