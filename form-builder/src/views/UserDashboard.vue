<template>
  <div class="col-12" id="cForm">
    <div class="container">
      <div class="build-wrapp form-wrapp-div"></div>
      <button @click="showFormJSON">Show Form JSON</button>
    </div>
  </div>
</template>

<script setup>
import 'https://code.jquery.com/jquery-3.6.0.min.js'
import 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/jQuery-formBuilder/3.9.10/form-builder.min.js'

import { onMounted } from 'vue'

onMounted(() => {
  $('.build-wrapp').formBuilder();
})

const showFormJSON = () => {
  const formBuilder = $('.build-wrapp').data('formBuilder');
  if (formBuilder) {
    const formData = formBuilder.actions.getData('json');
    alert(formData);
  }
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 10px 0;
  background-color: #f2f2f2;
}
.form-wrapp-div {
  padding: 20px;
}
div#frmb-1693302214177-cb-wrap .btn-group #frmb-1693302214177-save-action {
    display: none !important;
}
</style>
