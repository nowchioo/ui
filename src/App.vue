<template>
  <em-button color="222" @onClick="demo('s')" :debounceTime="2000" size="2">
    <div>222</div>
  </em-button>
  <EmInput v-model="moudel" @change="demo" style="width: 180px;height: 30px;">
  <div>2</div>
  <template #icon>122</template>
  </EmInput>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import EmInput from './components/input';
let moudel = ref('11')
function demo(value: any) {
  console.log(value, 1)

}


// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
