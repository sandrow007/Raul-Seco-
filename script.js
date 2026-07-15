window.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner-container').classList.add('visible');
    }
});
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner-container').classList.remove('visible');
}
function denyCookies() {
    document.getElementById('cookie-banner-container').classList.remove('visible');
}
