import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from '/@npm/htm/preact';
import styles from './project-list.module.css.js'

function ProjectList({ value }) {
  return (
    html`<ul class=${styles.list}>
      ${value.map(({ title, description, banner, source }) => (
        html`<li class=${styles.item}>
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
    </ul>`
  )
}

export default ProjectList


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
