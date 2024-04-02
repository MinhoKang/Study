import React, { useEffect, useMemo, useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/todoPage/TodoPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";

type Routes = { path: string; component: React.ReactNode }[];

const App = () => {
  const [renderPage, setRenderPage] = useState<React.ReactNode>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const routes: Routes = useMemo(
    () => [
      {
        path: "/home",
        component: <HomePage />,
      },
      {
        path: "/login",
        component: (
          <LoginPage setIsLogin={setIsLogin} setCurrentPath={setCurrentPath} />
        ),
      },
      {
        path: "/todo",
        component: <TodoPage />,
      },
      {
        path: "404",
        component: <ErrorPage />,
      },
    ],
    []
  );

  useEffect(() => {
    const route = routes.find((route) => route.path === "/" + currentPath);
    if (route) {
      window.history.pushState({}, "", currentPath);
      setRenderPage(route.component);
      console.log(isLogin);
      console.log("경로", currentPath);
    } else {
      setRenderPage(<ErrorPage />);
    }
  }, [currentPath, routes, isLogin]);

  return (
    <div>
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setCurrentPath={setCurrentPath}
      />
      {renderPage}
    </div>
  );
};

export default App;
