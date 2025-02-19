<template>
  <div class="checkbox__container">
    <input
        v-model="checkboxValue"
        :id="id"
        type="checkbox"
        class="checkbox"
    >
    <label :for="id" class="checkbox__label">{{ title }}</label>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const { title, id } = defineProps({
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['changeValue']);

const checkboxValue = ref(false);

const handleClick = () => emit('changeValue', { value: checkboxValue.value, id});

watch(checkboxValue, handleClick);
</script>

<style lang="scss" scoped>
.checkbox__container {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 24px;
  height: 24px;
  border: 1px solid #F43F5E;
  margin-right: 8px;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:checked {
    background: #F43F5E;
  }

  &:hover{
    background: #27272A;
  }
}
.checkbox__label {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2em;
}
</style>
