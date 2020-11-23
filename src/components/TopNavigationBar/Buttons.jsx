import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1)
		}
	}
}));

export default function Buttons(props) {
	return (
		<>
			<Button onClick={props.action}>{props.name}</Button>
		</>
	);
}
