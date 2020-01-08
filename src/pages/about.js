import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => (
	<Layout>
		<Head title="About" />
		<div>
			<h1>about page</h1>
			<p>venni viddi vicci! I'm the author of this blog. I know react, gatsby CRa graphql typescript</p>
			<Link to="/contact">Contact me</Link>
		</div>
	</Layout>
);

export default AboutPage;
