<template>
  <div>
    <Header />
    <router-view />
    <!-- User-specific views will be loaded here -->
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default{
  name: 'UserLayout',
  components: {
    Header,
    Footer
  }
}
</script>
