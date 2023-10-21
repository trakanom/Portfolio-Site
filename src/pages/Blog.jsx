// src/pages/Blog.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const BlogList = React.lazy(() => import("../components/blog/BlogList"));
const BlogPost = React.lazy(() => import("../components/blog/BlogPost"));

const Blog = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<BlogList />} />
				<Route path=":id" element={<BlogPost />} />
			</Routes>
		</Suspense>
	);
};

export default Blog;
