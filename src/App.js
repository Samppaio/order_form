import React from "react";
import { AmountProvider } from "./context/AmountContext";
import { CustomRoutes } from "./routes";
import { GlobalStyle } from "./styles/globalStyle";
 
function App() {
  return (
    <AmountProvider>
      <GlobalStyle />
      <CustomRoutes />
    </AmountProvider>
  )
};

export default App;