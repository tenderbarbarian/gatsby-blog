import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import homeStyles from './home.module.scss';

const NotFound = () => (
	<Layout>
		<Head title="404" />
		<h2 className={homeStyles.sectionHeader - sm}>Page not found</h2>
		<p>
			<Link to="/">Back to the home page</Link>
		</p>
	</Layout>
);

export default NotFound;
