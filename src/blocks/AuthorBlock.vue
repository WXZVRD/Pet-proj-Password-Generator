<template>
  <div class="author__block">
    <img src="../assets/img/author.jpg" alt="author image" class="author__block-img">
    <div class="author__block-info">
      <span class="author__block-info-name">Nick Persii</span>
      <div class="author__block-nav">
        <a href="https://t.me/s/Tyraellis" class="author__block-nav__item">
          <img src="../assets/img/telegram-icon.svg" alt="" class="author__block-nav__item-img">
          @Tyraellis
        </a>
        <span class="divider"></span>
        <a href="https://github.com/WXZVRD" class="author__block-nav__item">
          <img src="../assets/img/github-icon.svg" alt="" class="author__block-nav__item-img">
          wxzvrd
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .author__block{
    display: flex;
    align-items: center;
  }
  .author__block-img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 14px;
  }
  .author__block-info{

  }
  .author__block-info-name{
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 7.5px;
    display: block;
  }
  .author__block-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .author__block-nav__item{
    color: #A1A1AA;
    font-weight: 400;
    font-size: 12px;
    text-decoration: underline;

    display: flex;
    align-content: center;
  }
  .divider{
    display: block;
    margin: 0 5px;
    width: 1px;
    height: 13px;
    background: #505059;
  }
  .author__block-nav__item-img{
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
</style>