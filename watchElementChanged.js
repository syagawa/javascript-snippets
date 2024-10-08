(function(selector){
  const targets = document.querySelectorAll(selector);
  const config = { attributes: true, childList: true, subtree: true };
  
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        console.log("add or delete", mutation);
      } else if (mutation.type === "attributes") {
        console.log(`changed: ${mutation.attributeName}`, mutation);
        debugger;
      }
      for(let k in mutation){
        console.log(k, mutation[k])
      }
    }
  };

  targets.forEach(target => {
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  })

})(".target-selector")

