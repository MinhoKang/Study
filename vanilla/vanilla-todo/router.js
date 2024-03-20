const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
};

const routes = {
  "/": "/pages/Home.js",
  "/todo": "/pages/Todo.js",
  "/login": "/pages/Login.js",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("app").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
