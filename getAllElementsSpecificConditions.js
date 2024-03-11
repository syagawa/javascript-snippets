// run in browser console
(function(event_name){
  const elms_ = document.querySelectorAll("*");
  const arr = [];

  const elms = [...elms_, document, window];

  const callback = (elm) => {
    const events = getEventListeners(elm);
    
    for(let key in events){
      if(key.includes(event_name)){
        arr.push(elm);
      }
    }
  };

  elms.forEach(callback);

  console.log(arr);
})("scroll");
