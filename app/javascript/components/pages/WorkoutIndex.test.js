import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import WorkoutIndex from './workoutindex'


describe('WorkoutIndex', () => {
    it('renders the WorkoutIndex page without error', () => {
        render(
            <BrowserRouter>
                <WorkoutIndex />
            </BrowserRouter>
        )
        const workoutIndexText = screen.getByText(/All Workouts/i)
        expect(workoutIndexText).toBeInTheDocument()
    })
})