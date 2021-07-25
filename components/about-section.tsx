import Emoji from "./emoji";
import Section from "./section";

const AboutSection = () => {
  return (
    <Section className="about-section">
      <Section.Title>About <Emoji label="potato" icon="🥔" /></Section.Title>
      <Section.Subtitle>Here is what I&apos;m doing these days</Section.Subtitle>
      <div className="container">
        <ul className="about-list">
          <li>
            Fullstack developer at <a href="https://bloobirds.com/">Bloobirds</a>
          </li>
          <li>
            Teacher in fullstack at <a href="https://nuclio.school/master-full-stack-developer/">Nuclio Digital
            School</a>
          </li>
          <li>
            Streaming on <a href="https://twitch.tv/vimtor_">Twitch</a> from time to time
          </li>
          <li>Doing freelance jobs from time to time</li>
          <li>Always learning</li>
        </ul>
      </div>
      <Section.CTO>
        If you are interested in my tech stack,<br />you can check it out on
        <a href="https://stackshare.io/vimtor/my-stack">stackshare.io</a>
      </Section.CTO>
    </Section>
  );
};

export default AboutSection;