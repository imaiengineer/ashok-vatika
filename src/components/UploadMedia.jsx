import React, { useState } from 'react';

function UploadMedia() {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setUploadedUrl(data.url);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Upload failed. Check console for details.');
    }
  };

  return (
    <div>
      <h2>Upload Image/Video</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploadedUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Uploaded Media:</h3>
          {uploadedUrl.match(/\.(mp4)$/) ? (
            <video width="400" controls>
              <source src={uploadedUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={uploadedUrl} alt="Uploaded" width="400" />
          )}
        </div>
      )}
    </div>
  );
}

export default UploadMedia;
