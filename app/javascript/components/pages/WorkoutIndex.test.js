import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import WorkoutIndex from './WorkoutIndex'


describe('WorkoutIndex', () => {
    it('renders the WorkoutIndex page without error', () => {
        render(
            <BrowserRouter>
                <WorkoutIndex />
            </BrowserRouter>
        )
        const workoutIndexText = screen.getByText(/Your Workout Plan/i)
        expect(workoutIndexText).toBeInTheDocument()
    })
})