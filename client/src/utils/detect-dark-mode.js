export const detectDarkMode = () => {
    if (typeof window === 'undefined') return;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

}