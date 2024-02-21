import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { lazy, Suspense, useState } from "react";
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

const EditFilmClub = lazy(() => import("./pages/back-end/EditFilmClub.jsx"));
import { PrivateRoute } from "./components/back-end/PrivateRoute.jsx";
const LoginPage = lazy(() => import("./pages/back-end/LoginPage.jsx"));
const PressArticleManage = lazy(() =>
  import("./pages/back-end/PressArticleManage")
);
import { ManageLoginContext } from "./Contexts/ManageLoginContext.jsx";
function App() {
  const loggedIn = window.sessionStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);
  console.log("Login status: " + loggedIn);
  return (
    <>
      <Navigation2 />
      <ManageLoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Suspense fallback={<h1>Loading Page...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/film-clubs" element={<FilmClub />} />
            <Route path="/press" element={<Press />} />
            <Route path="/about" element={<About />} />
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/edit-latest-screening"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <LatestScreeningPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/film-clubs"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <FilmClubManager />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/film-clubs/edit/:id"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <EditFilmClub />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/film-clubs/new"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <EditFilmClub />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/press"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <PressArticleManage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/press/new"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <AddPressArticle />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/press/edit/:id"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <AddPressArticle />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </ManageLoginContext.Provider>
      <Footer />
    </>
  );
}

export default App;
