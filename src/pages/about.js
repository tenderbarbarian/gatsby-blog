import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => (
	<Layout>
		<Head title="About" />
		<div>
			<p>This site is about soft-skills, mindfulness and habit creation</p>
			<p>Inspited by Sam Harris, Leo Baubata and Olivia Fox Cabane</p>
			<Link to="/contact">Contact me</Link>
		</div>
	</Layout>
);

export default AboutPage;
