// src/data.js

export const navStructure = [
  {
    title: "Film",
    path: "film",
    sub: [
      { title: "Narrative", path: "narrative" },
      { 
        title: "Shortform", 
        path: "shortform",
        sub: [
          { title: "Microfilms", path: "microfilms" },
          { title: "Cinematics", path: "cinematics" }
        ]
      }
    ]
  },
  {
    title: "Photo",
    path: "photo",
    sub: [
      { title: "Flowers of Athens", path: "flowers-of-athens" },
      { title: "India on Digicam", path: "india-on-digicam" },
      { title: "Cityscapes Atlanta", path: "cityscapes-atlanta" }
    ]
  },
  { title: "Tech", path: "tech" },
  { title: "Graphic Design", path: "graphicdesign" }
];

export const workPool = [
  // --- FILM ---
  { id: 'm1', type: 'video', title: 'Liminal', src: '/assets/Microfilm/LIMINAL.mp4', link: '/film/shortform/microfilms' },
  { id: 'm2', type: 'video', title: 'Schlawgs', src: '/assets/Microfilm/Schlawgs.mp4', link: '/film/shortform/microfilms' },
  { id: 'm3', type: 'video', title: 'Hindu YUVA', src: '/assets/Microfilm/HinduYUVA_AD.mp4', link: '/film/shortform/microfilms' },
  { id: 'm4', type: 'video', title: 'Honeybee', src: '/assets/Microfilm/Honeybee.mp4', link: '/film/shortform/microfilms' },

  // --- ATHENS PHOTOS (Keep Uppercase .JPG if these were working) ---
  { id: 'ath1', type: 'photo', src: '/assets/Athens_Photos/IMG_7337.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath2', type: 'photo', src: '/assets/Athens_Photos/IMG_7389.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath3', type: 'photo', src: '/assets/Athens_Photos/IMG_7375.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath4', type: 'photo', src: '/assets/Athens_Photos/IMG_7368.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath5', type: 'photo', src: '/assets/Athens_Photos/IMG_7365.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath6', type: 'photo', src: '/assets/Athens_Photos/IMG_7352.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath7', type: 'photo', src: '/assets/Athens_Photos/IMG_7457.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath8', type: 'photo', src: '/assets/Athens_Photos/IMG_7385.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath9', type: 'photo', src: '/assets/Athens_Photos/IMG_7336.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath10', type: 'photo', src: '/assets/Athens_Photos/IMG_7350.JPG', link: '/photo/flowers-of-athens' },

  // --- ATLANTA PHOTOS (Switched to lowercase .jpg) ---
  // If some still break, check the file extension manually!
  { id: 'atl1', type: 'photo', src: '/assets/Atlanta_Photos/IMG_1538.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl2', type: 'photo', src: '/assets/Atlanta_Photos/IMG_1542.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl3', type: 'photo', src: '/assets/Atlanta_Photos/IMG_3167.jpg', link: '/photo/cityscapes-atlanta' },
  // Ensure you renamed the file below to remove " (1)"
  { id: 'atl4', type: 'photo', src: '/assets/Atlanta_Photos/IMG_0662.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl5', type: 'photo', src: '/assets/Atlanta_Photos/IMG_1526.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl6', type: 'photo', src: '/assets/Atlanta_Photos/IMG_1536.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl7', type: 'photo', src: '/assets/Atlanta_Photos/IMG_3145.jpg', link: '/photo/cityscapes-atlanta' },

  // --- INDIA PHOTOS (Switched to lowercase .jpg) ---
  { id: 'ind1', type: 'photo', src: '/assets/India_DigiCam/IMG_1593.JPG', link: '/photo/india-on-digicam' },
  { id: 'ind2', type: 'photo', src: '/assets/India_DigiCam/IMG_1557.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind3', type: 'photo', src: '/assets/India_DigiCam/IMG_1566.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind4', type: 'photo', src: '/assets/India_DigiCam/IMG_1577.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind5', type: 'photo', src: '/assets/India_DigiCam/IMG_1587.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind6', type: 'photo', src: '/assets/India_DigiCam/IMG_1508.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind7', type: 'photo', src: '/assets/India_DigiCam/IMG_1513.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind8', type: 'photo', src: '/assets/India_DigiCam/IMG_1534.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind9', type: 'photo', src: '/assets/India_DigiCam/IMG_1458.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind10', type: 'photo', src: '/assets/India_DigiCam/IMG_1478.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind11', type: 'photo', src: '/assets/India_DigiCam/IMG_1496.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind12', type: 'photo', src: '/assets/India_DigiCam/IMG_1399.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind13', type: 'photo', src: '/assets/India_DigiCam/IMG_1403.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind14', type: 'photo', src: '/assets/India_DigiCam/IMG_1409.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind15', type: 'photo', src: '/assets/India_DigiCam/IMG_1415.jpg', link: '/photo/india-on-digicam' },
];