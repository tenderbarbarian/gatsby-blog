import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => (
	<Layout>
		<Head title="Contact" />
		<div>
			<p>
				A question? An opinion? Something different? Whatever it is (except saying nasty things about my car,
				that's a no-go) I'm looking forward to hear from you. To answer some of the most asked questions right
				away: In case you've got some questions about this blog there's many information about it on the about
				page. If you do have questions regarding a guide or post please use the comments. You can also DM me on
				Twitter!
			</p>
			<a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
				My Twitter
			</a>
		</div>
	</Layout>
);
export default ContactPage;
