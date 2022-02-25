import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Search from '../Search';

describe("checks on search form", () => {
    
    it('checks form has label for search', () => {
        render(<Search 
            SearchRecipe={()=> {}}
            setSearchedRecipes={()=> {}}
            setNoSearchFound={()=> {}}
        />);
        expect(screen.getByLabelText('Search Recipes')).not.toBeInTheDocument
    })

    it('checks for search input to not be empty before button click', () => {
        render(<Search
            SearchRecipe={()=> {}}
            setSearchedRecipes={()=> {}}
            setNoSearchFound={()=> {}}
        />);
        const searchInput = screen.queryAllByPlaceholderText('search..')
        // fireEvent.change(searchInput, { target: { value: 'test' } })
        // expect(searchInput.value).toBe('test')

        const searchbtn = screen.getByRole('button', { name: 'Search'})
        userEvent.click(searchbtn)
        
    })
    
    // it('fires a submit function on search', () => {
    //     render(<Search/>);
    
    //     const handleClick = jest.fn()
    // })

})

