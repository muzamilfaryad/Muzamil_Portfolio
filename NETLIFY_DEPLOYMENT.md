# Netlify Deployment Guide

## ✅ What's Already Done
- ✅ `netlify.toml` configuration file created
- ✅ `@netlify/plugin-nextjs` installed
- ✅ `next.config.js` updated (removed deprecation warning)
- ✅ All changes pushed to GitHub

## 🚀 Next Steps: Deploy to Netlify

### Step 1: Sign Up/Login to Netlify
1. Go to https://app.netlify.com
2. Sign up or log in (use GitHub for easier integration)

### Step 2: Import Your Repository
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to access your GitHub account
4. Select your repository: **`muzamilfaryad/Muzamil_Portfolio`**

### Step 3: Configure Build Settings
Netlify will auto-detect your settings from `netlify.toml`, but verify:
- **Branch to deploy**: `main`
- **Build command**: `npm run build` (auto-filled)
- **Publish directory**: `.next` (auto-filled)
- **Build plugins**: Should show `@netlify/plugin-nextjs`

Click **"Deploy site"**

### Step 4: Add Environment Variables (Optional)
If you want to use MongoDB or email functionality:

1. Go to **Site settings** → **Build & deploy** → **Environment variables**
2. Click **"Add a variable"** and add these (if needed):

```
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/message/RVOEO7OMWGBZA1
```

3. Save and trigger a new deploy

### Step 5: Wait for Deployment
- First build takes ~2-5 minutes
- Netlify will show build logs in real-time
- Once complete, you'll get a live URL (e.g., `your-site-name.netlify.app`)

### Step 6: Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow instructions to connect your domain
4. Netlify provides free SSL certificates automatically

## 🔄 Updating Your Site

After the initial setup, updates are automatic:

1. Make changes locally
2. Commit: `git add . && git commit -m "your message"`
3. Push: `git push`
4. Netlify automatically detects the push and deploys!

You can view build progress at: `https://app.netlify.com/sites/YOUR-SITE-NAME/deploys`

## 📊 Features Working on Netlify
- ✅ All pages (SSR and static)
- ✅ API routes (`/api/visitor`, `/api/contact`)
- ✅ Image optimization
- ✅ Visitor counter (with fallback)
- ✅ Contact form
- ✅ All animations and interactions

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Make sure Node version is 18+ (set in `netlify.toml`)

### API Routes Not Working
- Verify `@netlify/plugin-nextjs` is in `package.json` devDependencies
- Check that `netlify.toml` has the plugin configuration
- Redeploy the site

### Images Not Loading
- Check `next.config.js` has correct `remotePatterns`
- Ensure image paths are correct

### MongoDB Connection Issues
- Verify `MONGODB_URI` is set in Netlify environment variables
- Check MongoDB Atlas allows connections from all IPs (0.0.0.0/0)
- The site works without MongoDB using the fallback counter

## 🎉 You're Done!
Your portfolio will be live at your Netlify URL with automatic deployments on every push to GitHub!
