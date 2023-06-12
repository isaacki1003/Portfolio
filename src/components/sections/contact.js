import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .contact-label {
    color: var(--green);
    font-family: var(--font-mono);
    margin-top: 50px;
  }

  .contact-paragraph {
    margin-bottom: 50px;
  }

  .contact-name-input {
    width: 300px;
    height: 30px;
    margin-bottom: 20px;
  }

  .contact-message-input {
    width: 300px;
    height: auto;
    padding-bottom: 100px; /* add two blank lines worth of space */
    overflow: hidden; /* remove the scrollbar */
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 30px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p className='contact-paragraph'>
        I am currently looking for any new opportunities, whether they be full-time or internships.
        My inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <form action="https://formsubmit.co/isaacki1003@gmail.com" method="POST">
          <label for="name" className='contact-label'>Name</label>
          <br></br>
          <input type="text" className='contact-name-input' id="name" name="name" required />
          <br />
          <label for="message" className='contact-label'>Message</label>
          <br></br>
          <textarea className='contact-message-input' id="message" name="message" required></textarea>
          <br />
          <button className='email-link' type="submit">Say Hello</button>
        </form>

    </StyledContactSection>
  );
};

export default Contact;
