export function delay(ms) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}

export function isMobile() {
    let ua = navigator.userAgent;
    return (ua.match(/Android/i) || ua.match(/webOS/i) || ua.match(/iPhone/i) || ua.match(/iPad/i) ||
        ua.match(/iPod/i) || ua.match(/BlackBerry/i) || ua.match(/Windows Phone/i));
}