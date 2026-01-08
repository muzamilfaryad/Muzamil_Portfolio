# Setting Up MongoDB for Visitor Counter

## Option 1: Without Database (Current Setup)
The visitor counter now works without MongoDB using an in-memory counter. It will display visitor counts immediately.

## Option 2: With MongoDB Atlas (Recommended for Production)

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new cluster (choose the free tier)

### Step 2: Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. It will look like: `mongodb+srv://username:<password>@cluster.mongodb.net/?retryWrites=true&w=majority`

### Step 3: Create Environment File
1. In your project root, create a file named `.env.local`
2. Add the following (replace with your actual connection string):

```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

### Step 4: Restart Development Server
```bash
npm run dev
```

Now your visitor counter will use MongoDB and persist across server restarts!

## Current Status
✅ Visitor counter works with fallback (showing ~1250+ visitors)
✅ Updates automatically every 30 seconds
✅ No database required for demo
✅ Can be upgraded to MongoDB anytime by adding `.env.local`

## Note
The current implementation shows a demo counter that increments slightly on each page load. This is perfect for development and showcasing your portfolio. For production with real visitor tracking, set up MongoDB Atlas using the steps above.
