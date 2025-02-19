<template>
    <div class="field">
      <div class="password__input">
        <h2 class="password__input-header">PASSWORD</h2>
        <div class="password__input-field">
          <InputTextField :passText="generatedPass" />
          <FilledCopyButton @click="saveDataToClipboard(generatedPass)"/>
          <ButtonFilled @click="generatePassword"/>
        </div>
      </div>
      <Slider id="passLenght" @change-value="handleChangeValue" style="margin: 40px 0"/>
      <Checkbox
          id="checkboxLowerCaseLetter"
          @change-value="handleChangeValue"
          style="margin-bottom: 40px"
          title="Lowercase letters"
      />
      <Checkbox
          id="checkboxUpperCaseLetter"
          @change-value="handleChangeValue"
          style="margin-bottom: 40px"
          title="Uppercase letters"
      />
      <Checkbox
          id="checkboxNumbers"
          @change-value="handleChangeValue"
          style="margin-bottom: 40px"
          title="Numbers"
      />
      <Checkbox
          id="checkboxSpecialSymbols"
          @change-value="handleChangeValue"
          title="Symbols"
      />
  </div>
</template>

<script setup>
import ButtonFilled from "../components/ButtonFilled.vue";
import InputTextField from "../components/InputTextField.vue";
import Slider from "../components/Slider.vue";
import Checkbox from "../components/Checkbox.vue";
import FilledCopyButton from "./FilledCopyButton.vue";
import { LSService } from "../services/LocalStorage.service.js";
import { notify } from "@kyvg/vue3-notification";
import {ref} from "vue";

const emit = defineEmits(['shareNewPassword'])

const passGenOptions = {
  passLenght: 8,
  checkboxLowerCaseLetter: false,
  checkboxUpperCaseLetter: false,
  checkboxSpecialSymbols: false,
  checkboxNumbers: false
}

const generatedPass = ref('')

function generatePassword(){
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialSymbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characterPool = '';

  if (passGenOptions.checkboxLowerCaseLetter) characterPool += lowerCase;
  if (passGenOptions.checkboxUpperCaseLetter) characterPool += upperCase;
  if (passGenOptions.checkboxNumbers) characterPool += numbers;
  if (passGenOptions.checkboxSpecialSymbols) characterPool += specialSymbols;

  if (characterPool === '') return '';
  let password = '';
  for (let i = 0; i < passGenOptions.passLenght; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  LSService.saveData(password)
  generatedPass.value = password

  emit('shareNewPassword', password)
}

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

const handleChangeValue = ({ value, id }) => {
  if (id in passGenOptions) {
    passGenOptions[id] = value;
  }
};
</script>

<style lang="scss" scoped>
.field{
  margin-top: 25px;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #27272A;

  min-width: 350px;
  max-width: 650px;
  width: 100%;
}
.password__input{
  max-width: 652px;
}
.password__input-header{
  color: #A1A1AA;
  font-size: 20px;
  letter-spacing: 0.2em;
  font-weight: 500;

  margin-bottom: 12px;
}
.password__input-field{
  display: flex;
  gap: 10px;
}
</style>