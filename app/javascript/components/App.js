import React from "react"
import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import Dashboard from "./pages/Dashboard"
import Resources from "./pages/Resources"
import WorkoutEdit from "./pages/WorkoutEdit"
import WorkoutIndex from "./pages/WorkoutIndex"
import WorkoutNew from "./pages/WorkoutNew"
import WorkoutShow from "./pages/WorkoutShow"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Navigation from "./components/Navigation"
import Sidebar from "./components/Sidebar"
import "./app.css"



const App = (props) => {

  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    readWorkout()
  }, [])

  const readWorkout = () => {
    fetch("/workouts")
    .then((response) => response.json())
    .then((payload) => {
      setWorkouts(payload)
    })
    .catch((error) => console.log(error))    
  }

  const deleteWorkout = (id) => {
    fetch(`/workouts/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((payload) => readWorkout())
    .catch((error) => console.log("delete error:", error))
    .finally(() => readWorkout())
  }
  const createWorkout = (workout) => {
  console.log(workout)
}
  return (
    <BrowserRouter>
    <Header {...props} />
    <Routes>
    <Route exact path ="/dashboard" element={<Dashboard />} />
    <Route exact path="/" element={<Home />} />
    <Route exact path="/workoutindex" element={<WorkoutIndex workouts = { workouts } {...props} />} />
    <Route exact path="/workoutnew" element={<WorkoutNew createWorkout={createWorkout}/>} />
    <Route exact path="/resources" element={<Resources />} />
    <Route exact path="/aboutus"  element={<AboutUs />} />
    <Route exact path="/*" element={<NotFound />} />
    <Route exact path="/workoutedit"  element={<WorkoutEdit workouts = {workouts} {...props} />} />
    <Route exact path="/workoutshow/:id"  element={<WorkoutShow workouts = {workouts} deleteWorkout = { deleteWorkout } {...props} />} />

    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
