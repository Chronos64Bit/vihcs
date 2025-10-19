# vihcs
Ventryx Image Hosting Content System

vihcs/                     # Root project folder
│
├─ api/                     # Serverless functions (Vercel API routes)
│   ├─ upload.js            # POST endpoint: upload images, generate ID, store in blob
│   └─ image.js             # GET endpoint: fetch images by ID from blob and serve
│
├─ package.json             # Node.js dependencies & scripts
├─ package-lock.json        # Auto-generated dependency lock file
├─ vercel.json              # Vercel config: routes and builds

