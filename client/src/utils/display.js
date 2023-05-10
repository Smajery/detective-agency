export function shouldDisplayHeader(pathname) {
    return !['/message'].includes(pathname);
}

export function shouldDisplayFooter(pathname) {
    return !['/message'].includes(pathname);
}