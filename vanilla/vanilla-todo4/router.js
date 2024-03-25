import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import Rendering from "./utils/rendering";

const routes = {
  "/home": Home,
  "/login": Login,
  "/todo": Todo,
};
const rendering = new Rendering();
const header = new Header();

export default class Router {
  routeTo(pathName) {
    const PageComponent = routes[pathName.toLowerCase()];
    if (PageComponent) {
      rendering.setHeader(header);
      const page = new PageComponent();
      rendering.setBody(page);
    } else {
      console.error("페이지가 없습니다");
    }
  }
}
