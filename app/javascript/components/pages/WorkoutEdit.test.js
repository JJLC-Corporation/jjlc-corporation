import React from "react";
import { screen, render } from "@testing-library/react";
import WorkoutEdit from "./WorkoutEdit";
import { BrowserRouter } from "react-router-dom";

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
    .finally(() => readWorkout());
};

describe("<WorkoutEdit/>", () => {
  it("WorkoutEdit renders without error", () => {
    render(
      <BrowserRouter>
        <WorkoutNew logged_in={true} updateWorkout={updateWorkout} />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", { name: /Add a Workout/i });

    expect(heading).toBeInTheDocument();
  });
  it("form has input fields", () => {
    render(
      <BrowserRouter>
        <WorkoutNew logged_in={true} createWorkout={createWorkout} />
      </BrowserRouter>
    );

    const textbox = screen.getAllByRole("textbox");

    expect(textbox[0]).toBeEnabled();
  });
});
