// run in browser console
(function(target, excludes){
    let targetProperty = "margin";
    let excludeValues = ["0px"];
    if(target){
      targetProperty = target;
    }
    if(excludes){
      excludeValues = excludes;
    }

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
})("background-image", ["none"]);
