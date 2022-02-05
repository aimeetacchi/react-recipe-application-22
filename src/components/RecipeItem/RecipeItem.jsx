import React from 'react'
import PropTypes from 'prop-types'
// import { addFaveRecipe } from '../../actions/FaveRecipe'
// import { useDispatch } from 'react-redux'

import { 
    Box,
    Modal,
    Fade,
    Button,
    Typography,
    ListItem,
    List,
    Backdrop
} from '@mui/material';

import { GridItem, RecipeName, RecipeCard, AddToFaveBtn } from './styles';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '@media (min-width: 1124px)': {
        width: 1024,
    },
  };

const RecipeItem = ({item}) => {

    // const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <GridItem>
            <RecipeCard>
                <RecipeName>{item.name}</RecipeName>
                {item.serves && (<p>Serves: {item.serves}</p>)}
                {item.prepTime && (<p>Prep Time: {item.prepTime} mins</p>)}
                {item.cookingTime && (<p>Cooking Time: {item.cookingTime} mins</p>)}
                {item.difficulty && (<p>Difficulty: {item.difficulty}</p>)}

                {item.tags && (<p>Tags:<br/>
                    {item.tags.map((tag, key) => (
                        <span key={key}>{tag} </span>
                    ))}
                </p>)}
            </RecipeCard>
            {item.file && item.file.key !== 'public/undefined' && <img src={`https://${item.file.bucket}.s3.amazonaws.com/${item.file.key}`} alt='recipe'/>}
            
            {/* <AddToFaveBtn onClick={() => dispatch(addFaveRecipe(item))}>
                Add to Favourites
            </AddToFaveBtn> */}
            <div>
                <Button onClick={handleOpen}>Open Recipe</Button>
                
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h3" component="h3">
                        {item.name}
                        </Typography>

                        <List>
                        {item.ingredients && item.ingredients.map((ingredient, key) => (
                                <ListItem key={key} primary="Single-line item">
                                    {ingredient}
                                </ListItem>
                            ))}
                        </List>
                        {item.description &&
                            (<Typography variant="body1" id="transition-modal-description" sx={{ mt: 1 }}>
                                {item.description}
                            </Typography>)
                        }

                    </Box>
                    </Fade>
                </Modal>
            </div>
        </GridItem>
    )
}


RecipeItem.defaultProps = {
    item: {}
  };

RecipeItem.propTypes = {
    item: PropTypes.object
}

export default RecipeItem

