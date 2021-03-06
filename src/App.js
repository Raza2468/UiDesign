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
  WebAndMobile,
} from "./Pages/index";
import { BrowserRouter, Routes, Route} from "react-router-dom";

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
        </Route>

        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
