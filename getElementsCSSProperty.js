// run in browser console
(function(){
    const targetProperty = "margin";
    const excludeValues = ["0px"];
    const elms_ = document.querySelectorAll("*");
    const elms = [...elms_, document, window];
    const callback = (elm) => {
        try{
            if(!elm.checkVisibility()){
                return;
            }
            const target = elm.computedStyleMap().get(targetProperty);
            const value = target.toString()
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
