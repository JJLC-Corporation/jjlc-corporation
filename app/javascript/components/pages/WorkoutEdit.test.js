import React, {useState} from "react";
import { screen, render } from "@testing-library/react";
import WorkoutEdit from "./WorkoutEdit";
import { BrowserRouter } from "react-router-dom";
import { mockWorkouts } from "../mockWorkout"


const [workouts, setWorkouts] = useState([{mockWorkouts}])

const updateWorkout = (workout, id) => {
  fetch(`/workouts/${id}`, {
    body: JSON.stringify(workout),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((payload) => console.log(payload))
    .catch((error) => console.log("update error:", error))
    .finally(() => console.log(payload));
};

describe("<WorkoutEdit/>", () => {
  it("WorkoutEdit renders without error", () => {
    render(
      <BrowserRouter>
        <WorkoutEdit logged_in={true} updateWorkout={updateWorkout} workouts={workouts}/>
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", { name: /Update Workout/i });

    expect(heading).toBeInTheDocument();
  });
  it("form has input fields", () => {
    render(
      <BrowserRouter>
        <WorkoutEdit logged_in={true} updateWorkout={updateWorkout}  workouts={workouts}/>
      </BrowserRouter>
    );

    const textbox = screen.getAllByRole("textbox");

    expect(textbox[0]).toBeEnabled();
  });
});
