<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button{
    height: 5vh;
    width: 100px;
    border: 1px solid rgb(179, 219, 219);
    cursor: pointer;
    border-radius: 5px;
    color:rgb(125, 125, 211);
    margin-left: 10px;
}
</style>