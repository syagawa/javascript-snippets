// run in browser console
(function(){
    const hideElement = (elm) => {
        elm.style.display="none";
        elm.style.backgroundImage="none !important";
    };
    document.querySelectorAll("img").forEach((e)=>{hideElement(e)});
    document.querySelectorAll("*[class*=img]").forEach((e)=>{hideElement(e)});
    document.querySelectorAll("svg").forEach((e)=>{hideElement(e)});

    document.querySelectorAll("iframe").forEach((e) => {
        if(e.contentDocument){
            e.contentDocument.querySelectorAll("img").forEach((e)=>{hideElement(e)});
            e.contentDocument.querySelectorAll("*[class*=img]").forEach((e)=>{hideElement(e)});
            e.contentDocument.querySelectorAll("svg").forEach((e)=>{hideElement(e)});
        
        }
    });

})();