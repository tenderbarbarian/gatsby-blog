import React from 'react';
import Header from './header';
import Footer from './footer';
import layoutStyles from './layout.module.scss';

const Layout = (props) => (
	<div className={layoutStyles.container}>
		<Header />
		<div className={layoutStyles.content}>
			<div>{props.children}</div>
		</div>
		<Footer />
	</div>
);
export default Layout;
