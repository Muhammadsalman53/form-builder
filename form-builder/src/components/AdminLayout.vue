<template>
  <div>
    <header>
      <!-- Admin Header -->
      <Header />
    </header>
    <router-view />
    <!-- Admin-specific views will be loaded here -->
    <footer>
      <!-- Admin Footer -->
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default{
  name: 'AdminLayout',
  components: {
    Header,
    Footer
  }
}
</script>