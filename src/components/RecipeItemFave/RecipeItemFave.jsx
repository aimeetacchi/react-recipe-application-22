import React from 'react'
import PropTypes from 'prop-types'
import { removeFaveRecipe } from '../../actions/FaveRecipe'
import { useDispatch } from 'react-redux'

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

import { GridItem, RecipeName, RecipeCardFave } from './styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1024,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const RecipeItemFave = (props) => {

    const dispatch = useDispatch();
    const {item } = props;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <GridItem>
            <RecipeCardFave>
                <span className="removeFave" onClick={() =>  dispatch(removeFaveRecipe(item.id))}>X</span>
                <RecipeName>{item.name}</RecipeName>
                <p>Serves: {item.serves}</p>
                <p>Prep Time: {item.prepTime} mins<br/>
                Cooking Time: {item.cookingTime} mins</p>
                <p>Difficulty: {item.difficulty}</p>

                <p>Tags:<br/>
                    {item.tags.map((tag, key) => (
                        <span key={key}>{tag} </span>
                    ))}
                </p>
            </RecipeCardFave>
            {item.file.key !== 'public/undefined' && <img src={`https://${item.file.bucket}.s3.amazonaws.com/${item.file.key}`} alt='recipe'/>}

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


RecipeItemFave.defaultProps = {
    item: {}
  };

RecipeItemFave.propTypes = {
    item: PropTypes.object
}

export default RecipeItemFave

