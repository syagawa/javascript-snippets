// run in browser console
(function(){
    const targetProperty = "z-index";
    const excludeValues = ["auto"];
    const elms_ = document.querySelectorAll("*");
    const elms = [...elms_, document, window];
    const callback = (elm) => {
        try{
            if(!elm.checkVisibility()){
                return;
            }
            const target = elm.computedStyleMap().get(targetProperty);
            const value = target.value;
            if(value){
                if(excludeValues.includes(value)){
                    return;
                }
                console.log(elm, `${targetProperty}: ${value}`);
            }
        }catch(e){
        }
    };
    elms.forEach(callback);
})();