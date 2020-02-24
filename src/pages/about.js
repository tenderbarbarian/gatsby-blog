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
			<p>This site is about soft-skills, mindfulness and habit creation</p>
			<p>Inspited by Sam Harris, Leo Baubata and Olivia Fox Cabane</p>
			<p>
				Hello there! I'm Kevin, a late-twenties software developer from Austria. This, nehalist.io, is my
				personal (tech) blog where I write about things I like and think are worthy to write about.
			</p>
			<p>
				About me As mentioned above my name is Kevin, born October 1990, a full-time web- and software
				developer. Software development is not just my job - it's my passion. Ever since I've been a child I
				like to understand the "Why?" and "How?", hence spending (probably way too much time) time in front of
				computers trying to extend my knowledge and becoming better at whatever I do. For more than half of my
				life (which equals approximately 15 years) I've been working with numerous programming languages,
				technologies and tools. As of today I consider myself a full-stack developer, mainly working with:
			</p>
			<p>
				Blogging has always been a fun way to improve myself. I can't just post things I'm not certain about -
				every* post requires further investigation, additional reflection and a reasonable amount of certainty
				in terms of quality before hitting that "Publish" button.{' '}
				<blockquote>
					If you want to master something, teach it.
					<cite>
						<i>Richard Feynman</i>
					</cite>
				</blockquote>
				I'm a huge fan of open source software, hence trying to contribute as much as possible. You can find all
				my contributions on my GitHub profile. Outside the world of software it's likely to find me playing
				games, spending time with my family and friends or trying to stop my cat from going insane. * = Mostly.
				If you think I'm spreading nonsense please get in touch with me and let's talk about it!
			</p>
			<Link to="/contact" className={aboutStyles.linkButton}>
				Contact me
			</Link>
		</div>
	</Layout>
);

export default AboutPage;
