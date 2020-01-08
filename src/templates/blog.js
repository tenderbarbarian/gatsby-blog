import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
	query MyQuery($slug: String) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				json
			}
		}
	}
`;

const Blog = (props) => {
	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				//props.data.contentfulBlogPost.body.json.content => []
				//[]=>{}=> node.data.target.fields.file.en-US.url
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return <img alt={alt} src={url} />;
			}
		}
	};

	return (
		<Layout>
			<Head title={props.data.contentfulBlogPost.title} />
			<h1>{props.data.contentfulBlogPost.title}</h1>
			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
		</Layout>
	);
};

// Markdown Blog
// export const query = graphql`
// 	query MyQuery($slug: String) {
// 		markdownRemark(fields: { slug: { eq: $slug } }) {
// 			frontmatter {
// 				title
// 				date
// 			}
// 			html
// 		}
// 	}
// `;

// const Blog = (props) => (
// 	<Layout>
// 		<h1>{props.data.markdownRemark.frontmatter.title}</h1>
// 		<p>{props.data.markdownRemark.frontmatter.date}</p>
// 		<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
// 	</Layout>
// );

export default Blog;
