<template>
    <div class="container signup-container p-4 d-flex justify-content-center align-item-center">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="card text-black shadow px-5">
                <div class="p-md-3">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <form class="mx-1 mx-md-4">
                                <p class="fs-1 fw-bold mb-4 mt-4">Sign up</p>
                                <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example1c" class="form-control"
                                            placeholder="Enter your fullname" name="name" v-model="name" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="email" id="form3Example3c" class="form-control"
                                            placeholder="Enter your valid email" name="email" v-model="email" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4c" class="form-control"
                                            placeholder="Enter your password" name="password" v-model="password" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example4cd" class="form-control"
                                            placeholder="Enter You PhoneNumber" name="phone" v-model="phone" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row justify-content-start">
                                    <p class="small fw-bold">Already have an account?
                                        <router-link to="/">Login</router-link>
                                    </p>
                                    <router-view />
                                </div>

                                <div class="d-flex justify-content-start mt-2 mb-3 mb-lg-4">
                                    <button type="button" class="btn btn-primary signup-btn" @click="signUpUser">Register</button>
                                </div>

                            </form>

                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                            <img src="../assets/images/E-Commerce-Shopping-Transparent-Background.png" class="img-fluid" alt="sign up background">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- <script>
import axios from "axios";
export default {
    data() {
        return {
            name: 'maaz', // Initialize these properties as empty strings
            email: 'Maaz@gmail.com',
            password: 'maaz5467',
            phone: '075769573',
        };
    },

    methods: {
      
        signUpUser() {
            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("email", this.email);
            formData.append("password", this.password);
            formData.append("phone", this.phone);

            console.log(formData);
            axios
                .post("https://a857-182-176-157-31.ngrok-free.app/register", formData)
                .then((response) => {
                    console.log(response.data);
                    // if (response.data.success) {
                    //     console.log("Sign up successful:", response.data);
                    //     // You can add your logic here after successful sign up
                    //     // For example, redirect to the login page
                    //     this.$router.push({ name: "login" });
                    // } else {
                    //     console.log("Sign up failed:", response.data.message);
                    // }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script> -->
<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const name = ref("maaz");
    const email = ref("Maaz@gmail.com");
    const password = ref("maaz5467");
    const phone = ref("075769573");

    const signUpUser = () => {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("email", email.value);
      formData.append("password", password.value);
      formData.append("phone", phone.value);

      // Log the FormData object before sending the request
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      axios
        .post("https://a857-182-176-157-31.ngrok-free.app/register", formData)
        .then((response) => {
          console.log(response.data);
          // if (response.data.success) {
          //     console.log("Sign up successful:", response.data);
          //     // You can add your logic here after successful sign up
          //     // For example, redirect to the login page
          //     router.push({ name: "login" });
          // } else {
          //     console.log("Sign up failed:", response.data.message);
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      name,
      email,
      password,
      phone,
      signUpUser,
    };
  },
};
</script>

<style scoped>
.signup-container{
    height: 100vh;
}
.signup-btn {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
}
</style>