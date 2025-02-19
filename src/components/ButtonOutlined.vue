<template>
  <button class="button">
    {{ title }}
  </button>
</template>

<script setup>
const { title } = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .button{
    color: #F8EF00;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.2em;
    transition: 0.1s ease-in-out;
    padding: 10px 20px;
    border-radius: 7px;

    &:hover{
      background: #27272A;
    }
  }
</style>