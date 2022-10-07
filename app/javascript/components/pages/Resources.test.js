import React from 'react'
import { screen, render } from '@testing-library/react'
import Resources from './Resources'

describe("<Resources />", () => {
    it('renders the Resources page without error', () => {
        render( <Resources /> )
        const ResourceText = screen.getByText(/Workout Resources/i)
        expect(ResourceText).toBeInTheDocument()
    })
})