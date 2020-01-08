import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => (
	<Layout>
		<Head title="Contact" />
		<div>
			<a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
				My Twitter
			</a>
			<p>Contact from:</p>
		</div>
	</Layout>
);
export default ContactPage;
