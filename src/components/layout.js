import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/styles.scss';
import layoutStyles from './layout.module.scss';

const Layout = (props) => (
	<div className={layoutStyles.container}>
		<div className={layoutStyles.content}>
			<Header />
			<div>{props.children}</div>
		</div>
		<Footer />
	</div>
);
export default Layout;
