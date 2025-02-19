<template>
  <input :value="passText" placeholder="Here is your password!" type="text" class="text__field" readonly />
</template>

<script setup>
const { passText } = defineProps({
  passText: {
    type: String,
  }
})
</script>

<style lang="scss" scoped>
.text__field{
  max-width: 650px;
  width: 100%;
  background: #27272A;
  padding: 10px;
  color: #A1A1AA;
  border-radius: 4px;
  outline: none;
  border: none;

  &:focus{
    box-shadow: none;
  }
}
</style>
