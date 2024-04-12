function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

// Load the Google Translate API
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.getElementsByTagName('head')[0].appendChild(script);
