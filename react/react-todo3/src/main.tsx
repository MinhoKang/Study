import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProvideAuth } from "./hooks/useProvideAuth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProvideAuth>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProvideAuth>
);
