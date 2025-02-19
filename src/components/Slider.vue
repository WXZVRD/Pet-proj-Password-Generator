<template>
  <div class="slider__container">
    <input
        ref="slider"
        type="range"
        :id="id"
        class="slider"
        min="6"
        max="28"
        value="8"
        @input="updateSliderValuePosition"
        @mouseover="showSliderValue"
        @mouseout="hideSliderValue"
    />
    <div ref="sliderValue" class="slider-value" id="sliderValue">8</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['changeValue'])

const { id } = defineProps({
  id: {
    type: String,
    required: true
  }
})

const slider = ref(null);
const sliderValue = ref(null);
let hideTimeout = null;

const updateSliderValuePosition = () => {
  const sliderWidth = slider.value.offsetWidth;
  const valuePosition = (slider.value.value - slider.value.min) / (slider.value.max - slider.value.min) * sliderWidth;
  sliderValue.value.style.left = `calc(${valuePosition}px)`;
  sliderValue.value.textContent = slider.value.value;

  emit('changeValue', {value: slider.value.value, id})
};

const hideSliderValue = () => {
  hideTimeout = setTimeout(() => {
    sliderValue.value.style.opacity = 0;
  }, 500);
};

const showSliderValue = () => {
  clearTimeout(hideTimeout);
  sliderValue.value.style.opacity = 1;
};

onMounted(() => {
  updateSliderValuePosition();
});
</script>

<style lang="scss" scoped>
.slider__container{
  position: relative;
}
.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 1px;
  background: #4B4B4B;
  outline: none;
  transition: background 0.3s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 21px;
    height: 21px;
    border-radius: 0;
    background: #F43F5E;
    cursor: pointer;
    transition: background 0.3s;
  }
}
.slider-value {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 400;
  color: white;
  background: black;
  padding: 3px 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s ease-in-out;
}
</style>