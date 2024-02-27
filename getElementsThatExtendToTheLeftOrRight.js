// run in browser console
(function(){

    const elms_ = document.querySelectorAll("*");
    const arr = [];
    const elms = [...elms_, document, window];
    const targetWidth = 360
    const callback = (elm) => {
        if(!elm || !elm.getBoundingClientRect){
          return;
        }
        const rect = elm.getBoundingClientRect()
        if(rect.left < 0){
            console.log(elm, "left", `left: ${rect.left}px, right:${rect.right}px`);
        }
        if(rect.right > targetWidth){
            console.log(elm, "right", `left: ${rect.left}px, right:${rect.right}px`);
        }

    };
    
    elms.forEach(callback);

})();
