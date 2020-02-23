import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => (
	<Layout>
		<Head title="Home" />
		<div>
			<p>“Be yourself; everyone else is already taken.”</p>
			<p>- Oscar Wilde</p>
		</div>
	</Layout>
);

export default IndexPage;
