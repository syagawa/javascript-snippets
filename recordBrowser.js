(async () => {
  const userConfirmed = confirm("start?");

  if (!userConfirmed) {
    console.log("cancelled");
    return;
  }

  const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 24 36">
    <path d="M2 1 L22 14 L13 18 L17 35 L10 35 L7 18 L2 1 Z"
      fill="white" stroke="black" stroke-width="2"/>
  </svg>`;
  const svgUrl = 'data:image/svg+xml;base64,' + btoa(svgData);
  const fakeCursor = document.createElement("img");
  fakeCursor.src = svgUrl;
  fakeCursor.id = "fake-cursor";

  Object.assign(fakeCursor.style, {
    position: "fixed",
    width: "24px",
    height: "36px",
    pointerEvents: "none",
    zIndex: "999999",
    top: "0px",
    left: "0px",
    transform: "translate(-4px, -4px)"
  });
  document.body.appendChild(fakeCursor);

  document.addEventListener("mousemove", e => {
    fakeCursor.style.left = `${e.clientX}px`;
    fakeCursor.style.top = `${e.clientY}px`;
  });

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
    }, 5000);
  } catch (err) {
    console.error("error:", err);
    alert("could not record");
  }
})();
