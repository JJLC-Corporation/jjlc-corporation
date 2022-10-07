import { screen, render } from "@testing-library/react";
import WorkoutEdit from "./WorkoutEdit";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockWorkouts from "../mockWorkout"
import React from 'react'


describe("<WorkoutEdit/>", () => {
  it("WorkoutEdit renders without error", () => {
    render(
      <MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<WorkoutEdit logged_in={true} workouts={currentWorkout} />}
          />
        </Routes>
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { name: /Update Workout/i });

    expect(heading).toBeInTheDocument();
  });
  it("form has input fields", () => {
    render(
      <MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={<WorkoutEdit  logged_in={true} workouts={currentWorkout} />}
          />
        </Routes>
      </MemoryRouter>
    );

    const textbox = screen.getAllByRole("textbox");

    expect(textbox[0]).toBeEnabled();
  });
});
