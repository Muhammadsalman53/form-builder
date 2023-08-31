import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../components/AdminLayout.vue";
import UserLayout from "../components/UserLayout.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import UserDashboard from "../views/UserDashboard.vue";
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      redirect: "/login", // Redirect to login page by default
    },
    {
      path: "/login",
      component: Login,
      meta: { requiresGuest: true },
    },
    {
      path: "/signup",
      component: Register,
      meta: { requiresGuest: true },
    },
    {
      path: "/admin",
      component: AdminLayout,
      meta: { role: "admin" },
      children: [
        {
          path: "dashboard",
          component: AdminDashboard,
        },
      ],
    },
    {
      path: "/user",
      component: UserLayout,
      meta: { role: "user" },
      children: [
        {
          path: "dashboard",
          component: UserDashboard,
        },
      ],
    },
  ],
  beforeEach: (to, from, next) => {
    const token = localStorage.getItem("token");

    if (to.meta.requiresAuth && !token) {
      next('/login');
    } else {
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
      next();
    }
  },

});

export default router;
