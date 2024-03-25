import Home from "./pages/Home";
import Login from "./pages/Login";
import Todo from "./pages/Todo";

const isAccept = localStorage.getItem("isAccept");

// const HomePage = new Home($app);
// const LoginPage = new Login($app);
// const TodoPage = new Todo($app);

export const routes = {
  "/home": Home,
  "/login": Login,
  "/todo": Todo,
};
