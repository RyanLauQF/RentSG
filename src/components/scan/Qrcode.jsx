import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import VerifyQr from '../loading/VerifyQr';

function Qrcode() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error() {
      console.warn(err);
    }

    scanner.render(success, error);
  }, []);

  return (
    <div>
      {scanResult ? (
        <VerifyQr />
      ) : (
        <div>
          <h1>Scan QR Code</h1>
          <div id="reader"></div>
        </div>
      )}
    </div>
  );
}

export default Qrcode;
