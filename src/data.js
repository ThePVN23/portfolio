import signature from './assets/signature.png';

export const signatureImg = signature;

/* --- 1. NAVIGATION STRUCTURE --- */
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
  { title: "Graphic Design", path: "graphicdesign" },
  { title: "About", path: "about" }
];

/* --- 2. GRAPHIC DESIGN DATA (Corrected Paths) --- */
export const graphicDesignItems = [
  { id: 'gd-1', src: '/assets/Graphic_Design/DIL_CHAHTA_HAI.jpg', title: 'Dil Chahta Hai' },
  { id: 'gd-2', src: '/assets/Graphic_Design/Dussehra (3).jpg', title: 'Dussehra' },
  { id: 'gd-3', src: '/assets/Graphic_Design/Dṛg.jpg', title: 'Dṛg' },
  { id: 'gd-4', src: '/assets/Graphic_Design/Ganesh_Chaturthi.jpg', title: 'Ganesh Chaturthi' },
  { id: 'gd-5', src: '/assets/Graphic_Design/MEBS_FLYER_1.jpg', title: 'MEBS Flyer' },
  { id: 'gd-6', src: '/assets/Graphic_Design/MOVIE NIGHT MEBS (1).jpg', title: 'Movie Night MEBS' },
  { id: 'gd-7', src: '/assets/Graphic_Design/VSC_1_Flyer.jpg', title: 'VSC Flyer' },
  { id: 'gd-8', src: '/assets/Graphic_Design/What_is_Hinduism.png', title: 'What is Hinduism' },
];

/* --- 3. MANUAL PHOTO POOL --- */
const manualPhotos = [
  // --- ATHENS PHOTOS ---
  { id: 'ath-1', type: 'photo', src: '/assets/Athens_Photos/IMG_7336.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath-2', type: 'photo', src: '/assets/Athens_Photos/IMG_7337.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath-3', type: 'photo', src: '/assets/Athens_Photos/IMG_7350.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath-4', type: 'photo', src: '/assets/Athens_Photos/IMG_7352.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath-5', type: 'photo', src: '/assets/Athens_Photos/IMG_7365.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath-6', type: 'photo', src: '/assets/Athens_Photos/IMG_7368.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath-7', type: 'photo', src: '/assets/Athens_Photos/IMG_7375.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath-8', type: 'photo', src: '/assets/Athens_Photos/IMG_7385.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath-9', type: 'photo', src: '/assets/Athens_Photos/IMG_7389.JPG', link: '/photo/flowers-of-athens' },
  { id: 'ath-10', type: 'photo', src: '/assets/Athens_Photos/IMG_7457.JPG', link: '/photo/flowers-of-athens' },

  // --- ATLANTA PHOTOS ---
  { id: 'atl-1', type: 'photo', src: '/assets/Atlanta_Photos/IMG_0662.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl-2', type: 'photo', src: '/assets/Atlanta_Photos/IMG_1526.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl-3', type: 'photo', src: '/assets/Atlanta_Photos/IMG_1536.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl-4', type: 'photo', src: '/assets/Atlanta_Photos/IMG_1538.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl-5', type: 'photo', src: '/assets/Atlanta_Photos/IMG_1542.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl-6', type: 'photo', src: '/assets/Atlanta_Photos/IMG_3145.jpg', link: '/photo/cityscapes-atlanta' },
  { id: 'atl-7', type: 'photo', src: '/assets/Atlanta_Photos/IMG_3167.jpg', link: '/photo/cityscapes-atlanta' },

  // --- INDIA PHOTOS ---
  { id: 'ind-1', type: 'photo', src: '/assets/India_DigiCam/IMG_1399.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-2', type: 'photo', src: '/assets/India_DigiCam/IMG_1403.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-3', type: 'photo', src: '/assets/India_DigiCam/IMG_1409.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-4', type: 'photo', src: '/assets/India_DigiCam/IMG_1415.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-5', type: 'photo', src: '/assets/India_DigiCam/IMG_1458.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-6', type: 'photo', src: '/assets/India_DigiCam/IMG_1478.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-7', type: 'photo', src: '/assets/India_DigiCam/IMG_1496.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-8', type: 'photo', src: '/assets/India_DigiCam/IMG_1508.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-9', type: 'photo', src: '/assets/India_DigiCam/IMG_1513.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-10', type: 'photo', src: '/assets/India_DigiCam/IMG_1534.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-11', type: 'photo', src: '/assets/India_DigiCam/IMG_1557.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-12', type: 'photo', src: '/assets/India_DigiCam/IMG_1566.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-13', type: 'photo', src: '/assets/India_DigiCam/IMG_1577.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-14', type: 'photo', src: '/assets/India_DigiCam/IMG_1587.jpg', link: '/photo/india-on-digicam' },
  { id: 'ind-15', type: 'photo', src: '/assets/India_DigiCam/IMG_1593.jpg', link: '/photo/india-on-digicam' },
];

/* --- 4. PORTFOLIO DATA (Videos & Narratives) --- */
export const portfolioData = [
  {
    category: "film",
    structure: [
      {
        header: "Narrative",
        path: "narrative",
        items: [
           {
             title: "Wrong Order",
             slug: "wrong-order",
             year: "2023",
             thumbnail: "/assets/Wrong_Order_Stills/Screenshot 2026-01-07 231003.png",
             embedSrc: "https://www.youtube.com/embed/NMdz4CuAFiw?si=uv7NROKRxePWWM9i",
             stills: [
               "/assets/Wrong_Order_Stills/Screenshot 2026-01-07 231003.png",
               "/assets/Wrong_Order_Stills/Screenshot 2026-01-07 231023.png",
               "/assets/Wrong_Order_Stills/Screenshot 2026-01-07 231044.png",
               "/assets/Wrong_Order_Stills/Screenshot 2026-01-07 231113.png"
             ]
           },
           {
             title: "Eulogy",
             slug: "eulogy",
             year: "2024",
             thumbnail: "/assets/Eulogy_Stills/Screenshot 2026-01-07 230703.png",
             embedSrc: "https://www.youtube.com/embed/5yMmssh3sdA?si=DSuhRg-bpOkE_0EJ",
             stills: [
               "/assets/Eulogy_Stills/Screenshot 2026-01-07 230703.png",
               "/assets/Eulogy_Stills/Screenshot 2026-01-07 230716.png",
               "/assets/Eulogy_Stills/Screenshot 2026-01-07 230732.png",
               "/assets/Eulogy_Stills/Screenshot 2026-01-07 230749.png",
               "/assets/Eulogy_Stills/Screenshot 2026-01-07 230811.png"
             ]
           }
        ]
      },
      {
        type: "nested",
        path: "shortform",
        subcategories: [
          {
            title: "Microfilms",
            path: "microfilms",
            items: [
              { title: "Chai", slug: "chai", videoSrc: "/assets/Microfilm/HinduYUVA_AD.mp4" },
              { title: "Liminal", slug: "liminal", videoSrc: "/assets/Microfilm/LIMINAL.mp4" },
              { title: "Honeybee", slug: "honeybee", videoSrc: "/assets/Microfilm/Honeybee.mp4" },
              { title: "Schlawgs", slug: "schlawgs", videoSrc: "/assets/Microfilm/Schlawgs.mp4" }
            ]
          },
          {
            title: "Cinematics",
            path: "cinematics",
            items: [
              { title: "Atlanta Night Drive", slug: "atl-night", videoSrc: "/assets/Cinematics/Atlanta_Night_Drive.mp4" },
              { title: "Atlanta Night Skyline", slug: "atl-skyline", videoSrc: "/assets/Cinematics/Atlanta_Night_Skyline.mp4" },
              { title: "Autumn in Athens", slug: "autumn", videoSrc: "/assets/Cinematics/Autumn in Athens.mp4" },
              { title: "Blue Hour", slug: "blue-hour", videoSrc: "/assets/Cinematics/Blue Hour.mp4" },
              { title: "Blue Mountains", slug: "blue-mountains", videoSrc: "/assets/Cinematics/Blue_Mountains.mp4" },
              { title: "Golden Hour Atlanta", slug: "golden-hour", videoSrc: "/assets/Cinematics/Golden_Hour_Atlanta_Edition.mp4" },
              { title: "Its All Gone", slug: "gone", videoSrc: "/assets/Cinematics/Its_All_Gone.mp4" },
              { title: "The Woods", slug: "woods", videoSrc: "/assets/Cinematics/The Woods.mp4" }
            ]
          }
        ]
      }
    ]
  }
];

// --- 5. COMBINE EVERYTHING ---
const generatePool = () => {
  const pool = [...manualPhotos];

  portfolioData.forEach(cat => {
    cat.structure.forEach(sec => {
      const processItems = (items) => {
        items.forEach(item => {
          if (item.videoSrc) {
            pool.push({ 
                id: item.slug, 
                type: 'video', 
                src: item.videoSrc, 
                link: `/project/${item.slug}`, 
                title: item.title 
            });
          } else if (item.embedSrc || (item.stills && item.stills.length > 0)) {
            const img = item.thumbnail || item.stills[0];
            pool.push({ 
                id: item.slug, 
                type: 'photo', 
                src: img, 
                link: `/project/${item.slug}`, 
                title: item.title 
            });
          }
        });
      };

      if (sec.items) processItems(sec.items);
      if (sec.subcategories) sec.subcategories.forEach(sub => processItems(sub.items));
    });
  });
  
  return pool;
};

export const workPool = generatePool();