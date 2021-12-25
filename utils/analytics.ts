export function trackEvent(name: string, body: any) {
    (window as any).analytics.track(name, body);
}
