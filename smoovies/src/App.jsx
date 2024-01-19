import { Navigation } from "./components/Navigation";
import { MCard } from "./components/MCard";
import { Grid, Typography } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { HomeCarousel } from "./components/HomeCarousel";
import { CardGrid } from "./components/CardGrid";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import {Contact} from './pages/Contact.jsx'
import { FilmClub } from "./pages/FlimClub.jsx";
import { News } from "./pages/News.jsx";
import { Navigation2 } from "./components/Navigation2.jsx";
import {Bored} from './pages/Bored.jsx';
import { EventBrite } from "./components/EventBrite.jsx";
import { About } from "./pages/About.jsx";
function App() {

  return (
    <>
    <Navigation2/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/film-clubs" element={<FilmClub/>}/>
      <Route path="/news" element={<EventBrite/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
