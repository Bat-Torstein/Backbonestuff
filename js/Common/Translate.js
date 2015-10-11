var EN = require("../../translations/english_en");
var NO = require("../../translations/norwegian_no");
var SE = require("../../translations/swedish_se");

var Translate = ({
});

Translate.translate = function (key) {
    var currentLanguage = Translate.currentLanguage();

    if (currentLanguage) {
        if (currentLanguage[key]) {
            return currentLanguage[key];
        } else {
            console.log("Translation for '" + key + "' was not found for language " + currentLanguage.Language);
        }
    }

    return key;
};

Translate.currentLanguage = function () {
    if (Translate._currentLanguage) {
        return Translate._currentLanguage;
    }

    Translate._currentLanguage = Translate.getNavigatorLanguage(navigator.language.toLowerCase());

    return Translate._currentLanguage;
};

Translate.getNavigatorLanguage = function (navigatorLanguage) {
    var language = "";
    switch (navigatorLanguage) {
        case "nb":
        case "nn":
        case "nb-no":
        case "nn-no":
            language = NO;
            break;
        case 'en-gb':
        case 'en-US':
            language = EN;
            break;
        case 'sv':
            language = SE;
            break;
    }

    if (!language) {
        console.log("Current language " + navigatorLanguage + " is not supported - defaulting to english");
        language = EN;
    }

    return language;
};


module.exports = function (key) {
    return Translate.translate(key);
}; 
