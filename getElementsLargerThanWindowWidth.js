// run in browser console
(function(){

    const elms_ = document.querySelectorAll("*");
    const arr = [];
    const elms = [...elms_, document, window];
    const targetWidth = window.outerWidth < window.innerWidth ? window.outerWidth : window.innerWidth;
    
    const callback = (elm) => {
        const cw = elm.clientWidth;
        if(cw > targetWidth){
            const cssw = elm.computedStyleMap().get("width");
            const cssm_w = elm.computedStyleMap().get("min-width");
            console.log(elm, `width: ${cw}px`, "css-width:", cssw, "css-min-width:", cssm_w);
        }
    };
    
    elms.forEach(callback);

})();
