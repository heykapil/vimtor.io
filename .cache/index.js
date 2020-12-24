import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from '/@npm/htm/preact';
import hydrate from '/@npm/preact-iso/hydrate'
import { LocationProvider, Router } from '/@npm/preact-iso/router'
import lazy, { ErrorBoundary } from '/@npm/preact-iso/lazy'
import Home from './pages/home/home.js'
import NotFound from './pages/404.js'

export function App() {
  return (
    html`<${LocationProvider}>
      <${ErrorBoundary}>
        <${Router}>
          <${Home} path="/" />
          <${NotFound} default />
        <//>
      <//>
    <//>`
  )
}

hydrate(html`<${App} />`)

export async function prerender(data) {
  const { default: prerender } = await import('/@npm/preact-iso/prerender')
  return await prerender(html`<${App} ...${data} />`)
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
