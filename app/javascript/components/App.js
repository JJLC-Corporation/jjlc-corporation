import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import Resources from "./pages/Resources"
import WorkoutEdit from "./pages/WorkoutEdit"
import WorkoutIndex from "./pages/WorkoutIndex"
import WorkoutNew from "./pages/WorkoutNew"
import WorkoutShow from "./pages/WorkoutShow"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import DropDown from "./components/DropDown"
import Navbar from "./components/Navbar"
import Navigation from "./components/Navigation"
import Sidebar from "./components/Sidebar"



const App = (props) => {

  return (
    <BrowserRouter>
    <Header {...props} />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/workoutindex" element={<WorkoutIndex />} />
    <Route exact path="/workoutnew" element={<WorkoutNew />} />
    <Route exact path="/resources" element={<Resources />} />
    <Route exact path="/aboutus"  element={<AboutUs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
