import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import homeStyles from './home.module.scss';

const IndexPage = () => (
	<Layout>
		<Head title="Home" />
		<div>
			<h1 className={homeStyles.sectionHeader}>Remember</h1>
			<blockquote>
				Be yourself; everyone else is already taken.
				<cite>
					<i>Oscar Wilde</i>
				</cite>
			</blockquote>
		</div>
	</Layout>
);

export default IndexPage;
