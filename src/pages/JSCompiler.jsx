import React, { useEffect, useRef } from "react";

const IframeComponent = () => {
  const iframeRef = useRef(null);


  useEffect(() => {
    const handleMessage = (event) => {
     
      if (event.origin !== "http://localhost:5174") return;

      console.log("Message from iframe:", event.data);
      alert("Message from iframe: " + event.data);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);


  const sendMessage = () => {
    iframeRef.current.contentWindow.postMessage(
      "Hello from parent!",
      "http://localhost:5174" 
    );
  };

  return (
    <div>
      <h1>Parent App (localhost:5173)</h1>
      <iframe
        ref={iframeRef}
        src="http://localhost:5174"
        width="600"
        height="400"
        title="Child Iframe"
        className="border"
      ></iframe>
      <button
        onClick={sendMessage}
        className="p-2 bg-blue-500 text-white rounded mt-2"
      >
        Send Message to Iframe
      </button>
    </div>
  );
};

export default IframeComponent;
