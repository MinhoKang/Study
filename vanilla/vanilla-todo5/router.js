class Router {
  constructor({ $app, routes, fallback = "/" }) {
    this.$app = $app;
    this.fallback = fallback;

    routes.forEach((route) => {
      this.routes[route.path] = route.page;
    });

    this.initEvent();
  }

  initEvent() {
    document.addEventListener("moveRoutes", this.moveRoutesHandler.bind(this));
  } // hash가 변경되었을 때의 이벤트 init
  moveRoutesHandler(event) {
    const path = event.detail.path;
    history.pushState(event.detail, "", path);

    this.renderPage(path);
  }

  onRouteChangeHandler() {} // hash가 변경되었을 때의 이벤트 핸들러

  hasRoute() {} // 올바른 라우트인지 검증

  getRoute() {} // 해당 라우트 가져오기

  renderPage() {} // 페이지 렌더링

  push() {} // 라우터 push
}
