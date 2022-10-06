import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import WorkoutShow from "./WorkoutShow";
import mockworkouts from "../mockWorkout";

const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/workoutshow/1"]}>
      <Routes>
        <Route
          path="/workoutshow/:id"
          element={<WorkoutShow workouts = {mockworkouts} />}
        />
      </Routes>
    </MemoryRouter>
  );
};
describe("WorkoutShow", () => {
  test("render a card with a workout name", () => {
    renderComponent();
    expect(screen.getByText(`${mockworkouts.name}`)).toBeInTheDocument();
  });
});
