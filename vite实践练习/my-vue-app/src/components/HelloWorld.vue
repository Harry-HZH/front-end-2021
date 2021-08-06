<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button type="button" @click="state.count++">
      count is: {{ state.count }}
    </button>
    <button @click="myclick(state.count)">btn</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>

    <comp></comp>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Comp from "comp/Comp.vue";
defineProps({
  msg: String,
});

const emit = defineEmits(["myclick"]);
const someMethod = () => {
  console.log("this is someMethod");
};
const myclick = (count) => {
  emit("myclick", { count });
};
defineExpose({
  someMethod,
});
const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
