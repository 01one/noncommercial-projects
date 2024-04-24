function loadAnalyticsScript() {
    if (localStorage.getItem('analyticsConsent') === 'accepted') {
        var analyticsScript = document.createElement('script');
        
        analyticsScript.src = 'analytics-script.js';
        analyticsScript.async = true;
        
        document.head.appendChild(analyticsScript);
    }
}

$(document).ready(function () {
    // Check if the stored data has expired
    const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');
    if (consentTimestamp && (Date.now() - consentTimestamp > 30 * 24 * 60 * 60 * 1000)) {
        // If the data has expired, remove it from local storage
        localStorage.removeItem('cookieConsent');
        localStorage.removeItem('analyticsConsent');
        localStorage.removeItem('cookieConsentTimestamp');

        // Delete cookies associated with the website
        deleteWebsiteCookies();
    }

    if (localStorage.getItem('cookieConsent') === 'accepted') {
        // Load scripts based on user preferences
        loadAnalyticsScript();
        return;
    } else {
        $('.cookie-consent-modal').modal({ closable: false }).modal('show');
    }

    // Click event handler for 'Accept Selected' button
    $('#acceptButton').click(function () {
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('analyticsConsent', $('#analytics').prop('checked') ? 'accepted' : 'rejected');
        localStorage.setItem('cookieConsentTimestamp', Date.now());
        $('.cookie-consent-modal').modal('hide');
        loadAnalyticsScript();
    });

    // Click event handler for 'Accept All' button
    $('.cookie-consent-accept-all-button').click(function () {
        $('#analytics').prop('checked', true);
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('analyticsConsent', 'accepted');
        localStorage.setItem('cookieConsentTimestamp', Date.now()); // Set current timestamp
        $('.cookie-consent-modal').modal('hide');
        loadAnalyticsScript();
    });

    // Click event handler for 'Decline All Except Essential' button
    $('.cookie-consent-modal .positive.button:contains("Decline All Except Essential")').click(function () {
        $('#analytics').prop('checked', false);
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('analyticsConsent', 'rejected');
        localStorage.setItem('cookieConsentTimestamp', Date.now()); // Set current timestamp
        $('.cookie-consent-modal').modal('hide');
    });
});

function deleteWebsiteCookies() {
    // Get all cookies associated with the website
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Check if the cookie is not the one to be preserved
        if (!cookie.startsWith("cf_clearance")) {
            const cookieName = cookie.split('=')[0];
            // Delete the cookie
            document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        }
    }
}
