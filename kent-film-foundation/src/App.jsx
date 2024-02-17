import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { lazy, Suspense } from "react";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Navigation2 } from "./components/Navigation2.jsx";
const Contact = lazy(() => import("./pages/Contact"));
const FilmClub = lazy(() => import("./pages/FlimClub"));
const Press = lazy(() => import("./pages/Press"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./Pages/back-end/Dashboard"));
const AddPressArticle = lazy(() =>
  import("./pages/back-end/AddPressArticle.jsx")
);
const LatestScreeningPage = lazy(() =>
  import("./Pages/back-end/LatestScreeningPage")
);
const FilmClubManager = lazy(() =>
  import("./pages/back-end/FilmClubManager.jsx")
);
import { EditFilmClub } from "./pages/back-end/EditFilmClub.jsx";
const PressArticleManage = lazy(() =>
  import("./pages/back-end/PressArticleManage")
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
          <Route path="/dashboard/press" element={<PressArticleManage />} />
          <Route path="/dashboard/press/new" element={<AddPressArticle />} />
          <Route
            path="/dashboard/press/edit/:id"
            element={<AddPressArticle />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
