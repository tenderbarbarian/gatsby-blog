module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Headless',
		author: 'Kasia Pohl',
		description: 'Personal blog about meditation, mindfulness and habit creation',
		siteUrl: 'http://localhost:8000/'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
				ignore: [ `**/\.*` ] // ignore files starting with a dot
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `darkgreen`,
				showSpinner: false
			}
		},
		{
			resolve: `gatsby-plugin-manifest`, //Needs to come before offline plugin
			options: {
				name: `Headless`,
				short_name: `headless`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-offline`,
		{
			//RSS FEED https://www.gatsbyjs.org/packages/gatsby-plugin-feed/
			//NOTE: This plugin only generates the xml file(s) when run in production mode! To test your feed, run: gatsby build && gatsby serve.
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
				{
				  site {
					siteMetadata {
					  title
					  description
					  siteUrl
					  site_url: siteUrl
					}
				  }
				}
			  `,
				feeds: [
					{
						serialize: ({ query: { site, allContentfulBlogPost } }) => {
							return allContentfulBlogPost.edges.map((edge) => {
								return Object.assign({}, edge.node, {
									description: edge.node.body.json, //<![CDATA[ [object Object] ]]>
									title: edge.node.title,
									pubDate: edge.node.publishedDate, //Invalid Date
									custom_elements: [
										{ content: edge.node.body.json }, //empty
										{ publishedDate: edge.node.publishedDate }
									],
									url: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`
								});
							});
						},
						query: `
						{
							allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
								edges {
									node {
										title
										slug
										publishedDate(formatString: "MMMM Do, YYYY")
										body {
											json
										}
									}
								}
							}
						}
				  		`,
						output: '/rss.xml',
						title: "Your Site's RSS Feed",
						// optional configuration to insert feed reference in pages:
						// if `string` is used, it will be used to create RegExp and then test if pathname of
						// current page satisfied this regular expression;
						// if not provided or `undefined`, all pages will have feed reference inserted
						match: '^/blog/',
						// optional configuration to specify external rss feed, such as feedburner
						link: 'https://feeds.feedburner.com/gatsby/pohlheadlessblog'
					}
				]
			}
		}
	]
};
