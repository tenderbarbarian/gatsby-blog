import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

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
			meta={[
				{
					name: `author`,
					content: data.site.siteMetadata.author
				},
				{
					name: `description`,
					content: data.site.siteMetadata.description
				}
			].concat(meta)}
		/>
	);
};

export default Head;
