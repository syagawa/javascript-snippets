(async () => {
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
  
      setTimeout(() => {
        recorder.stop();
        stream.getTracks().forEach(track => track.stop());
        console.log("stop and save");
      }, length);
    } catch (err) {
      console.error("error:", err);
      alert("could not record");
    }
  }

  start(30000);
})();
