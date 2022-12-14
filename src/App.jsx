import Theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import LastDocuments from "./components/LastComponent/LastDocuments";
import MenuComponent from "./components/MenuComponent/MenuComponent";

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
      <MenuComponent />
      <LastDocuments />
    </Theme>
  );
}

export default App;
