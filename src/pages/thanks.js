import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import homeStyles from './home.module.scss';

const Thanks = () => (
	<Layout>
		<Head title="Thanks" />
		<h1 className={homeStyles.sectionHeader}>Your form submission was recieved. Thank you!</h1>
		<p>
			<Link to="/">Back to the home page</Link>
		</p>
	</Layout>
);

export default Thanks;
