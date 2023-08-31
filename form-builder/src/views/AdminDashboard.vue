<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    async function fetchData() {
      try {
        const url = "https://dded-182-176-157-31.ngrok-free.app/api/getdata"; // Make sure to include the correct endpoint
        const response = await axios.get(url, {
          headers: {
            // Use the "Authorization" header with the access token

            "Content-Type": "application/json",

            "ngrok-skip-browser-warning": "afsd",
          },
        });

        console.log("Response:", response.data);

        // You can do further processing with the response data here
      } catch (error) {
        console.error("Error:", error);
      } finally {
        // Any cleanup or post-processing goes here
      }
    }

    onMounted(() => {
      fetchData();
    });

    return {
      // tableData, // Expose tableData to the template
    };
  },
};
</script>

<template>
  <h1 class="text-center fw-bold" style="color: #ae62f8">Admin Dashboard</h1>
  <div class="container mt-5">
    <div class="table-responsive">
      <table
        class="table table-striped text-center table-hover shadow table-bordered"
      >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th colspan="3">Actions</th>
        </tr>
        <tr v-for="item in tableData" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>
            <button type="button" class="btn btn-success">Accept</button>
          </td>
          <td><button type="button" class="btn btn-warning">Reject</button></td>
          <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
/* Import Bootstrap CSS */
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
</style>
