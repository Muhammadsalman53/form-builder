import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../components/AdminLayout.vue";
import UserLayout from "../components/UserLayout.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import UserDashboard from "../views/UserDashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    // {
    //   path: "/",
    //   redirect: "/login", // Redirect to login page by default
    // },
    // {
    //   path: "/login",
    //   component: LoginPage, // Your login component
    //   meta: { requiresGuest: true }, // Only accessible to unauthenticated users
    // },
    {
      path: "/admin",
      component: AdminLayout,
      // meta: { role: "admin" }, // Set the default role for admin
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
      // meta: { role: "user" }, // Set the default role for user
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
//     to.matched.some((record) => record.meta.requiresGuest) &&
//     userIsAuthenticated
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
