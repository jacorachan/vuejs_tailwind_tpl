import Welcome from "./components/Welcome";

export const routes = [
    { path: "/", component: Welcome, name: "Welcome" },
    { path: "*", redirect: "/" }
];
