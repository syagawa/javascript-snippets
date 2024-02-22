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
        if(rect.left < 0 || rect.right > targetWidth){
            console.log(elm, `left: ${rect.left}px, right:${rect.right}`);
        }
    };
    
    elms.forEach(callback);

})();