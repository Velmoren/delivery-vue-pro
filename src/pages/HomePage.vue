<template>
  <Banner />
  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header--title">Рестораны</h3>

        <input
          type="text"
          class="products-header--search"
          placeholder="Поиск блюд и ресторанов"
        />
      </div>

      <div class="products-wrapper" id="rests-container">

        <router-link v-for="rest in rests" :key="rest.id" :to="'/rest?id=' + rest.id" class="products-card">
          <div class="products-card__image">
            <img :src="'/images/rests/' + rest.image" :alt="rest.image" />
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description--title">{{ rest.title }}</h4>
              <div class="products-card__description--badge">{{ rest.time }} мин</div>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info--raiting">
                  <img src="/images/icons/star.svg" alt="star" />
                  {{ rest.rating }}
                </div>
                <div class="products-card__description-info--price">
                  От {{ rest.price }} ₽
                </div>
                <div class="products-card__description-info--group">{{ rest.type }}</div>
              </div>
            </div>
          </div>
        </router-link>

      </div>
    </div>
  </section>
</template>

<script setup>
import Banner from "../components/Banner.vue";
import { ref } from "vue";

const rests = ref([
  {
    id: 0,
    title: "Пицца плюс",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "rest-1.jpg",
  },
  {
    id: 1,
    title: "Тануки",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "rest-2.jpg",
  },
  {
    id: 2,
    title: "FoodBand",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "rest-3.jpg",
  },
  {
    id: 3,
    title: "Жадина-пицца",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "rest-4.jpg",
  },
  {
    id: 4,
    title: "Точка еды",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "rest-5.jpg",
  },
  {
    id: 5,
    title: "PizzaBurger",
    time: 50,
    rating: 4.5,
    price: 900,
    type: "Пицца",
    image: "rest-6.jpg",
  },
]);
</script>

<style>
</style>