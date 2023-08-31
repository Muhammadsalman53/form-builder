<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const tableData = ref([]); // Define the tableData ref

    const baseURL = 'https://98e7-182-176-157-31.ngrok-free.app/api/';
    const token = localStorage.getItem('token');

    const instance = axios.create({
      baseURL,
      headers: {
        common: {
          token,
        }
      }
    });

    const fetchData = async () => {
      try {
        const endpoint = 'getdata';
        const response = await instance.get(endpoint);
        tableData.value = response.data; // Update the tableData with the response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      tableData, // Expose tableData to the template
    };
  },
};
</script>

<template>
  <h1 class="text-center fw-bold" style="color: #ae62f8;">Admin Dashboard</h1>
  <div class="container mt-5">
    <div class="table-responsive">
      <table class="table table-striped text-center table-hover shadow table-bordered">
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
          <td> <button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
/* Import Bootstrap CSS */
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
</style>
