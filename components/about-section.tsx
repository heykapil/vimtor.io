import Emoji from "./emoji";
import Section from "./section";

const AboutSection = () => {
  return (
    <Section className="opacity-1 animate-fade-in-down text-center mt-24 sm:mt-32">
      <Section.Title>About <Emoji label="potato" icon="🥔" /></Section.Title>
      <Section.Subtitle>Here is what I&apos;m doing these days</Section.Subtitle>
      <div className="flex justify-center">
        <ul className="list-disc list-inside text-left m-0 text-base sm:text-xl leading-7">
          <li>
            Fullstack developer at <a className= "transiton duration-200 ease-in-out text-gray-400 inline-block underline hover:text-gray-800" href="https://bloobirds.com/">Bloobirds</a>
          </li>
          <li>
            Teacher in fullstack at <a className= "transiton duration-200 ease-in-out text-gray-400 inline-block underline hover:text-gray-800" href="https://nuclio.school/master-full-stack-developer/">Nuclio Digital
              School</a>
          </li>
          <li>
            Streaming on <a className= "transiton duration-200 ease-in-out text-gray-400 inline-block underline hover:text-gray-800" href="https://twitch.tv/vimtor_">Twitch</a> from time to time
          </li>
          <li>Doing freelance jobs from time to time</li>
          <li>Always learning</li>
        </ul>
      </div>
      <Section.CTO>
        If you are interested in my tech stack,<br />you can check it out on <a className= "transiton duration-200 ease-in-out text-gray-400 underline hover:text-gray-800" href="https://stackshare.io/vimtor/my-stack">stackshare.io</a>
      </Section.CTO>
    </Section>
  );
};

export default AboutSection;