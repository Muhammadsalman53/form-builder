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
                                            placeholder="Enter your fullname" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="email" id="form3Example3c" class="form-control"
                                            placeholder="Enter your valid email" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4c" class="form-control"
                                            placeholder="Enter your password" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4cd" class="form-control"
                                            placeholder="Enter password again" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row justify-content-start">
                                    <p class="small fw-bold">Already have an account?
                                        <router-link to="/">Login</router-link>
                                    </p>
                                    <router-view />
                                </div>

                                <div class="d-flex justify-content-start mt-2 mb-3 mb-lg-4">
                                    <button type="button" class="btn btn-primary signup-btn">Register</button>
                                </div>

                            </form>

                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                            <img src="../assets/signup-bg.png" class="img-fluid" alt="sign up background">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.signup-container{
    height: 100vh;
}
.signup-btn {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
}
</style>