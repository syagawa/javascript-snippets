// run in browser console
(function(){
    const targetProperty = "z-index";
    const elms_ = document.querySelectorAll("*");
    const elms = [...elms_, document, window];
    const callback = (elm) => {
        try{
            const value = elm.computedStyleMap().get(targetProperty);
            if(value){
                console.log(elm, `${targetProperty}: ${value}`);
            }
        }catch(e){
        }
    };
    elms.forEach(callback);
})();
