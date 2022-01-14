export function trackEvent(name: string, body: any) {
    (window as any).analytics.track(name, body);
}

export function trackPage(url: string) {
    (window as any).analytics.page(url);
}
