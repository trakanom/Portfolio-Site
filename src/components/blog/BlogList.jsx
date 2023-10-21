import React from "react";
import posts from "../../data/blogPosts";
import { Link } from "react-router-dom";

const BlogList = () => {
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<h2>
						<Link to={`/blog/${post.id}`}>{post.title}</Link>
					</h2>
					<p>
						{post.date} by {post.author}
					</p>
					<p>{post.content.substring(0, 100)}...</p>
				</div>
			))}
		</div>
	);
};

export default BlogList;
