<template>
<div class="left">
  <h1>Hospital Management System</h1>
</div>
  <div class="right">
   <router-link to="/login"><button-slot>Login</button-slot></router-link>
   <router-link to="/signup"><button-slot>Signup</button-slot></router-link>  
  </div>
  
</template>

<script>


</script>

<style scoped>
*{
  text-align: center;
}

.left{
    height: 30vh;
    width: 45%;
    display: inline-block;
    color: rgb(125, 125, 211);
    margin-top: 5px;
}
.right{
     height: 30vh;
     margin-left: 33%;
     display: inline-block;
     vertical-align: top;
     margin-top:30px ;
}

</style>