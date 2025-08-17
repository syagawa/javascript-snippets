(async (len) => {

  const setKeyUpEvent = ({keyName, count, callback}) => {
    if(!keyName){
      return;
    }
    if(typeof callback !== "function"){
      return;
    }
    if(!count){
      count = 2;
    }
    let keyCount = 0;
    const evtCb = (event) => {
      const key = event.key;
      console.log(keyName);
      if(key === keyName){
        keyCount++;
      }
      if(keyCount === count){
        keyCount = 0;
        document.removeEventListener("keyup", evtCb, false);
        callback();
      }
    };
    document.addEventListener("keyup", evtCb, false);
  }
  

  const start = async(length) => {
    if(!length){
      length = 5000;
    }
    const userConfirmed = confirm("start?");
  
    if (!userConfirmed) {
      console.log("cancelled");
      return;
    }
  
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { fakeCursor: "always" },
        audio: false
      });
  
      const recorder = new MediaRecorder(stream);
      const chunks = [];
  
      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "recorded.webm";
        a.click();
        fakeCursor.remove();
      };

      recorder.start();
      console.log("rec start");
  
      const stop = () => {
        recorder.stop();
        stream.getTracks().forEach(track => track.stop());
        console.log("stop and save");
      };
      setTimeout(stop, length);

      setKeyUpEvent({keyName: "Shift", count: 2, callback: stop});

    } catch (err) {
      console.error("error:", err);
      alert("could not record");
    }
  }

  start(len);
})(50000);
