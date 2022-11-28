import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/globalStyles";
import { defaultTheme } from "./styles/styles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
