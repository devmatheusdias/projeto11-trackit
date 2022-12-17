import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/cadastro" element={<SignUp></SignUp>} />
          <Route path="/habitos" element={<Habits></Habits>} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

export const AppContainer = styled.div`
  width: 375px;
  height: 667px;
  background-color: #FFFFFF;
  margin: 0 auto;
`

