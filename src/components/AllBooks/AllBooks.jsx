import React from "react";
import BookCard from "../Card/BookCard";
const bookData = [
	{
		title: "Power of Now",
		category: "motivation",
		dsescription:
			"The Power of Now: A Guide to Spiritual Enlightenment is a book by Eckhart Tolle. The book is intended to be a guide for day-to-day living and stresses the importance of living in the present moment and transcending thoughts of the past or future",
		image: ""
	},
	{
		title: "Power of Now",
		category: "motivation",
		dsescription:
			"The Power of Now: A Guide to Spiritual Enlightenment is a book by Eckhart Tolle. The book is intended to be a guide for day-to-day living and stresses the importance of living in the present moment and transcending thoughts of the past or future",
		image: ""
	},
	{
		title: "Power of Now",
		image: "",
		category: "motivation",
		dsescription:
			"The Power of Now: A Guide to Spiritual Enlightenment is a book by Eckhart Tolle. The book is intended to be a guide for day-to-day living and stresses the importance of living in the present moment and transcending thoughts of the past or future"
	}
];

export default function AllBooks() {
	return (
		<>
			{bookData.map((book, index) => (
				<BookCard key={index} book={book} />
			))}
		</>
	);
}
