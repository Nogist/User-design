import { Routes, Route } from "react-router-dom";
import Menu from './pages/AllProjects/Menu';
import Home from './pages/Home/Home';
import Homes from "./pages/LandingPage/Home";
import NftLoan from "./pages/NftLoan";
import TutorBoost from "./pages/TutorBoost";
import Medicci from './pages/Medicci';
import AwakenedWoman from './pages/AwakenedWoman';
import Baas from './pages/Baas';


function App() {
  return (
    <Routes>
      <Route path= '/home' element= {<Home />} />
      <Route path= '/' element= {<Homes />} />
      <Route path= '/allprojects' element = {<Menu />} />
      <Route path= '/tutorboost' element = {<TutorBoost />} />
      <Route path= '/nftloan' element = {<NftLoan />} />
      <Route path= '/medicci' element = {<Medicci />} />
      <Route path= '/awakenedwoman' element = {<AwakenedWoman />} />
      <Route path= '/baas' element = {<Baas />} />
    </Routes>
  );
}

export default App;
