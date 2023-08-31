<script setup>
import 'https://code.jquery.com/jquery-3.6.0.min.js'
import 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/jQuery-formBuilder/3.9.10/form-builder.min.js'
import axios from 'axios';

import { onMounted } from 'vue'

onMounted(() => {
  $('.build-wrapp').formBuilder();
})

const showFormJSON = async () => {
  const formBuilder = $('.build-wrapp').data('formBuilder');
  if (formBuilder) {
    const formData = formBuilder.actions.getData('json');
    
    try {
      const response = await axios.post('https://98e7-182-176-157-31.ngrok-free.app/api/data', formData, {
        headers: {
          'Content-Type': 'application/json'
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
  <div class="col-12" id="cForm">
    <div class="container">
      <div class="build-wrapp form-wrapp-div"></div>
      <button @click="showFormJSON">Show Form JSON</button>
    </div>
  </div>
</template>
