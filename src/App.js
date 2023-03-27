import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Notification from "./pages/Notification/Notification.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Games from "./pages/Games/Games.jsx";
import Ads from "./pages/Ads/Ads.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<Admin />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="games">
              <Route index element={<Games />} />
              <Route path=":productId" element={<Single />} />
            </Route>
            <Route path="Ads">
              <Route index element={<Ads />} />
              <Route path=":productId" element={<Single />} />

            </Route>
            <Route path="Notifications">
              <Route index element={<Notification />} />
              <Route path=":productId" element={<Single />} />
\
            </Route>
            <Route path="Single">
              <Route index element={<Single />} />
              <Route path=":productId" element={<Single />} />

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
