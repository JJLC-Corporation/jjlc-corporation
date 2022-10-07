import React from 'react'
import { screen, render } from '@testing-library/react'
import WorkoutNew from './WorkoutNew'
import { BrowserRouter } from 'react-router-dom'


describe("<WorkoutNew/>", () => {
    it("WorkoutNew renders without error", () => {
        render(
            <BrowserRouter>
                <WorkoutNew />
            </BrowserRouter>
            )

        const heading = screen.getByRole("heading", {name: /Add a Workout/i})

        expect(heading).toBeInTheDocument()
    })
    it("form has input fields", () => {
        render(
            <BrowserRouter>
                <WorkoutNew />
            </BrowserRouter>        )

        const textbox = screen.getAllByRole("textbox")

        expect(textbox[0]).toBeEnabled()
    })
})