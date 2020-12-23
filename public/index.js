import hydrate from 'preact-iso/hydrate'
import { LocationProvider, Router } from 'preact-iso/router'
import lazy, { ErrorBoundary } from 'preact-iso/lazy'
import Home from './pages/home'
import NotFound from './pages/404.js'

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Home path="/" />
          <NotFound default />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  )
}

hydrate(<App />)

export async function prerender(data) {
  const { default: prerender } = await import('preact-iso/prerender')
  return await prerender(<App {...data} />)
}
