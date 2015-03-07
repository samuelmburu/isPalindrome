(function () {
    "use strict";  // to protect against potential erroneous values of keyword 'this'

    var ignoreCaseToggle = document.getElementById('ignoreCaseToggle'),
        isPalidromeOutput = document.getElementById('output'),
        textEl = document.getElementById('palicheck');

    function isPalindrome(str) {
        var isPali = true;

        // length of 1 isPali = true
        // length > 1 && str[0] == str[str.length-1]
        // then isPali=true

        if (str.length > 1) {
            if (str[0] !== str[str.length - 1]) {
                isPali = false;
            } else {
                isPali = isPalindrome(str.substring(1, str.length - 1));
            }
        }
        return isPali;
    }

    function isPalindromeEventHandler(e) {
        var str = textEl.value;

        if (ignoreCaseToggle.checked) {
            // we are ignoring case -- so lower case the entire string
            str = str.toLowerCase();
        }
        isPalidromeOutput.innerHTML = isPalindrome(str);
    }

    // add event listeners
    ignoreCaseToggle.addEventListener('change', isPalindromeEventHandler);
    textEl.addEventListener('keyup', isPalindromeEventHandler);
}());
