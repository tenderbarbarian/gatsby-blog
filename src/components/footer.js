import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`);
	return (
		<footer className={footerStyles.footer}>
			<p>
				Created by: {data.site.siteMetadata.author} © {new Date().getFullYear()}
			</p>
			<Link to="/rss.xml">RSS feed</Link>
		</footer>
	);
};

export default Footer;
