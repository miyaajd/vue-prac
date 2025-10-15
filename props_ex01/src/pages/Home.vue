<template>
  <div class="wrap">
    <!-- product card -->
    <h3>Product Card</h3>
    <!-- child component -->
    <div class="card_wrap">
      <Product_card name="Notebook" :price="1500000" />
      <Product_card name="iPhone" :price="1780000" />
      <Product_card name="iPad" :price="1150000" />
    </div>
    <!-- info card -->
    <h3>Info card</h3>
    <div class="card_wrap">
      <Info_card name="Dongmi Jin" age="28" major="Fine Art" />
      <Info_card name="Subin Son" age="26" major="Fine Art" />
      <Info_card name="Ragyeom Lee" age="27" major="Fine Art" />
    </div>
    <!-- button -->
    <h3>Button</h3>
    <div class="btn_wrap">
      <Button label="Click" color="pink" />
      <Button label="Login" />
      <Button label="Join" color="#4caf50" />
    </div>
    <!-- ProductImgCard -->
    <h3>Product-Img-Card</h3>
    <div class="div-wrap">
      <ProductCardImg
        img="/images/img-1.png"
        name="airpod"
        dscr="'Wireless freedom with crystal-clear sound'"
      />
      <ProductCardImg
        img="/images/img-2.png"
        name="airpod"
        dscr="'Wireless freedom with crystal-clear sound'"
      />
      <ProductCardImg
        img="/images/img-3.png"
        name="airpod"
        dscr="'Wireless freedom with crystal-clear sound'"
      />
      <ProductCardImg
        img="/images/img-4.png"
        name="airpod"
        dscr="'Wireless freedom with crystal-clear sound'"
      />
    </div>
    <!-- banner -->
    <h3>Banner</h3>
    <div class="banner-wrap">
      <Banner title="banner" bg="/images/business01.png" />
      <Banner title="banner" bg="/images/business02.png" />
      <Banner title="banner" bg="/images/business03.png" />
      <Banner title="banner" bg="/images/business04.png" />
    </div>
    <!-- Product List -->
    <h3>Product-List</h3>
    <div class="div-wrap">
      <ProductList :products="items" />
    </div>
    <!-- Emit -->
    <h3>Emit</h3>
    <div class="div-wrap">
      <ProductEmit
        v-for="item in items1"
        :key="item.id"
        :image="item.img"
        :alt="item.name"
        :name="item.name"
        :price="item.price"
        @selected="handleSelected"
      />
    </div>
    <p class="selected">
      Selected Product : <span class="sel">{{ selectedProduct.name }}</span> | Price :
      <span class="sel">{{ selectedProduct.price }}</span>
    </p>
  </div>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import Button from "@/components/Button.vue";
import Info_card from "@/components/Info_card.vue";
import Product_card from "@/components/Product_card.vue";
import ProductCardImg from "@/components/ProductCardImg.vue";
import ProductEmit from "@/components/ProductEmit.vue";
import ProductList from "@/components/ProductList.vue";
import { ref } from "vue";
const items = [
  {
    id: 1,
    name: "노트북",
    price: 1500000,
    img: "/images/img-1.png",
  },
  {
    id: 2,
    name: "헤드폰",
    price: 200000,
    img: "/images/img-2.png",
  },
  {
    id: 3,
    name: "스마트폰",
    price: 1000000,
    img: "/images/img-3.png",
  },
  {
    id: 3,
    name: "스마트폰",
    price: 1000000,
    img: "/images/img-4.png",
  },
];
// emit
// const emit = defineEmits(["image", "name", "price"]);
const items1 = [
  { id: 4, name: "노트북", price: 1500000, img: "/images/img-1.png" },
  { id: 5, name: "헤드폰", price: 200000, img: "/images/img-2.png" },
  { id: 6, name: "스마트폰", price: 1000000, img: "/images/img-3.png" },
];
// handle selected
const selectedProduct = ref("");
const handleSelected = (product) => {
  // console.log(name);
  selectedProduct.value = product;
};
</script>

<style scoped>
.card_wrap {
  padding: 30px 0;
  max-width: 1000px;
  display: flex;
}
.btn_wrap {
  padding: 30px 0;
}
.div-wrap {
  display: flex;
  padding: 30px 0;
  gap: 16px;
  max-width: 1000px;
}
.banner-wrap {
  padding: 30px 0;
  max-width: 1200px;
}
.selected {
  background-color: #5a9ffa;
  padding: 5px 10px;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
}
.sel {
  color: #fff;
  font-weight: 400;
}
</style>
