import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { lazy, Suspense } from "react";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Routes, Route, Router } from "react-router-dom";
import { Navigation2 } from "./components/Navigation2.jsx";
const Contact = lazy(() => import("./pages/Contact"));
const FilmClub = lazy(() => import("./pages/FlimClub"));
const Press = lazy(() => import("./pages/Press"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./Pages/back-end/Dashboard"));
const LatestScreeningPage = lazy(() =>
  import("./Pages/back-end/LatestScreeningPage")
);
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
          <Route path="/about" element={<Dashboard />} />
          <Route
            path="/dashboard/edit-latest-screening"
            element={<LatestScreeningPage />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
