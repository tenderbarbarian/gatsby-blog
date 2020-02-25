import React, { useRef, useEffect, useState } from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import contactStyles from './contact.module.scss';
import { useForm } from 'react-hook-form';
import ReCaptcha from 'react-google-recaptcha';

// import ReCAPTCHA from 'react-google-recaptcha';

// const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY || '6LdAE9wUAAAAAEQ8KqT20g_4E507K9s0m3AwPJvJ';
//console.log(RECAPTCHA_KEY);
// const encode = (data) => {
// 	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
// };
// const ContactForm = () => {
// 	const { register, handleSubmit, errors } = useForm();
// 	const [ feedbackMsg, setFeedbackMsg ] = useState(null);
// 	// const [ captcha, setCaptcha ] = useState(null);
// 	const onSubmit = (data, e) => {
// 		e.preventDefault();
// 		// const { name, email, text, captcha } = data;
// 		// alert(JSON.stringify(captcha));
// 		// setCaptcha({ 'g-recaptcha-response': value });
// 		fetch('/', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
// 			body: encode({
// 				// 'form-name': form.getAttribute('name'),
// 				'form-name': 'contact',
// 				// 'g-recaptcha-response': captcha,
// 				...data
// 			})
// 		})
// 			.then((response) => {
// 				// console.log(response);
// 				e.target.reset();
// 				setFeedbackMsg(`Thanks for reaching out! I'll get back to you soon.`);
// 			})
// 			.catch((error) => {
// 				setFeedbackMsg('Oops, something went wrong. The form could not be submitted.');
// 				console.log(error);
// 			});
// 	};
// 	return (
// 		<form
// 			onSubmit={handleSubmit(onSubmit)}
// 			className={contactStyles.form}
// 			name="contact"
// 			method="post"
// 			netlify
// 			netlify-honeypot="bot-field"
// 			data-netlify="true"
// 			data-netlify-honeypot="bot-field"
// 			// data-netlify-recaptcha="true"
// 			action="/thanks"
// 		>
// 			<input type="hidden" name="bot-field" />
// 			<input type="hidden" name="form-name" value="contact" />
// 			<div className={contactStyles.formEntry}>
// 				<input
// 					type="text"
// 					id="name"
// 					className={contactStyles.formInput}
// 					name="name"
// 					placeholder="name"
// 					aria-label="name"
// 					ref={register({
// 						required: 'name is required'
// 					})}
// 				/>
// 			</div>
// 			{errors.name && <span className={contactStyles.errorMessage}>{errors.name.message}</span>}
// 			<div className={contactStyles.formEntry}>
// 				<input
// 					type="text"
// 					id="email"
// 					className={contactStyles.formInput}
// 					placeholder="your@email.address"
// 					name="email"
// 					aria-label="email"
// 					ref={register({
// 						required: 'Required',
// 						pattern: {
// 							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
// 							message: 'invalid email address'
// 						}
// 					})}
// 				/>
// 			</div>
// 			{errors.email && <span className={contactStyles.errorMessage}>{errors.email.message}</span>}
// 			<div className={contactStyles.formEntry}>
// 				<textarea
// 					id="message"
// 					aria-label="text message"
// 					name="text"
// 					rows="6"
// 					ref={register({ required: 'Required' })}
// 					placeholder="what's on your mind?"
// 					className={contactStyles.formInput}
// 				/>
// 			</div>
// 			{errors.text && <span className={contactStyles.errorMessage}>please enter a message</span>}
// 			{feedbackMsg && <h3>{feedbackMsg}</h3>}
// 			{/* <ReCAPTCHA ref={register({ required: 'Required' })} name="g-recaptcha-response" sitekey={RECAPTCHA_KEY} /> */}
// 			<div className={contactStyles.submitContainer}>
// 				<button className={contactStyles.linkButton} type="submit">
// 					Send message
// 				</button>
// 				<small>
// 					<a href="mailto:katarzyna.m.pohl@gmail.com">or email me at katarzyna.m.pohl@gmail.com</a>
// 				</small>
// 			</div>
// 		</form>
// 	);
// };

const testReCaptchaSiteKey = '6LdAE9wUAAAAAEQ8KqT20g_4E507K9s0m3AwPJvJ';

const ContactForm = () => {
	const { register, handleSubmit, setValue, setError, errors } = useForm();

	let formElemRef = useRef(null); // to add the form the "loading" attribute (css loading circle)
	let captchaRef = useRef(null);

	useEffect(
		() => {
			register({ name: 'reCaptchaResponse' });
		},
		[ register ]
	);

	var handleFormSubmit = (e) => {
		e.preventDefault();

		formElemRef.current.setAttribute('loading', true);
		// captchaRef.current.execute(); //only works for invisible captcha
	};

	return (
		<form ref={formElemRef} onSubmit={handleFormSubmit}>
			{errors.name && <p>Required</p>}
			<input name="name" ref={register({ required: 'Required' })} />
			<button>Submit</button>
			<ReCaptcha
				badge="inline"
				ref={captchaRef}
				sitekey={testReCaptchaSiteKey}
				onChange={(val) => {
					console.log('reCaptcha Change: ', val);
					setValue('reCaptchaResponse', val);

					console.log('ReCaptcha changed'); // gets called
					formElemRef.current.removeAttribute('loading');
					handleSubmit((data) => {
						console.log('handleSubmit'); // never called
						formElemRef.current.setAttribute('loading', true);
						console.log(data); //final data
						/* fetch url then remove attribute */
					})();
					console.log('end'); //gets called
				}}
				onExpired={() => {
					setValue('reCaptchaResponse', null);
					setError('reCaptchaResponse', 'reCaptcha expired');

					formElemRef.current.removeAttribute('loading');
				}}
				onErrored={() => {
					setValue('reCaptchaResponse', null);
					setError('reCaptchaResponse', 'There has been a problem with the reCaptcha');

					formElemRef.current.removeAttribute('loading');
				}}
			/>
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
export default ContactPage;
