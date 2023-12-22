<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item--title">
          Онлайн-сервис <br />
          доставки еды на дом
        </h2>
        <p class="banner-item--subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с
          антисептиком
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.banner {
  margin-bottom: 56px;
}

.banner-item {
  background-image: url(./images/banners/banner-img.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center right;
  padding: 68px;
  border-radius: 10px;
  background-color: #FFF1B8;
}

.banner-item--title {
  color: #302C34;
  font-size: 39px;
  font-weight: 700;
  max-width: 50%;
  margin-top: 0;
  margin-bottom: 15px;
}

.banner-item--subtitle {
  color: #302C34;
  font-size: 24px;
  font-weight: 400;
  max-width: 50%;
  margin: 0;
}
</style>