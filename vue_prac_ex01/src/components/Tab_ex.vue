<template>
    <div class="tab_box">
        <h2> Tab ex) 01</h2>
        <!-- btn -->
         <button @click="activeTab = 'home'">Home 🏠</button>
         <button @click="activeTab = 'info'">Info 🌐</button>
         <button @click="activeTab = 'contact'">Contact 📲</button>
         <!-- con -->
          <div v-if="activeTab === 'home'">
            <h3>Home 🏠</h3>
            <p>여기는 메인페이지 입니다.</p>
          </div>
          <div v-if="activeTab === 'info'">
            <h3>Info 🌐</h3>
            <p>여기는 소개페이지 입니다.</p>
          </div>
          <div v-if="activeTab === 'contact'">
            <h3>Contact 📲</h3>
            <p>E-mail : miyayeahhh@naver.com</p>
          </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref("home")
</script>

<style scoped>
.tab_box{
    max-width: 400px;
    background-color: #efefef;
    border: 1px solid #999;
    cursor: pointer;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
}
button{
    margin: 16px 8px;
    padding: 5px 16px;
}
button:hover{
    background-color: #ddd;
}

</style>