import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from '/@npm/htm/preact';
import Link from '../components/link.js'
import Footer from '../components/footer.js'
import projects from '../data/projects.js'

function HeroSection() {
  return (
    html`<section>
      <img src="/images/profile.webp" alt="victor navarro" loading="eager" width=${200} height=${200} />
      <div>
        <h1>Covandonga</h1>
        <div>
          <p>My name is Victor Navarro and I love sharing knowledge in a funny way</p>
          <p>This is my best attempt</p>
        </div>
      </div>
    </section>`
  )
}

function ExperienceSection() {
  return (
    html`<section>
      <h2>Experience 🚀</h2>
      <p>Some of the things I've built</p>
      <ul>
        ${projects.map(({ title, description, banner, source }) => (
          html`<li>
            <img
              src=${`/images/${banner.src}.webp`}
              alt=${banner.alt}
              loading="lazy"
              decoding="async"
              width=${256}
              height=${152}
            />
            <div>
              <h3>${title}</h3>
              ${description.map(text => (
                html`<p>${text}</p>`
              ))}
              <a href=${source.link}>${source.text}</a>
            </div>
          </li>`
        ))}
      </ul>
    </section>`
  )
}

function ContactSection() {
  return (
    html`<section>
      <h2>Contact ☎</h2>
      <p>Get in touch! I don't bite...</p>
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
    </section>`
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
