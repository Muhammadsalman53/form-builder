<template>
    <div class="container">
      <h2>HTML Forms</h2>
      <div v-if="formDataArray.length === 0">
        <p>Loading data...</p>
      </div>
      <div v-else>
        <form>
          <div v-for="(formData, index) in formDataArray" :key="index">
            <div v-if="formData.type === 'autocomplete'">
              <label>{{ formData.label }}</label>
              <input :class="formData.className" :type="formData.type" :required="formData.required" :name="formData.name" :style="formData.style"
                :value="formData.value" :access="formData.access"/>
            </div>
            <div v-if="formData.type === 'button'">
              <button :class="formData.className" :name="formData.name" :style="formData.style">
                {{ formData.label }}
              </button>
            </div>
            <div v-else-if="formData.type === 'header'">
              <h1 :class="formData.className">{{ formData.label }}</h1>
            </div>
            <div v-else-if="formData.type === 'radio-group'">
              <label>{{ formData.label }}</label>
              <div v-for="(radioOption, optionIndex) in formData.values" :key="optionIndex">
                <input :class="formData.className" type="radio" :id="radioOption.value" :name="formData.name" :value="radioOption.value"
                  v-model="radioOption.selected" />
                <label :for="radioOption.value">{{ radioOption.label }}</label>
              </div>
            </div>
            <div v-else-if="formData.type === 'select'">
              <label>{{ formData.label }}</label>
              <select :class="formData.className" :name="formData.name" :multiple="formData.multiple"
                v-model="formData.selectedValues">
                <option v-for="(selectOption, optionIndex) in formData.values" :key="optionIndex"
                  :value="selectOption.value">
                  {{ selectOption.label }}
                </option>
              </select>
            </div>
            <div v-else-if="formData.type === 'text'">
            <label>{{ formData.label }}</label>
            <input :class="formData.className" :type="formData.type" :required="formData.required" :name="formData.name" :style="formData.style"
              :value="formData.value" :access="formData.access" />
          </div>
          <div v-else-if="formData.type === 'email'">
            <label>{{ formData.label }}</label>
            <input :class="formData.className" :type="formData.type" :required="formData.required" :name="formData.name" :style="formData.style"
              :value="formData.value" :access="formData.access" />
          </div>
          <div v-else-if="formData.type === 'password'">
            <label>{{ formData.label }}</label>
            <input :class="formData.className" :type="formData.type" :required="formData.required" :name="formData.name" :style="formData.style"
              :value="formData.value" :access="formData.access" />
          </div>
          <div v-else-if="formData.type === 'textarea'">
            <label>{{ formData.label }}</label>
            <textarea :class="formData.className" :required="formData.required" :name="formData.name" :style="formData.style">{{ formData.value }}</textarea>
          </div>
          <div v-else-if="formData.type === 'number'">
            <label>{{ formData.label }}</label>
            <input :class="formData.className" :type="formData.type" :required="formData.required" :name="formData.name" :style="formData.style"
              :value="formData.value" :access="formData.access" />
          </div>
          <div v-else-if="formData.type === 'date'">
            <label>{{ formData.label }}</label>
            <input :class="formData.className" :type="formData.type" :required="formData.required" :name="formData.name" :style="formData.style"
              :value="formData.value" :access="formData.access" />
          </div>
          <div v-else-if="formData.type === 'file-upload'">
            <label>{{ formData.label }}</label>
            <input :class="formData.className" :type="formData.type" :required="formData.required" :name="formData.name" :style="formData.style"
              :value="formData.value" :access="formData.access" />
          </div>
          <div v-else-if="formData.type === 'checkbox'">
            <label>{{ formData.label }}</label>
            <input :class="formData.className" :type="formData.type" :required="formData.required" :name="formData.name" :style="formData.style"
              :value="formData.value" :access="formData.access" v-model="formData.checked" />
          </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formDataArray: [],
      };
    },
    mounted() {
      // Replace "your-auth-token" with your actual authorization token
      const token = localStorage.getItem("token");
  
      fetch(`https://5de9-182-176-157-31.ngrok-free.app/api/display-json/2UepKqHy0NZLGIbr2mWJagU79W56dG8M`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "afsd",
          "Authorization": `Bearer ${token}`,
        }
      })
        .then(response => response.json())
        .then(data => {
          // Check if data.data is a string, parse it to an array, and not empty before updating formDataArray
          if (typeof data.data === 'string') {
            try {
              const parsedData = JSON.parse(data.data);
              if (Array.isArray(parsedData) && parsedData.length > 0) {
                this.formDataArray = parsedData;
              } else {
                console.error('Empty or invalid data received:', parsedData);
              }
            } catch (error) {
              console.error('Error parsing JSON data:', error);
            }
          } else {
            console.error('Invalid data format received:', data.data);
          }
        })
        .catch(error => {
          console.error('Error fetching JSON data:', error);
        });
    },
  };
  </script>
  <style>
  /* Import Bootstrap CSS */
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
  </style>