import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => (
	<Layout>
		<Head title="Home" />
		<div>
			<h2>Hello I'm Kasia</h2>
			<p>
				Need a developer? <Link to="./contact">Contact me</Link>
			</p>
			<p>
				Wanna know more about me? <Link to="./about">Bio</Link>
			</p>
		</div>
	</Layout>
);

export default IndexPage;
