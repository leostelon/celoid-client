import "./App.css";
import "./styles/navbar.css";

import Main from "./screens/Main";
import Profile from "./screens/Profile";
import { Route, Routes } from "react-router-dom";
import Link from "./screens/Link";
const { OdisUtils } = require("@celo/identity");


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Link />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
