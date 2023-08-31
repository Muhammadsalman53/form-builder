<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="container">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>

      </button>

      <a class="navbar-brand" @click="gotToHome"><img src="../assets/images/form builder.webp"
          style="width: 70px; height: 70px;"></a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">

        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">

          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button"
              data-mdb-toggle="dropdown" aria-expanded="false">

              <!-- <i class="bi bi-person mx-1"></i> Profile -->

              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle img-fluid"
                style="width: 40px" alt="Avatar" />

            </a>

            <!-- Dropdown menu -->

            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

              <li>

                <a class="dropdown-item" href="#">My account</a>

              </li>

              <li>

                <a class="dropdown-item" style="cursor: pointer" @click="logout">Log out</a>

              </li>

            </ul>

          </li>

        </ul>



      </div>

    </div>

  </nav>
</template>
    
    
    
<script>
import { useRouter } from 'vue-router';
export default {
  name: 'Header',
  setup(){
    const route = useRouter();
    function logout() {
      localStorage.removeItem("token");
      route.push("/");
    }
    function gotToHome(){
      route.push("/login")
    }
    return {
      logout,
      gotToHome,
    };
  }
}
</script>

<style>
#navbarTogglerDemo03 {
  justify-content: space-between;
}

div#navbarTogglerDemo03 ul>li:hover>ul {

  display: block;

}
</style>