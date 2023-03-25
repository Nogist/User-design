import { Routes, Route } from "react-router-dom";
import Menu from './pages/AllProjects/Menu';
import Homes from "./pages/LandingPage/Home";
import NftLoan from "./pages/NftLoan";
import TutorBoost from "./pages/TutorBoost";
import Medicci from './pages/Medicci';
import Innov8IQ from './pages/Innov8IQ';
import Codeviator from './pages/Codeviator';
import AwakenedWoman from './pages/AwakenedWoman';
import Baas from './pages/Baas';
import ComingSoon from "./pages/ComingSoon";


function App() {
  return (
    <Routes>
      <Route path= '/' element= {<Homes />} />
      <Route path= '/allprojects' element = {<Menu />} />
      <Route path= '/tutorboost' element = {<TutorBoost />} />
      <Route path= '/nftloan' element = {<NftLoan />} />
      <Route path= '/medicci' element = {<Medicci />} />
      <Route path= '/innov8iq' element = {<Innov8IQ />} />
      <Route path= '/codeviator' element = {<Codeviator />} />
      <Route path= '/404' element = {<ComingSoon />} />
      <Route path= '/awakenedwoman' element = {<AwakenedWoman />} />
      <Route path= '/baas' element = {<Baas />} />
    </Routes>
  );
}

export default App;
