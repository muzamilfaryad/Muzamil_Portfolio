// Simple in-memory visitor counter (for demo purposes)
// Replace with MongoDB when you have a database connection

let visitorCount = 1250; // Starting count

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Try MongoDB connection if available
    if (process.env.MONGODB_URI) {
      try {
        const clientPromise = require('../../lib/mongodb').default;
        const client = await clientPromise;
        const db = client.db('portfolio');
        const visitorsCollection = db.collection('visitors');

        // Get or create visitor counter
        const counter = await visitorsCollection.findOne({ _id: 'visitor_count' });
        
        if (!counter) {
          // Initialize counter if it doesn't exist
          await visitorsCollection.insertOne({
            _id: 'visitor_count',
            count: visitorCount,
            lastUpdated: new Date()
          });
          return res.status(200).json({ success: true, count: visitorCount });
        }

        // Increment visitor count
        const result = await visitorsCollection.findOneAndUpdate(
          { _id: 'visitor_count' },
          { 
            $inc: { count: 1 },
            $set: { lastUpdated: new Date() }
          },
          { returnDocument: 'after' }
        );

        return res.status(200).json({ 
          success: true, 
          count: result.count 
        });
      } catch (dbError) {
        console.log('MongoDB not available, using fallback counter');
      }
    }

    // Fallback: Use simple in-memory counter
    visitorCount += Math.floor(Math.random() * 3); // Increment by 0-2 for demo
    
    return res.status(200).json({ 
      success: true, 
      count: visitorCount 
    });

  } catch (error) {
    console.error('Visitor API Error:', error);
    // Return a default count even on error
    return res.status(200).json({ 
      success: true, 
      count: visitorCount 
    });
  }
}
