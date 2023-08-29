<template>
  <div class="col-12" id="cForm">
    <div class="container">
      <div class="build-wrapp form-wrapp-div"></div>
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
</style>
