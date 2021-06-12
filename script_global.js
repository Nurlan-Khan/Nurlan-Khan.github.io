window.odometerOptions = {
    format: " ddd", // https://github.hubspot.com/odometer/ Change how digit groups are formatted, and how many digits are shown after the decimal point
};



function supportsImports() {
    return 'import' in document.createElement('link');
}

if (supportsImports()) {
    // Good to go!
} else {
    // Use other libraries/require systems to load files.
}

var doc = document.querySelector('link[rel="import"]').import