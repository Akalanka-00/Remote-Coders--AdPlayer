import { BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./custPages/homePage/Home";
import ProfilePage from "./custPages/profilePage/ProfilePage";
import AdViewPage from "./custPages/adViewPage/AdViewPage";
import GameViewPage from "./custPages/gameViewPage/GameViewPage";
import EditProfile from "./custPages/editProfile/EditProfile";
import PublishAd from "./custPages/PublishAd/publishAd";
function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/profilePage" element={<ProfilePage/>}></Route>
  <Route path="/adViewPage" element={<AdViewPage/>}></Route>
  <Route path="/gameViewPage" element={<GameViewPage/>}></Route>
  <Route path="/EditProfile" element={<EditProfile/>}></Route>
  <Route path="/publishAd" element={<PublishAd/>}></Route>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
