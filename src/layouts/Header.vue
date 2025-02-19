<template>
  <header class="header">
    <h1 class="header__text">
      PASSWORD <br> GENERATOR
    </h1>
    <AuthorBlock/>
  </header>
</template>

<script setup>
import AuthorBlock from "../blocks/AuthorBlock.vue";
</script>

<style lang="scss" scoped>
.header{
  background: #18181B;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
 .header__text{
   color: white;
   font-weight: 500;
   font-size: 40px;
   letter-spacing: 0.15em;
 }
</style>