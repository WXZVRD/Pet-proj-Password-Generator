<template>
  <button class="copy__password">
    <img src="../assets/img/copy-icon-outline.svg" alt="" class="copy__password-img">
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .copy__password{
    background: #27272A;
    padding: 10px 12px 8px 12px;
    transition: 0.2s ease-in-out;
    border-radius: 4px;

    &:hover{
      background: #A1A1AA;
    }
  }

  .copy__password-img{
    width: 16px;
    height: 16px;
  }
</style>