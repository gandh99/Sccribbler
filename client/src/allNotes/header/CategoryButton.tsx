import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CategoryDialog from '../../reusableComponents/category/CategoryDialog'
import { OnCategoryItemSelected, Category } from '../../reusableComponents/category/Interface'
import { selectCategoryAction } from '../../redux/actions/categoryActions'

export default function CategoryButton() {
	const classes = useStyles()
	const dispatch = useDispatch()
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	}

	const onCategoryItemSelected: OnCategoryItemSelected = {
		onSelected: (category: Category) => {
            dispatch(selectCategoryAction(category))
        }
	}

	return (
		<div className={classes.root}>
			<Button
				onClick={handleClickOpen}
				className={classes.categoryButton}
				endIcon={<ExpandMoreIcon />}
				variant="contained"
				color="secondary">
				All Notes
      		</Button>
			<CategoryDialog open={open} setOpen={setOpen} onCategoryItemSelected={onCategoryItemSelected} />
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
	},
	categoryButton: {
		color: theme.palette.primary.contrastText
	},
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
}))