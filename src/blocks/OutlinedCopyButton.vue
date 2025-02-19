<template>
  <button class="copy__password">
    <img src="../assets/img/copy-icon-white.svg" alt="" class="copy__password-img">
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .copy__password{
    transition: 0.2s ease-in-out;

    &:hover{
      background: #27272A;
    }
  }

  .copy__password-img{
    width: 24px;
    padding: 5px 1px 1px 1px;
    height: 24px;
  }
</style>