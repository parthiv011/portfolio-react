import { email, github, linkedIn, medium, myName, place, twitter } from '../../utils/info.link';
import './Contact.css';

export const Contact = () => {
  return (
    <>
      <section className="contact-section" id='contact'>
        <header>Contact Me</header>
        <div className='contact-container'>
        <div className="contact-content">
          <div className="info">
            <div className="my-info">
              <p>{myName}</p>
              <p>{place}</p>
              <a href={`mailto: ${email}`}>{email}</a>
            </div>
          </div>
          <div className="connect-me">
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img src="./images/linkedin.svg" />
                Linked In
              </span>
            </a>
            <a
              href={`https://www.medium.com/@${medium}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img src="./images/medium.svg" />
                Medium
              </span>
            </a>
            <a
              href={`https://www.github.com/${github}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img src="./images/github.svg" />
                Github
              </span>
            </a>
            <a
              href={`https://www.twitter.com/${twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img src="./images/twitter.svg" />
                twitter
              </span>
            </a>
          </div>
        </div>
        <form method='post' name='contact'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' required></input>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' required></input>
            <label htmlFor='message'>Message</label>
            <textarea name='message' cols='20' rows='5' className='gradient' required></textarea>
            <button type='submit'>Submit</button>
        </form>
        </div>
      </section>
    </>
  );
};
