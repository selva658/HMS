<template>
<div class="logindiv">
    <h1>Signup</h1>
    <p v-if="errmsg">Invalid credentials</p>
    <form @submit.prevent="Signupverification">
        <input type="text" placeholder="Name" name="Name" v-model="userName"/>
        <br>
        <input type="email" placeholder="Email" name="Email" v-model="userEmail">
        <br>
        <input type="password" placeholder="Password" name="Password" v-model="userpassword">
        <br>
        <input type="password" placeholder="ConfirmPassword" name="confirmpassword" v-model="confirmpassword"/>
        <br>
        <select v-model="designation">
            <option></option>
            <option value="doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="other">Other</option>
        </select>
        <br>
         <input type="text" placeholder="Specialized In(optional)" v-model="sepcialized">
        <br>
        <input type="checkbox" class="checkbox" name="agree" v-model="agree"><label>I agree to terms and conditions</label>
        <br>
        <button-slot :disabled="!agree" type="submit">SignUp</button-slot>
    </form>
    
    <p>Already have a <router-link to="/login">account?</router-link> </p>
</div>
</template>

<script>
import axios from "axios"
export default{
    data(){
        return {
            userName:'',
            userEmail:'',
            userpassword:'',
            confirmpassword:'',
            agree:false,
            errmsg:false,
            designation:'',
            sepcialized:''
        }
    },
    methods:{
        Signupverification(){
            if(this.userName==="" || this.userEmail==="" || this.userpassword==="" || this.confirmpassword==="" || this.designation===""){
                this.errmsg=true
            }
            else{
            const signupdetails={
              name:this.userName,
              email:this.userEmail,
              password:this.userpassword, 
              designation:this.designation,
              sepcialized:this.sepcialized
            }
           if(this.userpassword===this.confirmpassword && this.designation==='doctor'){
           axios.post("http://localhost:3000/signupDetailsDoctor",signupdetails)
           this.userName=''
           this.userEmail=''
           this.userpassword=''
           this.confirmpassword=''
           this.agree='',
           this.designation=''
           }
           else if(this.userpassword===this.confirmpassword && this.designation==='Nurse'){
           axios.post("http://localhost:3000/signupDetailsNurse",signupdetails)
           this.userName=''
           this.userEmail=''
           this.userpassword=''
           this.confirmpassword=''
           this.agree=''
           this.designation=''
           }
           else if(this.userpassword===this.confirmpassword && this.designation==='other'){
           axios.post(" http://localhost:3000/signupDetailsOther",signupdetails)
           this.userName=''
           this.userEmail=''
           this.userpassword=''
           this.confirmpassword=''
           this.agree=''
           this.designation=''
           }
           else{
               this.errmsg=true
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
 height: 75vh;
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
label{
    margin-left: -2%;
    position: relative;
    margin-top:-5% ;
}
.checkbox{
    width:10%;
    height: 15px;
}
</style>