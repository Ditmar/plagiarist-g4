import Theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./context/Navigation";
import Login from "./pages/login";

function App() {
  const items = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/searchgiffs",
      name: "Search Memes",
    },
    {
      to: "/login",
      name: "Login",
    },
  ];

  return (
    <Theme>
      <Navigation />
    </Theme>
  );
}

export default App;
