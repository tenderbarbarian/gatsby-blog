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
			{/* <div className={footerStyles.footerBG} /> */}
			<span>
				Created by: <strong>{data.site.siteMetadata.author}</strong> © {new Date().getFullYear()}
			</span>
			<div className={footerStyles.rss}>
				<Link to="/rss.xml">RSS feed</Link>
			</div>
		</footer>
	);
};

export default Footer;
