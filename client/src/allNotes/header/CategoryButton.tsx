import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CategoryDialog from '../../reusableComponents/category/CategoryDialog'
import { OnCategoryItemSelected, ICategory } from '../../interfaces/category'
import { selectCategoryAction, resetSelectedCategoryAction } from '../../redux/actions/categoryActions'

export default function CategoryButton() {
	const classes = useStyles()
	const dispatch = useDispatch()
	const activeCategory: ICategory = useSelector((state: any) => state.category.activeCategory)
	const [open, setOpen] = React.useState(false)

	useEffect(() => {
		return () => {
			dispatch(resetSelectedCategoryAction())
		}
	}, [])

	const handleClickOpen = () => {
		setOpen(true);
	}

	const onCategoryItemSelected: OnCategoryItemSelected = {
		onSelected: (category: ICategory) => {
			dispatch(selectCategoryAction(category))
			setOpen(false)
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
				{activeCategory.name}
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