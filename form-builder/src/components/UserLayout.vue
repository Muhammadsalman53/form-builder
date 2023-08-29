<template>
  <div>
    <header>
      <!-- User Header -->
      User layout header
    </header>
    <router-view />
    <!-- User-specific views will be loaded here -->
    <footer>
      <!-- User Footer -->
      User layout Footer
    </footer>
  </div>
</template>

<script>
export default{
  name: 'UserLayout',
}
</script>
