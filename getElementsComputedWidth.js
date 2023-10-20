onst elms_ = document.querySelectorAll("*");
const arr = [];

const elms = [...elms_, document, window];

const callback = (elm) => {
   for(const [prop, val] of elm.computedStyleMap()){
     // console.log(prop,val)
     if(prop === "width"){
       if(val[0].unit === "px" && val[0].value > 1000){
         console.log(elm, val[0].value);
       }
     }
   }
};

elms.forEach(callback);
