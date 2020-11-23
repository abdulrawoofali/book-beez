import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

export default function BookCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={props.book.image}
					title={props.book.category}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.book.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.book.dsescription}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Read Now
				</Button>
				<Button size="small" color="primary">
					Add to Shelf
				</Button>
			</CardActions>
		</Card>
	);
}
