# Deployment Checklist

## 🚀 Pre-Deployment Steps

### 1. ✅ Review Content
- [ ] Update personal information in all components
- [ ] Add your MongoDB password to .env.local
- [ ] Update WhatsApp link
- [ ] Update email address and phone number
- [ ] Update social media links (GitHub, LinkedIn)
- [ ] Review project descriptions
- [ ] Check all images are in public folder
- [ ] Test all navigation links

### 2. ✅ Test Locally
- [ ] Run `npm run dev` and test on http://localhost:3000
- [ ] Test all sections (Hero, About, Skills, Projects, Contact)
- [ ] Test navigation menu (desktop and mobile)
- [ ] Test contact form submission
- [ ] Test responsive design on mobile/tablet
- [ ] Test all external links
- [ ] Test download CV button

### 3. ✅ Environment Variables
- [ ] MONGODB_URI configured
- [ ] NEXT_PUBLIC_WHATSAPP_LINK configured
- [ ] EMAIL_USER configured (if using contact form)
- [ ] EMAIL_PASSWORD configured (if using contact form)

### 4. ✅ Build Test
Run production build locally:
```bash
npm run build
npm start
```
- [ ] Build completes without errors
- [ ] Test the production build works

---

## 🌐 Vercel Deployment (Recommended)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Add Environment Variables
In Vercel dashboard, go to Settings → Environment Variables, add:
```
MONGODB_URI=mongodb+srv://learningsquard_db_user:YOUR_PASSWORD@cluster0.rnxydq8.mongodb.net/portfolio?appName=Cluster0
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/message/RVOEO7OMWGBZA1
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### Step 4: Deploy
- Click "Deploy"
- Wait for build to complete
- Your site will be live at: `your-project.vercel.app`

### Step 5: Custom Domain (Optional)
1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic

---

## 🔷 Alternative: Netlify Deployment

### Step 1: Build Command Setup
Create `netlify.toml` file:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Step 3: Environment Variables
In Site settings → Environment variables, add the same variables as Vercel

### Step 4: Deploy
- Click "Deploy site"
- Your site will be live at: `your-site.netlify.app`

---

## ☁️ AWS Amplify Deployment

### Step 1: Setup
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "Get Started" under Deploy
3. Connect your GitHub repository

### Step 2: Build Settings
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Step 3: Environment Variables
Add in Environment variables section

### Step 4: Deploy
- Save and deploy
- Your site will be live at: `yourdomain.amplifyapp.com`

---

## 🗄️ MongoDB Atlas Setup

### Allow Access from Anywhere (for Vercel/Netlify)
1. Go to MongoDB Atlas dashboard
2. Click "Network Access" in left sidebar
3. Click "Add IP Address"
4. Click "Allow Access from Anywhere"
5. Enter `0.0.0.0/0`
6. Click "Confirm"

**Note:** For production, consider using Vercel's IP ranges for better security

---

## 📧 Email Setup (Gmail)

### Enable App Password
1. Go to [Google Account](https://myaccount.google.com)
2. Security → 2-Step Verification (enable if not enabled)
3. Security → App passwords
4. Select app: Mail
5. Select device: Other (Custom name)
6. Enter "Portfolio Contact Form"
7. Click "Generate"
8. Copy the 16-character password
9. Use this as EMAIL_PASSWORD

---

## 🔍 Post-Deployment Checklist

After deployment, test:
- [ ] Website loads correctly
- [ ] All sections display properly
- [ ] Navigation works
- [ ] Mobile responsive design works
- [ ] Contact form submits successfully
- [ ] Email notifications work (if configured)
- [ ] All external links work
- [ ] CV download works
- [ ] WhatsApp link works
- [ ] Page load speed is good (test with PageSpeed Insights)
- [ ] SSL certificate is active (https://)

---

## 🔧 Troubleshooting

### Build Fails
- Check for TypeScript errors (if any)
- Verify all dependencies are in package.json
- Check for missing environment variables
- Review build logs for specific errors

### Images Not Loading
- Ensure images are in `public` folder
- Check image paths in components
- Verify image file names match exactly

### Contact Form Not Working
- Verify EMAIL_USER and EMAIL_PASSWORD
- Check API route is deployed
- Test email credentials locally first
- Review server logs for errors

### MongoDB Connection Fails
- Verify MONGODB_URI is correct
- Check database password
- Ensure IP whitelist includes 0.0.0.0/0
- Test connection string locally

---

## 🎯 Performance Optimization

### Before Going Live
- [ ] Optimize images (compress, use WebP format)
- [ ] Enable caching headers
- [ ] Minimize CSS/JS
- [ ] Enable compression
- [ ] Test with Google PageSpeed Insights
- [ ] Test with GTmetrix
- [ ] Add sitemap.xml
- [ ] Add robots.txt

### SEO Optimization
- [ ] Add meta descriptions
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (optional)

---

## 📊 Monitoring

### After Deployment
1. **Set up monitoring:**
   - Vercel Analytics (built-in)
   - Google Analytics
   - Sentry for error tracking

2. **Regular checks:**
   - Weekly: Check contact form submissions
   - Monthly: Review analytics
   - Quarterly: Update content and projects

---

## 🎉 You're Ready to Deploy!

Follow this checklist step by step, and your portfolio will be live and professional!

**Need help?** Review the README.md and SETUP_GUIDE.md files.
