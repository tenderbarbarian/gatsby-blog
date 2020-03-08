import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const lang = 'en';
const Head = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`);
	return (
		<Helmet
			title={`${title} | ${data.site.siteMetadata.title}`}
			htmlAttributes={{
				lang
			}}
		>
			<meta name="description" content={data.site.siteMetadata.description} />
			<meta name="author" content={data.site.siteMetadata.author} />
		</Helmet>
	);
};

export default Head;
