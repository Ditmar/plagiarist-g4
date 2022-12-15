import Theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LastDocuments from "./components/LastComponent/LastDocuments";
import MenuComponent from "./components/MenuComponent/MenuComponent";
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
      
    </Theme>
  );
}

<Navigation />