function generateClickId() {
    let clickIdBase64 = '';

    do {
        const randomString = Math.random().toString(36).substring(2, 12); // String acak
        const timestamp = Date.now().toString(); // Timestamp saat ini

        const clickIdRaw = `${randomString}|${randomString}|${randomString}|${timestamp}|0`;
        clickIdBase64 = btoa(clickIdRaw); // Base64 encoding
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

// Contoh penggunaan fungsi dengan campaign_id dan target_url
const campaign_id = "12345";  // Ganti dengan ID kampanye Anda
const target_url = "https://s.tubesplash.net/spots/482716?&s1=nav_bar&kw=sex%20for%20you&s2=hellporner.com"; // Target URL yang diinginkan
const trackingUrl = createTrackingUrl(campaign_id, target_url);
console.log("Generated tracking URL:", trackingUrl);

// Jika ingin mengarahkan ke URL yang dihasilkan
window.location.href = trackingUrl;
