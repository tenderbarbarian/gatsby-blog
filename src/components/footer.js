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
			<div className={footerStyles.credits}>
				<span>
					Copyright {data.site.siteMetadata.author} © {new Date().getFullYear()} All rights reserved.
				</span>
				<p>
					Developed by {data.site.siteMetadata.author}. Built with{' '}
					<a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">
						React
					</a>{' '}
					and{' '}
					<a href="http://gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
						Gatsby.js
					</a>
				</p>
			</div>
			<div>
				<a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">
					<img
						// src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
						src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
						alt="Powered by Contentful"
					/>
				</a>
				<a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg"
						alt="Hosted on Netlify"
					/>
				</a>
			</div>
			<div className={footerStyles.rss}>
				<Link to="/rss.xml">RSS feed</Link>
			</div>
		</footer>
	);
};

export default Footer;
