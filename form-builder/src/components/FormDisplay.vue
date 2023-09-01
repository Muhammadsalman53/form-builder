<template>
  <div>
    <h2>HTML Forms</h2>
    <!-- Render the HTML form elements here based on the fetched JSON data -->
    {{ formDataArray }}
    <!-- <div v-if="formDataArray.length === 0">
      <p>Loading data...</p>
    </div> -->
    <div>
      <form>
        <div v-for="(formData, index) in formDataArray" :key="index">
          <!-- Your dynamic form rendering code here -->
          <div v-if="formData.type === 'button'">
            <button :class="formData.className" :name="formData.name" :style="formData.style">
              {{ formData.label }}
            </button>
          </div>
          <div v-else-if="formData.type === 'header'">
            <h1>{{ formData.label }}</h1>
          </div>
          <div v-else-if="formData.type === 'radio-group'">
            <label>{{ formData.label }}</label>
            <div v-for="(radioOption, optionIndex) in formData.values" :key="optionIndex">
              <input type="radio" :id="radioOption.value" :name="formData.name" :value="radioOption.value"
                v-model="radioOption.selected" />
              <label :for="radioOption.value">{{ radioOption.label }}</label>
            </div>
          </div>
          <div v-else-if="formData.type === 'select'">
            <label>{{ formData.label }}</label>
            <select :class="formData.className" :name="formData.name" :multiple="formData.multiple"
              v-model="formData.values">
              <option v-for="(selectOption, optionIndex) in formData.values" :key="optionIndex"
                :value="selectOption.value">
                {{ selectOption.label }}
              </option>
            </select>
          </div>
          <!-- You can add more conditions for other form field types here -->
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
    const token = "your-auth-token";

    fetch('https://5de9-182-176-157-31.ngrok-free.app/api/display-json/fmYU6XoZuM6tDFF434NilOeAL4bQTDSF', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "afsd",
        "Authorization": `Bearer ${token}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        // Store the fetched JSON data in formDataArray
        this.formDataArray = data.data;
        console.log(this.formDataArray);
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
  },
};
</script>
