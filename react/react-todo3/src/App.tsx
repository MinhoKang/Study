import { Route, Routes } from "react-router-dom";
import css from "./styles/app.module.css";
import ProtectedRouter from "./routers/ProtectedRouter";
import { ProvideAuth } from "./hooks/useProvideAuth";
import { Container } from "./components";

function App() {
  //TODO: 라우터 수정(로그인 안 된 경우 여기에 그냥 노출, 로그인은 Protected로)
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
