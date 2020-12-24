import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from '/@npm/htm/preact';
import './home.css.js'
import projects from '../../data/projects.js'
import Link from '../../components/link.js'
import Footer from '../../components/footer/footer.js'
import Section from '../../components/section/section.js'
import ProfilePicture from '../../components/profile-picture/profile-picture.js'
import ProjectList from '../../components/project-list/project-list.js'

function HeroSection() {
  return (
    html`<section class="hero">
      <${ProfilePicture} />
      <div>
        <h1 class="hero-title">Covandonga 🤙</h1>
        <div class="hero-info">
          <p>When I was a child, I dreamed of becoming an inventor.</p>
          <p>This is my best attempt</p>
        </div>
      </div>
    </section>`
  )
}

function ExperienceSection() {
  return (
    html`<${Section} title="Experience 🚀" subtitle="Some of the things I've built">
      <${ProjectList} value=${projects} />
    <//>`
  )
}

function ContactSection() {
  return (
    html`<${Section} title="Contact ☎" subtitle="Get in touch! I don't bite...">
      <ul>
        <li>
          Working as a full-stack developer at <${Link} to="https://bloobirds.com/">Bloobirds<//>
        </li>
        <li>
          Growing my own startup <${Link} to="https://github.com/pocket-studios/">Pocket Studios<//>
        </li>
        <li>Doing freelance jobs from time to time</li>
        <li>Always learning</li>
      </ul>
      <p>
        Feel free to contact me at <${Link} to="mailto:victor@vimtor.io">victor@vimtor.io<//> or reach out on social
        media ☺
      </p>
    <//>`
  )
}

export default function Home() {
  return (
    html`<main>
      <${HeroSection} />
      <${ExperienceSection} />
      <${ContactSection} />
      <${Footer} />
    </main>`
  )
}


import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}
