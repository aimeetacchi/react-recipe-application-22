import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import Search from './Search';

it('checks form has label for search', () => {
    render(<Search/>);
    expect(screen.getByLabelText('Search Recipes'))
})