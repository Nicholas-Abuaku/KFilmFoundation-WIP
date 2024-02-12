import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { lazy, Suspense } from "react";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Navigation2 } from "./components/Navigation2.jsx";
const Contact = lazy(() => import("./pages/Contact"));
const FilmClub = lazy(() => import("./pages/FlimClub"));
const Press = lazy(() => import("./pages/Press"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./Pages/back-end/Dashboard"));
const LatestScreeningPage = lazy(() =>
  import("./Pages/back-end/LatestScreeningPage")
);
import { FilmClubManager } from "./pages/back-end/FilmClubManager.jsx";
import { EditFilmClub } from "./pages/back-end/EditFilmClub.jsx";
function App() {
  return (
    <>
      <Navigation2 />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/film-clubs" element={<FilmClub />} />
          <Route path="/press" element={<Press />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard/edit-latest-screening"
            element={<LatestScreeningPage />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/film-clubs" element={<FilmClubManager />} />
          <Route
            path="/dashboard/film-clubs/edit/:id"
            element={<EditFilmClub />}
          />
          <Route path="/dashboard/film-clubs/new" element={<EditFilmClub />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
