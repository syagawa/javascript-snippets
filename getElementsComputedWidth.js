const elms_ = document.querySelectorAll("*");
const arr = [];
const elms = [...elms_, document, window];
const targetWidth = 1000;

const callback = (elm) => {
   const cw = elm.clientWidth;
   if(cw > targetWidth){
       const cssw = elm.computedStyleMap().get("width");
       console.log(elm, "width:", cw, cssw);
   }
};

elms.forEach(callback);
