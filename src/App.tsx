import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./contexts/CartContext";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/globalStyles";
import { defaultTheme } from "./styles/styles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
