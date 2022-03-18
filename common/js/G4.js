window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "G-DC8B9STGQS", {
    page_title: window.document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
});

function setLoginedUserProperties() {

    const cookie = document.cookie;
    const loginFactorCookie = cookie.replaceAll(" ", '').split(";").filter((member) => member.includes('_aitax')).join();
    if (loginFactorCookie) {
        const loginFactorCookieString = loginFactorCookie.split('=');
        const jwtTokenValue = loginFactorCookieString[1].split('.');
        const jwtPayload = jwtTokenValue[1];
        const userInfoJSON = JSON.parse(decodeURIComponent(atob(jwtPayload)));
        const sub = JSON.parse(userInfoJSON.sub);
        gtag('set', 'user_properties', {
            seteuk_id: `${sub.username}`,
            user_type: 'seteuk'
        })
    }else{
        gtag('set', 'user_properties', {
            seteuk_id: 'none',
            user_type: 'anonymous'
        })
    }
}
setLoginedUserProperties();
