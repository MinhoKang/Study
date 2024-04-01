import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/todoPage/TodoPage";
import ErrorPage from "./pages/ErrorPage";

type Routes = { path: string; component: React.ReactNode }[];

const App = () => {
  const [renderPage, setRenderPage] = useState<React.ReactNode>(null);

  const routes: Routes = [
    {
      path: "/home",
      component: <HomePage />,
    },
    {
      path: "/login",
      component: <LoginPage />,
    },
    {
      path: "/todo",
      component: <TodoPage />,
    },
    {
      path: "404",
      component: <ErrorPage />,
    },
  ];

  useEffect(() => {
    const { pathname } = window.location;
    const route = routes.find((route) => route.path === pathname.toLowerCase());
    if (route) {
      setRenderPage(route.component);
    } else {
      setRenderPage(<ErrorPage />);
    }
  }, []);

  return renderPage;
};

export default App;
