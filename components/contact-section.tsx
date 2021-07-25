import Emoji from "./emoji";
import Section from "./section";
import { useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Section id="contact">
      <Section.Title>Contact <Emoji label="call me hand" icon="🤙" /></Section.Title>
      <Section.Subtitle>Get in touch! I don't bite...</Section.Subtitle>
      <div className="container">
        <form action="POST" className="contact-form" data-netlify="true" name="contact">
          <label>
            <span>Email address</span>
            <input onChange={event => setEmail(event.target.value)} type="email" name="email" placeholder="your@email.com" required />
          </label>
          <label>
            <span>Message</span>
            <textarea onChange={event => setMessage(event.target.value)} name="message" placeholder="I think you're very handsome..." rows={8} required />
          </label>
          {email && message ? (
            <button className="contact-button" type="submit">
              Send email
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                   style={{ fill: "currentColor" }}>
                <path
                  d="M21.426,11.095l-17-8c-0.35-0.164-0.763-0.113-1.061,0.133C3.066,3.473,2.937,3.868,3.03,4.242l1.212,4.849L12,12 l-7.758,2.909L3.03,19.758c-0.094,0.374,0.036,0.77,0.335,1.015C3.548,20.923,3.772,21,4,21c0.145,0,0.29-0.031,0.426-0.095l17-8 C21.776,12.74,22,12.388,22,12S21.776,11.26,21.426,11.095z" />
              </svg>
            </button>
          ) : (
            <button disabled className="contact-button" type="submit">
              Fill all fields
            </button>
          )}
        </form>
      </div>
      <Section.CTO>
        You can to contact me at <a href="mailto:victor@vimtor.io">victor@vimtor.io</a><br />
        or reach out on social media <Emoji label="wink face" icon="😉" />
      </Section.CTO>
    </Section>
  );
};

export default ContactSection;