<template>
  <div>
    <h1 class="text-center fw-bold" style="color: #ae62f8">Admin Dashboard</h1>
    <div class="container mt-5">
      <div class="table-responsive">
        <table class="table table-striped text-center table-hover shadow table-bordered">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Users Actions</th>
          </tr>
          <tr v-for="item in userData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td><button @click="DeleteItem(item)" type="button" class="btn btn-danger">Delete</button></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="container mt-5">
      <div class="table-responsive">
        <table class="table table-striped text-center table-hover shadow table-bordered">
          <tr>
            <th>UserID</th>
            <th colspan="2">Forms Actions</th>
          </tr>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{ item.user_id }}</td>
            <td>
              <button @click="acceptItem(item)" type="button" class="btn btn-success">
                Accept
              </button>
            </td>
            <td>
              <button @click="rejectItem(item.id)" type="button" class="btn btn-warning">
                Reject
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const userData = ref([]);
    const tableData = ref([]);

    async function fetchUserData() {
      const token = localStorage.getItem("token");
      try {
        const url = "https://5de9-182-176-157-31.ngrok-free.app/api/getuser";
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "afsd",
            "Authorization": `Bearer ${token}`,
          },
        });
        // const response = await axios.get(url);
        userData.value = response.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    async function fetchData() {
      const token = localStorage.getItem("token");
      try {
        const url1 = "https://5de9-182-176-157-31.ngrok-free.app/api/getdata";
        const response = await axios.get(url1, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "afsd",
            "Authorization": `Bearer ${token}`,
          },
        });

        tableData.value = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function acceptItem(itemId) {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `https://5de9-182-176-157-31.ngrok-free.app/api/share-json/${itemId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "afsd",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const jsonData = response.data; // Assuming the response contains JSON data

    const newWindow = window.open("", "_blank");
    newWindow.document.write(`<pre>${JSON.stringify(jsonData, null, 2)}</pre>`);

  } catch (error) {
    console.error("Error accepting item:", error);
  }
}


    async function rejectItem(itemId) {
      // Implement your delete logic here
      const token = localStorage.getItem("token");
      console.log(itemId);
      axios.delete(`https://5de9-182-176-157-31.ngrok-free.app/api/reject/${itemId}`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "afsd",
          "Authorization": `Bearer ${token}`,
        },
      })
        .then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      console.log("Reject item with ID:", itemId);
    }

    async function DeleteItem(item) {
      // Implement your delete logic here
      const token = localStorage.getItem("token");
      console.log(item.id);
      axios.delete(`https://dded-182-176-157-31.ngrok-free.app/api/delete/${item.id}`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "afsd",
          "Authorization": `Bearer ${token}`,
        },
      })
        .then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      console.log("Delete item with ID:", item.id);
    }
    onMounted(() => {
      fetchUserData();
      fetchData();
    });

    return {
      userData,
      tableData,
      acceptItem,
      rejectItem,
      DeleteItem,
    };
  },
};
</script>

<style>
/* Import Bootstrap CSS */
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
</style>
