<template>
  <sk.SkButton color="222" @onClick="demo('s')" debounceTime="2000">
    shuj
  </sk.SkButton>
  2
</template>
<script setup lang="ts">
import  sk  from './components/index';

function demo(value: any) {
  console.log(value)

}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
