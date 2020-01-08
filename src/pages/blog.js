import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		{
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Blog" />
			<div>
				<h1>Blog</h1>
				<ol className={blogStyles.posts}>
					{data.allContentfulBlogPost.edges.map((edge) => (
						<li key={edge.node.title} className={blogStyles.post}>
							<Link to={`/blog/${edge.node.slug}`}>
								<h2>{edge.node.title}</h2>
								<p>{edge.node.publishedDate}</p>
							</Link>
						</li>
					))}
				</ol>
			</div>
		</Layout>
	);

	// //markDown query
	// const data = useStaticQuery(graphql`
	// 	{
	// 		allMarkdownRemark {
	// 			edges {
	// 				node {
	// 					html
	// 					frontmatter {
	// 						title
	// 						date
	// 					}
	// 					fields {
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `);

	// //markdown blog
	// return (
	// 	<Layout>
	// 		<div>
	// 			<h1>Blog</h1>
	// 			<ol className={blogStyles.posts}>
	// 				{data.allMarkdownRemark.edges.map((edge) => (
	// 					<li key={edge.node.frontmatter.title} className={blogStyles.post}>
	// 						<Link to={`/blog/${edge.node.fields.slug}`}>
	// 							<h2>{edge.node.frontmatter.title}</h2>
	// 							<p>{edge.node.frontmatter.date}</p>
	// 						</Link>
	// 					</li>
	// 				))}
	// 			</ol>
	// 		</div>
	// 	</Layout>
	// );
};

export default BlogPage;
