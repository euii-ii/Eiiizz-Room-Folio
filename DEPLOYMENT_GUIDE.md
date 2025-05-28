# 🚀 Firebase Deployment Guide for Room Portfolio

## 📋 Prerequisites

1. **Node.js** installed (you already have this)
2. **Firebase CLI** installed globally
3. **Firebase account** (free tier is sufficient)
4. **Firebase project** created

## 🛠️ Setup Steps

### Step 1: Install Firebase CLI (if not already installed)
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```
This will open your browser to authenticate with Google.

### Step 3: Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "room-portfolio-eshani")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

### Step 4: Initialize Firebase in Your Project
```bash
firebase init hosting
```

When prompted:
- **Select a default Firebase project**: Choose the project you just created
- **What do you want to use as your public directory?**: Enter `dist`
- **Configure as a single-page app?**: Yes
- **Set up automatic builds and deploys with GitHub?**: No (for now)
- **Overwrite index.html?**: No

### Step 5: Update .firebaserc
Edit `.firebaserc` and replace `"your-project-id"` with your actual Firebase project ID:
```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

### Step 6: Build and Deploy
```bash
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Deploy to Firebase (`firebase deploy`)

## 🎯 Quick Deploy Commands

After initial setup, you can use these commands:

```bash
# Build and deploy in one command
npm run deploy

# Just build (for testing)
npm run build

# Preview locally before deploying
npm run preview

# Serve Firebase hosting locally
npm run firebase:serve
```

## 🔧 Configuration Files Created

### `firebase.json`
- Configures Firebase hosting settings
- Sets `dist` as the public directory
- Includes caching headers for optimal performance
- Handles SPA routing

### `vite.config.js` (Updated)
- Optimized build configuration
- Code splitting for better performance
- Asset optimization

### `package.json` (Updated)
- Added deployment scripts
- Firebase-related commands

## 🌐 After Deployment

Your site will be available at:
- **Primary URL**: `https://your-project-id.web.app`
- **Secondary URL**: `https://your-project-id.firebaseapp.com`

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails**: Check for any TypeScript/JavaScript errors
2. **Assets not loading**: Ensure all paths are relative
3. **3D models not loading**: Check CORS settings and file paths
4. **Audio not playing**: Verify audio file formats and paths

### Debug Commands:
```bash
# Check Firebase project status
firebase projects:list

# View hosting info
firebase hosting:sites:list

# Check deployment history
firebase hosting:releases:list
```

## 📊 Performance Optimization

The configuration includes:
- **Asset caching** (1 year for static assets)
- **Code splitting** (vendor chunks)
- **Minification** enabled
- **Source maps** disabled for production

## 🔄 Continuous Deployment

For automatic deployments, you can set up GitHub Actions:
1. Go to Firebase Console → Hosting
2. Click "Set up GitHub integration"
3. Follow the setup wizard

## 📝 Next Steps

1. **Custom Domain**: Add your own domain in Firebase Console
2. **Analytics**: Set up Firebase Analytics
3. **Performance Monitoring**: Enable Firebase Performance
4. **Security Rules**: Configure if using Firebase services

## 🎉 Success!

Once deployed, your 3D room portfolio will be live and accessible worldwide!

Remember to test all interactive features:
- ✅ 3D model loading
- ✅ Audio playback
- ✅ Modal interactions
- ✅ Theme switching
- ✅ Responsive design
