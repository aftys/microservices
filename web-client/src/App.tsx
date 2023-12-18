import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Root from "./navigation/Root";
import { BrowserRouter } from "react-router-dom";

export default function App() {

  return (
    <ThemeProvider >
      <AuthProvider>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
