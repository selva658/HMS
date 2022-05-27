<template>
    <div>
        <h1>Personal Details</h1>
    <table>
        <tr>
            <td>Name</td>
            <td>{{name}}</td>
        </tr>

        <tr>
            <td>Email</td>
            <td>{{email}}</td>
        </tr>
        <tr v-if="specilized">
        <td>specilized</td>
        <td>{{specilized}}</td>
        </tr>
        <tr v-else>
            <td>specilized</td>
            <td>Not Mentained</td>
        </tr>
        <tr>
           <td>ID</td>
           <td>{{num}}</td>
        </tr>
    </table>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
      return {
          id:null,
          name:'',
          email:'',
          specilized:'',
          num:''
      }
    },
    methods:{
        getparams(){
            const getid=this.$route.params
            this.id=getid
            axios.get(`http://localhost:3000/signupDetailsNurse/${this.id.id}`).then((res)=>{
                this.name=res.data.name
                this.email=res.data.email
                this.specilized=res.data.specilized
                this.num=res.data.id
            })

        }
    },
    created(){
        this.getparams()
        console.log(this.id.id)
    }

}
</script>

<style scoped>
table{
  border: 1px solid rgb(125, 125, 211);;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
td{
    border: 1px solid rgb(125, 125, 211);
}
</style>