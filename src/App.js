import "./App.css";
import "./styles/navbar.css";

import Main from "./screens/Main";
import Profile from "./screens/Profile";
import { Route, Routes } from "react-router-dom";
import Link from "./screens/Link";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/link" element={<Link />} />
      </Routes>
    </div>
  );
}

export default App;
