<template>
  <div class="card">
    <!-- form -->
    <form v-if="step === 'form'" @submit.prevent="goToPayment">
      <h3>🧾 Reservation</h3>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" placeholder="Name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" id="date" v-model="date" />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          placeholder="require message"
          v-model="message"
        ></textarea>
      </div>
      <button type="submit" class="button primary">Submit</button>
    </form>
    <!-- payment -->
    <div class="payment" v-else-if="step === 'payment'">
      <h3>💸 Payment</h3>
      <p>
        <strong>{{ name }}</strong> / Reservation Date :
        <strong>{{ date }}</strong>
      </p>
      <p><strong>Required Message :</strong> {{ message }}</p>
      <p>Total Price : <strong>50,000 won</strong></p>
      <button class="button success" @click="completedPayment">Complete</button>
      <button class="button secondary" @click="goBack">Back</button>
    </div>
    <!-- complete -->
    <div class="complete" v-else-if="step === 'complete'">
      <h3>🌐 Complete !</h3>
      <p>{{ name }} , Reservation is Completed : )</p>
      <p>Reserved Date : {{ date }}</p>
      <button class="button primary" @click="resetForm">New Reservation ⇒</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const step = ref("form");
const name = ref("");
const date = ref("");
const message = ref("");
const goToPayment = () => {
  if (!name.value || !date.value) {
    alert("Please Fill in the Blanks ! ");
    return;
  }
  step.value = "payment";
};
const completedPayment = () => {
  step.value = "complete";
};
const goBack = () => {
  step.value = "form";
};
// reset & go form
const resetForm = () => {
  name.value = "";
  date.value = "";
  message.value = "";
  step.value = "form";
};
</script>

<style lang="scss" scoped>
.card {
  margin: 40px auto;
  h3 {
    margin-bottom: 16px;
    color: #333;
  }
  p {
    margin: 10px 0;
    color: #555;
  }
  .button{
    margin-right: 8px;
  }
}
</style>
