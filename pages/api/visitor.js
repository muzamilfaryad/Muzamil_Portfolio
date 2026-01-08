import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Check if MongoDB is configured
    if (!process.env.MONGODB_URI) {
      return res.status(200).json({
        success: true,
        count: 0,
        message: 'Visitor tracking disabled (MongoDB not configured)'
      });
    }

    const client = await clientPromise;
    const db = client.db('portfolio');
    const visitorsCollection = db.collection('visitors');

    // Get or create visitor counter
    const counter = await visitorsCollection.findOne({ _id: 'visitor_count' });
    
    if (!counter) {
      // Initialize counter if it doesn't exist
      await visitorsCollection.insertOne({
        _id: 'visitor_count',
        count: 1,
        lastUpdated: new Date()
      });
      return res.status(200).json({ success: true, count: 1 });
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

  } catch (error) {
    console.error('Visitor API Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch visitor count',
      count: 0 
    });
  }
}
