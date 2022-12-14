


import Theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

import MenuComponent from "./components/MenuComponent/MenuComponent";

import Header from './components/Header/Header'
import LastDocuments from "./components/LastComponent/LastDocuments";

import {RegisterUi} from './components/Register/Register';

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
      <Header/>
      <LastDocuments />
      <RegisterUi />
    </Theme>

  );
}
export default App
