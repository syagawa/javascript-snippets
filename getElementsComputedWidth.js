// run in browser console
(function(targetWidth){

    const elms_ = document.querySelectorAll("*");
    const arr = [];
    const elms = [...elms_, document, window];
    targetWidth = targetWidth ? targetWidth : 1000;
    
    const callback = (elm) => {
        const cw = elm.clientWidth;
        if(cw > targetWidth){
            const cssw = elm.computedStyleMap().get("width");
            const cssm_w = elm.computedStyleMap().get("min-width");
            console.log(elm, `width: ${cw}px`, "css-width:", cssw, "css-min-width:", cssm_w);
        }
    };
    
    elms.forEach(callback);
})(1000);
