import {
  About,
  Blog,
  Contact,
  Home,
  Header,
  Portfolio,
  Blockchain,
  Cloud,
  Game,
  TailoredSoftware,
  WebAndMobile,
  MobileApp,
  GarficDesigning,
  DigitalMarketing,
  Industries,
} from "./Pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import "./App.css";




export const App = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route>
          <Route path="blockchain" element={<Blockchain />} />
          <Route path="cloud" element={<Cloud />} />
          <Route path="game" element={<Game />} />
          <Route path="webAndMobile" element={<WebAndMobile />} />
          <Route path="TailoredSoftware" element={<TailoredSoftware />} />
          <Route path="GarficDesigning" element={<GarficDesigning />} />
          <Route path="mobileApp" element={<MobileApp />} />
          <Route path="DigitalMarketing" element={<DigitalMarketing />} />
        </Route>

        <Route path="industries" element={<Industries />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};
