<template>
  <div>
      <Header />
    <router-view />
    <!-- Admin-specific views will be loaded here -->

      <Footer />
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