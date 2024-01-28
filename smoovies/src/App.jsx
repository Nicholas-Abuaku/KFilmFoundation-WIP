

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import {Contact} from './pages/Contact.jsx'
import { FilmClub } from "./pages/FlimClub.jsx";
import { Navigation2 } from "./components/Navigation2.jsx";
import { About } from "./pages/About.jsx";
import { Press } from "./pages/Press.jsx";
import { EditLatestScreening } from './pages/back-end/EditLatestScreening.jsx';
function App() {

  return (
    <>
    <Navigation2/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/film-clubs" element={<FilmClub/>}/>
      <Route path="/press" element={<Press/>}/>
      <Route path="/about" element={<EditLatestScreening/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
