// run in browser console
(function(){
  const elms_ = document.querySelectorAll("*");
  const arr = [];

  const elms = [...elms_, document, window];

  const callback = (elm) => {
    const events = getEventListeners(elm);
    
    for(let key in events){
      if(key.includes("scroll")){
        arr.push(elm);
      }
    }
  };

  elms.forEach(callback);

  console.log(arr);
})();
