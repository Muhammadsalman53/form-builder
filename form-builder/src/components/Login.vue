<template>
    <div class="container-fluid p-5 d-flex justify-content-center align-item-center">
        <div class="container-fluid card shadow py-lg-4 mx-lg-5">
            <div class="row g-0 d-flex justify-content-center align-items-center">

                <div class="col-md-9 col-lg-6 col-xl-5 d-none d-sm-block p-3">
                    <img src="../assets/images/E-Commerce-PNG-Clipart-Background.png" class="img-fluid" alt="Sample image">
                </div>

                <div class="col-md-9 col-lg-6 col-xl-4 offset-xl-1 px-md-4 py-5">
                    <form>

                        <div class="d-flex flex-row align-items-center justify-start">
                            <p class="fs-1 fw-bold mb-4 me-3">Sign in</p>

                        </div>

                        <div class="form-outline mb-4">
                            <input type="email" id="form3Example3" class="form-control form-control-lg"
                                placeholder="Enter email" v-model="email" name="email" />
                                
                        </div>


                        <div class="form-outline mb-3">
                            <input type="password" id="form3Example4" class="form-control form-control-lg"
                                placeholder="Enter password" v-model="password" name="password" />
                        </div>

                        <div class="d-flex justify-content-between align-items-center">

                            <div class="form-check mb-0">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label class="form-check-label" for="form2Example3">
                                    Remember me
                                </label>
                            </div>
                            <a href="#!" class="reg-link">Forgot password?</a>
                        </div>
                        <p class="text-danger mt-2" v-if="invalidLogin">Incorrect email or password. Please try again.
                        </p>

                        <div class="text-center text-lg-start mt-4 pt-2">

                            <button type="button" class="btn btn-primary btn-lg login-btn" @click="loginUser">Login</button>

                            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                <router-link to="/signup" class="reg-link">Register</router-link>
                            </p>
                            <router-view />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const route = useRouter();
    const email = ref("");
    const password = ref("");
    const invalidLogin = ref(false);

    const loginUser = () => {
      const formData = new FormData();
      formData.append("email", email.value);
      formData.append("password", password.value);

      axios
        .post("https://010a-182-176-157-31.ngrok-free.app/api/login", formData)
        .then((response) => {
          if (response.data) {
            console.log("Login successful. Role:", response.data);

            // Assuming the response contains a "role" property indicating admin or user
            if (response.data === "admin") {
              // Redirect to the admin dashboard
              router.push("/admin/dashboard");
            } else if (response.data === "user") {
              // Redirect to the user dashboard
              router.push("/user/dashboard");
            }
          } else {
            console.log("Login failed:", response.data.message);
            invalidLogin.value = true;
          }
        })
        .catch((err) => {
          invalidLogin.value = true;
          console.log(err);
        });
    };

    return {
      email,
      password,
      invalidLogin,
      loginUser,
    };
  },
};
</script>




<style scoped>
.login-btn {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    background: #D2691E;
    border: none;
}

.login-btn:hover {
    background: #CD853F;
}

.reg-link {
    color: #D2691E;
}

.reg-link:hover {
    color: #CD853F;
}
</style>
