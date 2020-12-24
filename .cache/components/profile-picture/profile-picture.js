import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from '/@npm/htm/preact';
import './profile-picture.css.js'

function ProfilePicture() {
  return (
    html`<img
      class="profile-image"
      src="/images/profile.webp"
      alt="victor navarro"
      loading="eager"
      width=${200}
      height=${200}
    />`
  )
}

export default ProfilePicture


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
