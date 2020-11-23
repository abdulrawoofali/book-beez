import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import BookCard from "../Card/BookCard";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		flexWrap: "nowrap",
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: "translateZ(0)"
	},
	title: {
		color: theme.palette.primary.light
	},
	titleBar: {
		background:
			"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
	}
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const bookData = [
	{
		title: "Power of Now",
		category: "motivation",
		dsescription:
			"The Power of Now: A Guide to Spiritual Enlightenment is a book by Eckhart Tolle. The book is intended to be a guide for day-to-day living and stresses the importance of living in the present moment and transcending thoughts of the past or future"
	},
	{
		title: "5Am club",
		category: "motivation",
		dsescription:
			"Legendary leadership and elite performance expert Robin Sharma introduced The 5am Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity."
	},
	{
		title: "Power of Now",
		category: "motivation",
		dsescription:
			"The Power of Now: A Guide to Spiritual Enlightenment is a book by Eckhart Tolle. The book is intended to be a guide for day-to-day living and stresses the importance of living in the present moment and transcending thoughts of the past or future"
	},
	{
		title: "Power of Now",
		category: "motivation",
		dsescription:
			"The Power of Now: A Guide to Spiritual Enlightenment is a book by Eckhart Tolle. The book is intended to be a guide for day-to-day living and stresses the importance of living in the present moment and transcending thoughts of the past or future"
	}
];
export default function BooksTrendingGalary() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={2.5}>
				{bookData.map((book, index) => (
					<BookCard key={index} book={book} />
				))}
			</GridList>
		</div>
	);
}
