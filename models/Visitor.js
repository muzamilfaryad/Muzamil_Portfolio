import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
  ipAddress: String,
  userAgent: String,
  page: String,
  referrer: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Visitor || 
  mongoose.model('Visitor', VisitorSchema);
