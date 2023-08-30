<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const tableData = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('https://010a-182-176-157-31.ngrok-free.app/api/getdata');
        
        // Extract and parse data from the response
        const extractedData = response.data.map(item => JSON.parse(item.data).data.user);

        // Set the parsed data to the tableData
        tableData.value = extractedData;
        console.log(tableData.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      tableData,
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
