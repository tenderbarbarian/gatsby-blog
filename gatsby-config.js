module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Headless',
		author: 'Kasia Pohl'
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
				color: `red`,
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
		`gatsby-plugin-offline`
	]
};
