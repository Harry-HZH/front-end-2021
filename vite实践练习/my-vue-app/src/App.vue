<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" @myclick="onmyclick" ref="box" />
  </div>
</template>

<script setup>
import HelloWorld from "comp/HelloWorld.vue";
import { ref,onMounted } from 'vue';
let box = ref(null);
const onmyclick = (count)=>{
  console.log(count);
}
onMounted(()=>{
  box.value.someMethod()//setup执行期还没创建实际的div，所以需要通过在onMounted执行
})
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
