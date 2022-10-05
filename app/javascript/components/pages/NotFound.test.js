import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'

describe('NotFound', () => {
    it('renders the notfound page without error', () => {
        render(<NotFound/>)
        const notFoundText = screen.getByText(/404 NOT FOUND/i)
        expect(notFoundText).toBeInTheDocument()
    })
})