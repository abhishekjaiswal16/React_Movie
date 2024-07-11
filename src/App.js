import {React, } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import MovieDetails from "./Component/MovieDetails/MovieDetails";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          {/* <Switch> */}
          <Routes>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/"  exact element ={ <Home/> } />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route element={<PageNotFound />} />
            </Routes>
          {/* </Switch> */}
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;