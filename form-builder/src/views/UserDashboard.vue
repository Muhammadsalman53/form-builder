<script setup>
import 'https://code.jquery.com/jquery-3.6.0.min.js'
import 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/jQuery-formBuilder/3.9.10/form-builder.min.js'
import axios from 'axios';

import { onMounted } from 'vue'

onMounted(() => {
  $('.build-wrapp').formBuilder();
})

const requestPublish = async () => {
  const formBuilder = $('.build-wrapp').data('formBuilder');
  console.log(formBuilder);
  if (formBuilder) {
    const formData = formBuilder.actions.getData('json');
    console.log(formData);
    const token = localStorage.getItem("token"); // Assuming "token" is stored in local storage
    console.log(token);

    try {
      const response = await axios.post('https://98e7-182-176-157-31.ngrok-free.app/api/data', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the token in the Authorization header
        }
        
      });

      console.log(response);

      if (response.status === 200) {
        alert('Form data successfully submitted to the API.');
      } else {
        alert('Failed to submit form data to the API.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while submitting form data.');
    }
  }
};
</script>

<template>
  <div class="col-12 mt-5" id="cForm">
    <div class="container">
      <div class="build-wrapp form-wrapp-div"></div>
      <div class="col-lg-4" id="publish-btn">
        <button class="btn btn-success" @click="requestPublish">Publish Form</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#publish-btn{
  margin-top: -31px;
}
#publish-btn button {
    font-size: 14px;
}
</style>
