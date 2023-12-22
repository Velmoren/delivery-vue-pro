<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo logo">
          <img src="/images/logo.png" alt="logo" />
        </router-link>
        <div class="header-controls">
          <button class="btn btn-primary">
            <img src="/images/icons/user.png" alt="user" />
            Войти
          </button>
          <button class="btn btn-outline" id="cart-button" @click="openModal()">
            <img src="/images/icons/shopping-cart.png" alt="user" />
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['openModal'])
const openModal = () => emit('openModal')
</script>

<style>
.header {
  display: flex;
  align-items: center;
  min-height: 124px;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
</style>