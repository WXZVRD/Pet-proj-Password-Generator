<template>
  <div class="password__field">
    <span class="password__field-text">{{ savedPasswordText }}</span>
    <OutlinedCopyButton @click="saveDataToClipboard(savedPasswordText)"/>
  </div>
</template>

<script setup>
import OutlinedCopyButton from "../blocks/OutlinedCopyButton.vue";
import {notify} from "@kyvg/vue3-notification";

const { savedPasswordText } = defineProps({
  savedPasswordText: {
    type: String,
    required: true
  }
})

function saveDataToClipboard(data){
  if (!data) return;

  navigator.clipboard.writeText(data)
      .then(() => {
        console.log("Password copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy password: ", error);
      });
  notify({
    title: "Password copied! ✨",
    text: "Copied password: " + data + " 🧙‍♂️",
  });
}
</script>

<style lang="scss" scoped>
  .password__field{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  .password__field-text{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2em;
  }
</style>