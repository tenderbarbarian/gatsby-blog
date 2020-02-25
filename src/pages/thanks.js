import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import homeStyles from './home.module.scss';

const Thanks = () => (
	<Layout>
		<Head title="Thanks" />
		<h2 className={homeStyles.sectionHeader - sm}>Your form submission was received. Thank you!</h2>
		<p>
			<Link to="/">Back to the home page</Link>
		</p>
	</Layout>
);

export default Thanks;
