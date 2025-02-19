<template>
  <transition name="fade-up">
    <div v-if="!isHidden" class="preloader">
      <div class="preloader__content">
        <img src="../assets/img/logotype.png" alt="Logo" class="logotype">
        <h1 class="author__name">WXZVRD</h1>
        <div class="divider"></div>
        <span class="project__name">
          <span class="letter">{{ projectName }}</span>
          <span class="blink">|</span>
        </span>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isHidden = ref(false);

const projectNameTemplate = "Password-Generator".split("");
const projectName = ref('');
let index = 0;

const passwordInterval = setInterval(() => {
  if (index < projectNameTemplate.length) {
    projectName.value += projectNameTemplate[index];
    index++;
  } else {
    clearInterval(passwordInterval);
  }
}, 100);

onMounted(() => {
  setTimeout(() => {
    isHidden.value = true;
  }, 3000);
});
</script>

<style lang="scss" scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.fade-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.preloader {
  position: absolute;
  background: radial-gradient(circle, #2B2B2B 0%, #18181B 100%);
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.preloader__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
}
.divider {
  height: 1px;
  width: 100%;
  background: #FAFAFA;
  margin: 32px 0;
}
.logotype {
  width: 170px;
  height: 100px;
}
.author__name {
  font-weight: 400;
  font-size: 32px;
}
.project__name {
  font-weight: 400;
  font-size: 36px;
}
.letter {
  display: inline-block;
}
.blink{
  animation: blinking 0.6s  infinite;
}

@keyframes blinking {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
