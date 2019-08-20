import Welcome from "./components/login/Welcome";
import Login from "./components/login/Login";

export const routes = [
  { path: "/", component: Welcome, name: "Welcome" },
  { path: "/Login", component: Login, name: "Login" },
  { path: "*", redirect: "/" }
];
