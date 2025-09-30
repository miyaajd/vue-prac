<template>
  <div>
    <h2>Login form</h2>
    <form @submit.prevent="login">
      <input type="text" placeholder="Id" v-model="userId"/><br>
      <input type="password" placeholder="Password" v-model="userPw"/>
      <button type="submit">Login</button>
    </form>
    <p>Id : <span>{{ userId }}</span></p>
    <p>Password : <span>{{ userPw }}</span></p>
    <h2>check box</h2>
    <form @submit.prevent="reserve">
        <label>
            <input type="checkbox" v-model="agree">agree
        </label>
        <select v-model="product">
            <option value="select" disabled>please select</option>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
            <option value="grape">grape</option>
        </select>
        <button type="submit">reserve</button>
    </form>
    <p>agree : <span>{{ agree }}</span></p>
    <p>selected product : <span>{{ product }}</span></p>
    <!--  -->
    <h2>radio</h2>
    <label>
        <input type="radio" value="pop" v-model="music">Pop
    </label>
    <label>
        <input type="radio" value="rock" v-model="music">Rock
    </label>
    <label>
        <input type="radio" value="zazz" v-model="music">Zazz
    </label>
    <p>selected music : <span>{{ music }}</span></p>
    <!--  -->
    <h2>checkboxes</h2>
    <label>
        <input type="checkbox" value="pizza" v-model="foods">Pizza
    </label>
    <label>
        <input type="checkbox" value="hamburger" v-model="foods">hamburger
    </label>
    <label>
        <input type="checkbox" value="chicken" v-model="foods">chicken
    </label>
    <p>Selected Foods : <span>{{ foods.join(",") }}</span></p>
    <button @click="showFoods">Order</button>
    <!--  -->
    <h2>reserved date</h2>
    <input type="date" v-model="reserveDate">
    <p>Reserved Date : <span>{{ reserveDate }}</span></p>
    <button @click="confirmDate">Reserve</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userId = ref("")
const userPw = ref("")
const login = ()=>{
    alert(`complete login ! Id :${userId.value} / Pw :${userPw.value}`)
    
}
// checkbox
const agree = ref(false)
const product = ref("select")
const reserve = () =>{
    alert(`product : ${product.value} , agree : ${agree.value}`)
}
// radio
const music = ref("")
// checkboxes
const foods = ref([])
const showFoods = ()=>{
    alert(`Order Foods : ${foods.value}`)
}
// reserved date
const reserveDate = ref("")
const confirmDate = ()=>{
    alert(`Reserved Date : ${reserveDate.value}`)
}
</script>

<style scoped>
input{
    padding: 5px 16px;
    margin: 8px 8px 0 0; 
}
span{
    font-weight: 600;
    color: #555;
}
button{
    padding: 5px 16px;
    margin-left: 8px; 
}
</style>
