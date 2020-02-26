import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import aboutStyles from './about.module.scss';

const AboutPage = () => (
	<Layout>
		<Head title="About" />
		<div>
			<h1 className={aboutStyles.sectionHeader}>This?</h1>
			<p>
				This site is about soft-skills, mindfulness and habit creation. It's about finding simplicity in the
				daily chaos of our lives and clearing the clutter so we can focus on what’s important, create something
				amazing, find happiness. Inspited by Sam Harris, Leo Baubata and Olivia Fox Cabane
			</p>
			<p>
				My name is Kasia Pohl. I live in Warsaw, Poland, where I eat vegan food, write, run, and read. Reading
				has always been my go to mean to improve myself, and now I want to share what I learned through
				blogging.
			</p>
			<blockquote>
				If you want to master something, teach it.
				<cite>
					<i>Richard Feynman</i>
				</cite>
			</blockquote>
			<p>If you'd like to give me feedback or suggestions, please don't hesitate to contact me.</p>
			<Link to="/contact" className={aboutStyles.linkButton}>
				Contact me
			</Link>
		</div>
	</Layout>
);

export default AboutPage;
