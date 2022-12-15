import Theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import CardHome from './components/cardhome/CardHome';
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
      <CardHome />
    </Theme>
  );
}

export default App;
