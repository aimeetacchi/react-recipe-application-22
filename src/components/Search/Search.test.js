import {cleanup, render, fireEvent, waitFor, RenderResult, screen} from '@testing-library/react'

import Search from './Search';

describe("checks on search form", () => {
    it('checks form has label for search', () => {
        render(<Search/>);
        expect(screen.getByLabelText('Search Recipes'))
    })

    it('checks for search button click', () => {
        render(<Search/>);
        const searchbtn = screen.getByRole('button', { name: 'Search'})
        fireEvent.click(searchbtn)
    })
    
    // it('fires a submit function on search', () => {
    //     render(<Search/>);
    
    //     const handleClick = jest.fn()
    // })

})

