<template>
    <div>
      <h2>HTML Forms</h2>
      <!-- Render the HTML form elements here based on the JSON data array -->
      <div v-for="(formData, index) in formDataArray" :key="index">
        <form>
          <div v-for="(field, fieldName) in formData" :key="fieldName">
            <label :for="fieldName">{{ field.label }}</label>
            <input :type="field.type" :id="fieldName" :name="fieldName" v-model="field.value" />
            <!-- Debugging: Display the JSON data for this field -->
            <pre>{{ field }}</pre>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FormDisplay",
    props: {
      formDataArray: Array, // Array of JSON data received from the URLs
    },
  };
  </script>
  