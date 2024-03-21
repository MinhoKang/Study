import Home from "./pages/Home";
import Login from "./pages/Login";
import Todo from "./pages/Todo";

const $app = document.querySelector("#app");

const HomePage = Home;
const LoginPage = Login;
const TodoPage = Todo;
// const HomePage = new Home($app);
// const LoginPage = new Login($app);
// const TodoPage = new Todo($app);

export const routes = {
  "/": HomePage,
  "/login": LoginPage,
  "/todo": TodoPage,
};
