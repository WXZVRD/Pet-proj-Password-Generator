<script setup>
import { ref } from "vue";
import Header from "./layouts/Header.vue";
import PagePreloader from "./layouts/PagePreloader.vue";
import PasswordGeneratorField from "./blocks/PasswordGeneratorField.vue";
import History from "./blocks/History.vue";
import {Notifications} from "@kyvg/vue3-notification";

const newPassword = ref("");

const handleNewPassword = (password) => {
  newPassword.value = password;
};
</script>

<template>
  <div>
    <notifications
        position="bottom right"
        width="360"
        ignore-duplicates="true"
        max="5"
    />
    <PagePreloader />
    <div class="wrapper">
      <div class="content">
        <Header />
        <main class="hero">
          <PasswordGeneratorField @shareNewPassword="handleNewPassword" />
          <History :newPassword="newPassword" />
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.content{
  background: #18181B;
  border-radius: 35px;
  padding: 55px 35px;
  max-width: 1280px;
  width: 100%;
  margin: 0 40px;
}
.hero{
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 986px) {
  .hero {
    flex-direction: column;
    align-items: center;
  }
}
</style>
