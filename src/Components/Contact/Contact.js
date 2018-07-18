import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<section className="contact__wrapper">
				<form
					action="https://formspree.io/hello@mikkelsandberg.com"
					method="POST"
					className="contact__form"
				>
					<input
						className="contact__form__input contact__form__input--name"
						type="text"
						name="name"
						placeholder="Name"
					/>
					<input
						className="contact__form__input contact__form__input--email"
						type="email"
						name="_replyto"
						placeholder="your@email.com"
					/>
					<input
						className="contact__form__input contact__form__input--subject"
						type="text"
						name="_subject"
						placeholder="Subject"
					/>
					<textarea
						name="message"
						cols="30"
						rows="10"
						placeholder="Message"
						className="contact__form__input contact__form__input--message"
					/>
					<input
						className="contact__form__input contact__form__input--submit"
						type="submit"
						value="Send"
					/>
				</form>
			</section>
		);
	}
}

export default Contact;
