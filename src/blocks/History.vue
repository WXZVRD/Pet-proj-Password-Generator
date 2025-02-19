<template>
  <div className="history__field">
    <div style="width: 100%">
      <h2 className="password__history-title">PASSWORD HISTORY</h2>
      <transition-group name="fade" tag="div" className="password__history-container">
        <PasswordCreated
            v-for="(item) in passwordHistory"
            :savedPasswordText="item"
            :key="item"
            class="fade-item"
        />
      </transition-group>
      <p v-if="passwordHistory.length === 0" className="no-history-message">
        No saved passwords yet. Generate some passwords first!
      </p>
    </div>

    <ButtonOutlined title="Clear history" @click="clearHistory"/>
  </div>
</template>

<script setup>
import {ref, watch, onMounted} from "vue";
import ButtonOutlined from "../components/ButtonOutlined.vue";
import PasswordCreated from "../components/PasswordCreated.vue";
import {LSService} from "../services/LocalStorage.service.js";

const props = defineProps({
  newPassword: String,
});

const passwordHistory = ref([]);

watch(() => props.newPassword, (newPass) => {
  if (newPass) {
    passwordHistory.value.unshift(newPass);
    if (passwordHistory.value.length > 5) {
      passwordHistory.value.pop();
    }
  }
});

const clearHistory = () => {
  LSService.removeData();
  passwordHistory.value = [];
};

onMounted(() => {
  passwordHistory.value = LSService.getHistory();
});
</script>

<style lang="scss" scoped>
.no-history-message {
  color: #A1A1AA;
  font-size: 14px;
  font-style: italic;
  margin-top: 20px;
}

.history__field {
  margin-top: 25px;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #27272A;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 400px;
  width: 100%;
}

.password__history-title {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2em;
  margin-bottom: 30px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
