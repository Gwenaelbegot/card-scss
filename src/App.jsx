
// the App
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <nav>
        <Header/>
      </nav>
      <main>
        <Card />
        <Outlet />
      </main>
    </>
  );
}

export default App;
