<template>
<h1>General Users</h1>
 <div v-for="doctor in doctors" :key="doctor.id"><p>{{doctor.name}}</p><router-link :to="'/others/'+doctor.id"><button-slot>View Details</button-slot></router-link></div>
</template>

<script>
// import axios from 'axios'
export default{
    data(){
        return{
           doctors:''
        }
    },
    methods:{
        totalDoctors(){
            fetch("http://localhost:3000/signupDetailsOther").then((res)=>res.json()).then((res)=>{
                this.doctors=res
                })
        },
    },
    mounted(){
       this.totalDoctors()
    },
    computed:{
        patience(){
            return this.$store.state.patience
        }
    }
}

</script>

<style scoped>
div p{
    border:1px solid rgb(125, 125, 211);;
    display: inline-block;
    width: 10%;
    height: 4vh;
    padding-top: 4px;
    position: relative;
    border-radius: 5px;
    text-align: center;
    background-color: rgb(248, 238, 238);
    color: rgb(125, 125, 211);
}
h3,.h3,.h4{
    display: inline-block;
    border:1px solid rgb(125, 125, 211);
    margin-left: 80%;
    margin-top:-5%;
    position: absolute;
    color:white
}
.h3,.h4{
    margin-top:0% ;
    color: black;
}
.h4{
    margin-left: 88%;
}
h1{
    color:rgb(125, 125, 211);
   
}

</style>
