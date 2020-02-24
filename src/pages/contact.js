import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import contactStyles from './contact.module.scss';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data, e) => {
		// const { name, email, text } = data;
		alert(JSON.stringify(data));
		e.target.reset(); // reset after form submit
	};

	return (
		// <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
		// <input type="hidden" name="bot-field" />
		// <input type="hidden" name="form-name" value="contact" />
		<form onSubmit={handleSubmit(onSubmit)} className={contactStyles.form}>
			{errors.firstName && <span className={contactStyles.errorMessage}>First name is required</span>}
			<div className={contactStyles.formEntry}>
				<input
					type="text"
					id="name"
					className={contactStyles.formInput}
					name="name"
					placeholder="name"
					aria-label="name"
					ref={register({
						required: 'name is required'
					})}
				/>
			</div>
			{errors.name && <span className={contactStyles.errorMessage}>{errors.name.message}</span>}
			<div className={contactStyles.formEntry}>
				<input
					type="text"
					id="email"
					className={contactStyles.formInput}
					placeholder="your@email.address"
					name="email"
					aria-label="email"
					ref={register({
						required: 'Required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'invalid email address'
						}
					})}
				/>
			</div>
			{errors.email && <span className={contactStyles.errorMessage}>{errors.email.message}</span>}
			<div className={contactStyles.formEntry}>
				<textarea
					id="message"
					aria-label="text message"
					name="text"
					rows="6"
					ref={register({ required: 'Required' })}
					placeholder="what's on your mind?"
					className={contactStyles.formInput}
				/>
			</div>
			{errors.text && <span className={contactStyles.errorMessage}>please enter a message</span>}
			<div className={contactStyles.submitContainer}>
				<button className={contactStyles.linkButton} type="submit">
					Send message
				</button>
				<small>
					<a href="mailto:katarzyna.m.pohl@gmail.com">or email me at katarzyna.m.pohl@gmail.com</a>
				</small>
			</div>
		</form>
	);
};

const ContactPage = () => (
	<Layout>
		<Head title="Contact" />
		<div>
			<h1 className={contactStyles.sectionHeader}>Hi!</h1>
			<p>
				A question? An opinion? Something different? Whatever it is (except saying nasty things about my hair,
				that's a no-no) I'm looking forward to hear from you. And you can also
				<a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
					{' '}
					DM me on Twitter!
				</a>
			</p>
			<ContactForm />
		</div>
	</Layout>
);

// const ContactPage = () => (
// 	<Layout>
// 		<Head title="Contact" />
// 		<div>
// 			<h1 className={contactStyles.sectionHeader}>Hi!</h1>
// 			<Example />
// 		</div>
// 	</Layout>
// );
export default ContactPage;
