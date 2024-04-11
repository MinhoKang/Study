import { Route, Routes } from "react-router-dom";
import css from "./styles/app.module.css";
import Container from "./components/container/Container";
import ProtectedRouter from "./routers/ProtectedRouter";

function App() {
  //TODO: 라우터 수정(로그인 안 된 경우 여기에 그냥 노출, 로그인은 Protected로)
  return (
    <Container className={css.container}>
      <Routes>
        <Route path="/*" element={<ProtectedRouter />} />
      </Routes>
    </Container>
  );
}

export default App;
