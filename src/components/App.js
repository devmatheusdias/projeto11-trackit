import styled from "styled-components";
import React, {useContext, useState} from "react";

import PrivateRoutes from "../routes/private.routes";
import PublicRoutes from "../routes/public.routes";
import {AuthContext} from "../contexts/AuthContext";

function App() {

  const [token, setToken] = useState("");

  const {auth} = useContext(AuthContext)
  return auth ? <PrivateRoutes token={token}></PrivateRoutes> : <PublicRoutes setToken={setToken}></PublicRoutes>
  
}

export const AppContainer = styled.div`
  width: 375px;
  height: 667px;
  background-color: #FFFFFF;
  margin: 0 auto;
`

export default App;
