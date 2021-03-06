const path = require('path');

// for Markdown blog only
// module.exports.onCreateNode = ({ node, actions }) => {
// 	const { createNodeField } = actions;
// 	if (node.internal.type === 'MarkdownRemark') {
// 		//console.log(JSON.stringify(node, undefined, 4));
// 		const slug = path.basename(node.fileAbsolutePath, '.md');
// 		createNodeField({
// 			node,
// 			name: 'slug',
// 			value: slug
// 		});
// 	}
// };

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve('./src/templates/blog.js');
	const res = await graphql(`
	query MyQuery {
		allContentfulBlogPost{
		  edges {
			node {
			  slug
			}
		  }
		}
	  }
	`);
	res.data.allContentfulBlogPost.edges.forEach((edge) => {
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		});
	});
	// //Markdown blog
	// const res = await graphql(`
	// 	query {
	// 		allMarkdownRemark {
	// 			edges {
	// 				node {
	// 					fields {
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `);
	// res.data.allMarkdownRemark.edges.forEach((edge) => {
	// 	createPage({
	// 		component: blogTemplate,
	// 		path: `/blog/${edge.node.fields.slug}`,
	// 		context: {
	// 			slug: edge.node.fields.slug
	// 		}
	// 	});
	// });
};
