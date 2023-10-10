import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import Box from '@mui/material/Box';

function WebcamViewer() {
  const webcamRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const webcamElement = webcamRef.current;
    const containerElement = containerRef.current;

    if (webcamElement && containerElement) {
      const videoElement = webcamElement.video;

      const handleResize = () => {
        const containerWidth = containerElement.offsetWidth;
        const containerHeight = containerElement.offsetHeight;
        const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;

        if (containerWidth / aspectRatio > containerHeight) {
          // If the container is wider than the video aspect ratio
          videoElement.style.width = '100%';
          videoElement.style.height = 'auto';
        } else {
          // If the container is taller than the video aspect ratio
          videoElement.style.width = 'auto';
          videoElement.style.height = '100%';
        }
      };

      // Call handleResize initially and on window resize
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <Box ref={containerRef} style={{ mx:'auto', width:'100%', maxWidth:'sm', 
   position: 'relative', overflow: 'hidden', borderRadius: '20px', zIndex:'modal', border:'1'}}>
      <Webcam
        ref={webcamRef}
        mirrored='true'
        // width = { 600 } // Adjust the preferred width as needed
        // height = { 600 } // Adjust the preferred height as needed
        videoConstraints={{
          facingMode: "user", aspectRatio: "0.5625"
        }}
        screenshotFormat="image/jpeg"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
}

export default WebcamViewer;
