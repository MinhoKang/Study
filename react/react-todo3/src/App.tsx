import { Route, Routes } from "react-router-dom";
import css from "./styles/app.module.css";
import Container from "./components/container/Container";
import { ProvideAuth } from "./hooks/useProvideAuth";
import ProtectedRouter from "./routers/ProtectedRouter";

function App() {
  return (
    <Container className={css.container}>
      <ProvideAuth>
        <Routes>
          <Route path="/*" element={<ProtectedRouter />} />
        </Routes>
      </ProvideAuth>
    </Container>
  );
}

export default App;
