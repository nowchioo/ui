<template>
  <em-button color="222" @onClick="demo('s')" :throttleTime="2000" size="2">
    <div>222</div>
  </em-button>
  <EmInput v-model="moudel" @change="demo" type="password" style="width: 180px;height: 30px;" maxlength="10" showPassword>

    <!-- <template #prefix><span class="iconfont icon-peoplelist"></span></template>
    <template #suffix><span class="iconfont icon-search"></span></template> -->
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
