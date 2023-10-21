import React from "react";
import posts from "../../data/blogPosts";
import { useParams } from "react-router-dom";

const BlogPost = () => {
	const { id } = useParams();
	const post = posts.find((p) => p.id === parseInt(id));

	if (!post) return <p>Post not found</p>;

	return (
		<div>
			<h2>{post.title}</h2>
			<p>
				{post.date} by {post.author}
			</p>
			<p>{post.content}</p>
		</div>
	);
};

export default BlogPost;
