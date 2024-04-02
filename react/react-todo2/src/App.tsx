import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #858288;
`;
