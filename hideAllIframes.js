// run in browser console
(function(){
    const hideElement = (elm) => {
        elm.style.display="none";
        elm.style.backgroundImage="none !important";
    };

    document.querySelectorAll("iframe").forEach((e) => {
       hideElement(e);
    });

})();