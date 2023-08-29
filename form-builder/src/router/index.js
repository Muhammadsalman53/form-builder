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
      component: Login
    },
    {
      path: "/login",
      component: Login, // Your login component
       meta: { requiresGuest: true }, // Only accessible to unauthenticated users
    },
    {
      path: "/signup",
      component: Register, // Your login component
       meta: { requiresGuest: true }, // Only accessible to unauthenticated users
    },
    {
      path: "/admin",
      component: AdminLayout,
       meta: { role: "admin" }, // Set the default role for admin
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
       meta: { role: "user" }, // Set the default role for user
      children: [
        {
          path: "dashboard",
          component: UserDashboard,
        },
      ],
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (
//     to.matched.some((record) => record.meta.requiresGuest)
//   ) {
//     next({ path: "/" }); // Redirect authenticated users from login page
//   } else if (to.matched.some((record) => record.meta.role)) {
//     // Check if user role matches the route's required role
//     if (userRole === to.meta.role) {
//       next(); // Allow access
//     } else {
//       next({ path: "/" }); // Redirect unauthorized users
//     }
//   } else {
//     next(); // Allow access to other routes
//   }
// });
export default router;

// After Login
// if (userRole === "admin") {
//   router.push({ path: "/admin/dashboard" });
// } else if (userRole === "user") {
//   router.push({ path: "/user/dashboard" });
// }
