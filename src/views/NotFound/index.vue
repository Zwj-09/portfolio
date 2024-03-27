<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="w-80 h-80" ref="animationRef"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import lottie from "lottie-web";
import animationData from "@/assets/data/hamster.json";
const animationRef = ref(null);
onMounted(() => {
  lottie.loadAnimation({
    animationData,
    loop: true,
    autoplay: true,
    renderer: "svg",
    container: animationRef.value
  });
});
</script>
