import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import contactStyles from './contact.module.scss';

const ContactPage = () => (
	<Layout>
		<Head title="Contact" />
		<div>
			<h1 className={contactStyles.sectionHeader}>Hi!</h1>
			<p>
				A question? An opinion? Something different? Whatever it is (except saying nasty things about my car,
				that's a no-go) I'm looking forward to hear from you. To answer some of the most asked questions right
				away: In case you've got some questions about this blog there's many information about it on the about
				page. And you can also
				<a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
					{' '}
					DM me on Twitter!
				</a>
			</p>
		</div>
	</Layout>
);
export default ContactPage;
