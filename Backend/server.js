require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 5000;

// loading variables
console.log('Loaded ENV:', {
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET
});

// cloudinary env. variables
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});


app.use(cors());
app.use(express.json());


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'ashok-vatika-media',
      resource_type: 'auto' //for images and videos
    };
  }
});

const upload = multer({ storage });

// post route
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log('Uploaded file:', req.file);

    res.json({ url: req.file.path || req.file.secure_url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Something went wrong during upload' });
  }
});


app.get('/', (req, res) => {
  res.send('Welcome to the Ashok Vatika Media Upload API!');
});



app.get('/api/gallery', async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      //prefix: 'ashok-vatika-media/',  
      max_results: 30,               
      resource_type: 'image',        
      direction: 'desc'              
    });

    
    const images = result.resources.map(file => file.secure_url);
    res.json({ images });
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images from Cloudinary' });
  }
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
