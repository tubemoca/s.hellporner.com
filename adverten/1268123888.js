function generateClickId() {
    let clickIdBase64 = '';

    do {
        const randomString = Math.random().toString(36).substring(2, 12);
        const timestamp = Date.now().toString();

        const clickIdRaw = `${randomString}|${randomString}|${randomString}|${timestamp}|0`;
        clickIdBase64 = btoa(clickIdRaw); 
    } while (!clickIdBase64.startsWith("Fkpst"));

    return clickIdBase64;
}

function createTrackingUrl(campaign_id, target_url) {
    const domain = window.location.hostname;
    const click_id = generateClickId();

    // Encode target_url untuk memastikan URL valid
    const encodedTargetUrl = encodeURIComponent(target_url);

    // Susun URL tracking dengan target_url yang sudah dienkode
    const trackingUrl = `https://s.hellporner.com/ad.continue?utm_source=${domain}&campaign_id=${campaign_id}&click_id=${click_id}&target_url=${encodedTargetUrl}`;
    return trackingUrl;
}


const campaign_id = "1268123888";
const target_url = "https://s.tubesplash.net/spots/482716?&s1=nav_bar&kw=sex%20for%20you&s2=hellporner.com";
const trackingUrl = createTrackingUrl(campaign_id, target_url);
console.log("Generated tracking URL:", trackingUrl);


window.location.href = trackingUrl;
