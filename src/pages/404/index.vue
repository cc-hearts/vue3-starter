<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() {
  router.back()
}
</script>

<template>
  <div class="not-found">
    <div>
      <div>
        <span class="goBack" @click="goBack">go back</span>
        <span>pages not found</span>
      </div>
      <img src="../../assets/images/404.png" />
    </div>
  </div>
</template>

<style scoped>
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
}
.not-found > div {
  margin: auto;
  display: flex;
  text-align: center;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}
.not-found > div > div {
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.not-found img {
  margin: auto;
}
.goBack {
  color: rgb(47 200 149 / 80%);
  margin: 12px 0;
  cursor: pointer;
}
</style>
