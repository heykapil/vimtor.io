import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from '/@npm/htm/preact';
import './footer.css.js'
import Link from '../link.js'
import socialMedia from '../../data/social-media.js'
import Icon from '../icon.js'

function Footer() {
  return (
    html`<footer class="footer">
      <ul>
        ${socialMedia.map(({ name, link }) => (
          html`<li>
            <${Link} to=${link} aria-label=${name}>
              <${Icon} name=${name} />
            <//>
          </li>`
        ))}
      </ul>
      <p>Victor Navarro © ${new Date().getFullYear()}</p>
    </footer>`
  )
}

export default Footer


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
